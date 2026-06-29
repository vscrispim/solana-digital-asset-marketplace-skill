# Design.md → Seed → Marketplace Page

## Como funciona

Este sistema permite que um arquivo `DESIGN.md` gerado pelo Claude (ou qualquer outro modelo)
seja convertido em uma landing page de marketplace funcional através de um pipeline de 3 etapas:

```
DESIGN.md (especificação visual do Claude)
    │
    ▼
seed.json (configuração modular)
    │
    ▼
HTML único (landing page completa com micro-interações)
```

## Etapa 1: Claude gera um DESIGN.md

Peça ao Claude um arquivo DESIGN.md no seguinte formato:

```markdown
# Nome do Marketplace

## Posicionamento
- Proposta de valor clara em 1 frase
- Público-alvo (criadores, compradores, comunidade)
- Diferencial (o que torna este marketplace único)

## Identidade Visual
- Paleta de cores (primary, secondary, accent, bg)
- Tom (escuro, claro, vibrante, minimalista)
- Fonte principal
- Estilo de layout (scroll horizontal, grid, split-screen, etc.)

## Conteúdo
- 3-6 produtos/assets para exibir
- Nomes, descrições curtas, preços, criadores
- Imagens de referência (URLs do Unsplash/Pexels)

## Safe AI Skill Guards
- Quais dos 4 guards aplicar (Mainnet, Authority, Account, Vault)
- Como cada guard aparece na página

## Micro-interações
- Efeitos desejados (hover, scroll, pulse, shimmer, float)
- Tom da interação (sutil, brincalhão, profissional)
```

## Etapa 2: Script converte DESIGN.md em seed.json

```bash
# Futuro: conversão automática
# python3 scripts/design-to-seed.py examples/meu-marketplace-DESIGN.md

# Atualmente: copie manualmente para um JSON em seeds/
cp examples/meu-design.md examples/seeds/meu-marketplace.json
# Edite o JSON conforme o padrão seeds/01-vitrine.json
```

## Etapa 3: Generate.js produz o HTML

```bash
cd examples
node generate.js seeds/meu-marketplace.json
# → gera examples/meu-marketplace.html
```

## Exemplo de DESIGN.md

```markdown
# Estúdio Aberto

## Posicionamento
Marketplace de presets e texturas para fotógrafos.
Público-alvo: fotógrafos profissionais e estúdios criativos.
Diferencial: cada preset tem perfil de cor calibrado e licença comercial inclusa.

## Identidade Visual
- Primary: #0891b2 (cyan), Accent: #f59e0b (amber)
- Tom: claro, profissional, limpo
- Layout: masonry grid (como Prateleira)
- Fonte: Outfit

## Conteúdo
1. "Kinfolk Preset Pack" — @fotografia_essencial — 0.5 SOL
2. "Estúdio Compacto" — @luznatural — 0.3 SOL
3. "Filme Analógico Pack" — @retratista — 0.4 SOL
...

## Guards
Mainnet Guard, Authority Lock, Secret Vault

## Micro-interações
Reveal cascade nos cards, shimmer nos placeholders, border-draw nos CTAs
```

O resultado é uma landing page única, com identidade própria, guards do Safe AI Skill
e micro-interações CSS — sem JavaScript, sem framework, sem dependências.
