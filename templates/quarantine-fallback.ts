export type QuarantineReason = {
  id: string;
  severity: 'low' | 'medium' | 'high';
  message: string;
  source?: 'npm-supply-chain-guard' | 'manual-review' | 'runtime-healthcheck' | 'admin';
};

export type QuarantineState = {
  paused: boolean;
  reasons: QuarantineReason[];
  startedAt: string;
  reviewedBy?: string;
};

const state: Record<string, QuarantineState> = {};

export function quarantineFeature(featureId: string, reason: QuarantineReason, reviewedBy?: string) {
  const current = state[featureId] ?? { paused: false, reasons: [], startedAt: new Date().toISOString() };
  state[featureId] = {
    ...current,
    paused: true,
    reviewedBy,
    reasons: [...current.reasons, reason],
  };
}

export function releaseFeature(featureId: string, reviewedBy: string) {
  if (!state[featureId]) return;
  state[featureId] = { ...state[featureId], paused: false, reviewedBy };
}

export function isFeatureQuarantined(featureId: string) {
  return Boolean(state[featureId]?.paused);
}

export function getQuarantineState(featureId: string) {
  return state[featureId] ?? null;
}

export function withQuarantine<TArgs extends unknown[], TResult>(
  featureId: string,
  fn: (...args: TArgs) => TResult,
  fallback: (...args: TArgs) => TResult,
) {
  return (...args: TArgs): TResult => {
    if (isFeatureQuarantined(featureId)) return fallback(...args);
    try {
      return fn(...args);
    } catch (error) {
      quarantineFeature(featureId, {
        id: `runtime-${featureId}-${Date.now()}`,
        severity: 'high',
        source: 'runtime-healthcheck',
        message: error instanceof Error ? error.message : 'Unknown runtime failure',
      });
      return fallback(...args);
    }
  };
}

export const disabledCheckoutFallback = () => ({
  ok: false,
  status: 'paused_for_security_review',
  message: 'Checkout is temporarily paused while we review a security signal. No files or payments were unlocked.',
});
