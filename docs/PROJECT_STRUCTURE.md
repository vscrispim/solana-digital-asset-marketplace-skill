# Project Structure

This repository follows the Solana AI Kit skill shape.

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
├── templates/                    # Templates, intake forms, demo scripts
├── scripts/                      # Validation script
├── commands/                     # Workflow command specs
├── agents/                       # Specialist agent specs
├── rules/                        # Safety and product rules
├── references/                   # UX/product references used by the skill
├── examples/                     # Working HTML pages + JSON seeds + preview PNGs
│   ├── seeds/                    # 5 layout seeds (JSON)
│   ├── generate.js               # Single-file HTML generator
│   ├── *.html                    # 5 rendered landing pages
│   └── *-preview.png             # 5 preview screenshots
├── integrations/                 # Functional integration modules
└── docs/                         # Repository documentation
```

## Why this layout

- `skill/` stays focused on progressive loading.
- `examples/` contains fully rendered HTML pages, their JSON seeds, and preview screenshots.
- `integrations/` holds functional code for Supabase, Solana Pay, and wallet connect.
- `templates/`, `commands`, `agents`, and `rules/` mirror the structure requested by the bounty.
- `references/` keeps longer background material separate from the routing entry point.
- `docs/` keeps repository documentation out of the root.
