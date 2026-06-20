#!/usr/bin/env python3
from pathlib import Path
import re, sys
root = Path(__file__).resolve().parents[1]
required = [
    'README.md','LICENSE','install.sh','.gitignore','docs/SUBMISSION.md','docs/PROJECT_STRUCTURE.md','skill/SKILL.md',
    'skill/marketplace-wedge.md','skill/web2-5-ux.md','skill/license-models.md',
    'skill/protected-delivery.md','skill/solana-receipts.md','skill/creator-onboarding.md',
    'skill/ip-risk-checklist.md','skill/metrics-and-funnel.md','skill/funding-readiness.md','skill/security-threat-model.md','references/site-ux-patterns.md','rules/cybersecurity-baseline.md',
    'templates/creator-intake.md','templates/asset-license-brief.md','templates/marketplace-risk-register.md',
    'templates/demo-script.md','templates/investor-one-pager.md','templates/react-marketplace-seeds.ts',
    'components/SeededMarketplacePage.tsx','docs/REACT_SEEDED_COMPONENTS.md','docs/STORYTELLING.md',
    'docs/SUPPLY_CHAIN_SECURITY.md','scripts/npm_supply_chain_guard.py','templates/quarantine-fallback.ts','templates/maintenance-page.html',
    'commands/design-marketplace-flow.md','commands/generate-creator-intake.md',
    'commands/generate-license-brief.md','commands/prepare-funding-demo.md',
    'agents/marketplace-product-strategist.md','agents/creator-ops-reviewer.md','agents/solana-receipt-architect.md',
    'rules/ip-and-licensing-safety.md','rules/no-wallet-first-ux.md',
    'examples/threed-cc-marketplace.md','examples/hackathon-ticketing.md','examples/music-drop-membership.md'
]
errors=[]
for rel in required:
    p=root/rel
    if not p.exists():
        errors.append(f'missing {rel}')
    elif p.stat().st_size < 80:
        errors.append(f'too small {rel}')
skill=(root/'skill/SKILL.md').read_text(encoding='utf-8')
if not skill.startswith('---\n'):
    errors.append('SKILL.md missing YAML frontmatter start')
if '\n---\n' not in skill[4:]:
    errors.append('SKILL.md missing YAML frontmatter close')
for needle in ['description:', 'name:', 'Routing', 'Verification checklist', 'Human tone rule']:
    if needle not in skill:
        errors.append(f'SKILL.md missing {needle}')
readme=(root/'README.md').read_text(encoding='utf-8')
for needle in ['Why this belongs in Solana AI Kit','Real utility first','Quick start prompts','Hackathon use cases','Safety notes']:
    if needle not in readme:
        errors.append(f'README missing {needle}')

for m in re.findall(r'`([^`]+\.md)`', skill):
    if not (root/'skill'/m).exists() and not (root/m).exists():
        errors.append(f'SKILL references missing file: {m}')
if errors:
    print('FAIL')
    for e in errors: print('-', e)
    sys.exit(1)
print('OK: validated', len(required), 'required files')
print('SKILL.md chars:', len(skill))
print('README chars:', len(readme))
