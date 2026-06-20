# Project Structure

This repository follows the Solana AI Kit skill shape while keeping bounty/supporting material out of the root directory.

```text
.
├── README.md                     # GitHub-facing overview
├── LICENSE                       # MIT license
├── install.sh                    # Local installer / copy script
├── skill/                        # Main progressive skill modules
│   ├── SKILL.md                  # Entry point and router
│   ├── marketplace-wedge.md
│   ├── web2-5-ux.md
│   ├── license-models.md
│   ├── protected-delivery.md
│   ├── solana-receipts.md
│   ├── creator-onboarding.md
│   ├── ip-risk-checklist.md
│   ├── metrics-and-funnel.md
│   ├── funding-readiness.md
│   └── security-threat-model.md
├── templates/                    # Templates, seed data, quarantine fallback, maintenance page
├── components/                   # React/Tailwind marketplace components rendered from seeds
├── scripts/                      # Validation and supply-chain guard scripts
├── commands/                     # Workflow command specs
├── agents/                       # Specialist agent specs
├── rules/                        # Safety and product rules
├── references/                   # UX/product references used by the skill
├── examples/                     # Example marketplace use cases
├── scripts/                      # Validation scripts
└── docs/                         # Bounty and repository documentation
```

## Why this layout

- `skill/` stays focused on progressive loading.
- `templates/`, `components/`, `commands`, `agents`, and `rules/` mirror the structure requested by the bounty while adding versionable React demo artifacts.
- `references/` keeps longer background material separate from the routing entry point.
- `docs/` keeps bounty submission text, storytelling, seeded React workflow notes, supply-chain security guidance, and repository notes out of the root.
