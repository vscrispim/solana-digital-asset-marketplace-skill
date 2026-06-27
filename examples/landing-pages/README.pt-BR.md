# Solana Digital Media Marketplace Skill — Landing Pages 🖼️

## 5 Marketplaces de Nicho — Exemplos de Uso com Safe AI Skill

Esta pasta contém **5 landing pages completas** (HTML+Tailwind) demonstrando o uso do **Safe AI Skill** em diferentes tipos de marketplace digital no ecossistema Solana.

---

## 📋 Visão Geral

| # | Marketplace | Nicho | Logo | Identidade Visual |
|---|---|---|---|---|
| 01 | **CryptoPulse** | NFT Art (arte digital) | CP gradient roxo/rosa | Futurista, tech, gradiente escuro |
| 02 | **ModelHub** | Modelos 3D & Avatares | MH gradient ciano/azul | Clean, profissional, azul marinho |
| 03 | **BeatVault** | Beats & Samples Musicais | BV gradient violeta/fúcsia | Criativo, musical, vibrante |
| 04 | **SkinForge** | Skins & Itens de Games | SF gradient vermelho/laranja | Gamer, energético, vermelho |
| 05 | **CreatorPass** | Membresias & Ingressos | CP gradient verde-esmeralda | Profissional, verde confiança |

---

## 🛡️ Como o Safe AI Skill é integrado

Cada landing page demonstra **pelo menos 2 dos 4 guards** do Safe AI Skill:

- 🚫 **Mainnet Guard** — deploys bloqueados sem multi-sig
- 🔒 **Authority Lock** — mudanças de ownership requerem aprovação
- 🛡️ **Account Shield** — operações de fechamento são quarentenadas
- 🔑 **Secret Vault** — chaves nunca expostas a agentes

---

## 📸 Screenshots

- `screenshot-01-cryptopulse.png` — CryptoPulse NFT Marketplace
- `screenshot-02-modelhub.png` — ModelHub 3D Asset Marketplace  
- `screenshot-03-beatvault.png` — BeatVault Music Marketplace
- `screenshot-04-skinforge.png` — SkinForge Gaming Marketplace
- `screenshot-05-creatorpass.png` — CreatorPass Memberships

---

## 🚀 Como usar

Abra qualquer arquivo `.html` no navegador:

```bash
# Exemplo: abrir CryptoPulse
start 01-cryptopulse-nft-marketplace.html

# Ou arraste o arquivo para o navegador
```

Todos os estilos são via Tailwind CDN — não precisa instalar nada.

---

## 🎨 Personalização

Cada landing page tem:

- Navbar com logo + navegação
- Hero section com badge do Safe AI Skill
- Stats section (métricas reais de segurança)
- Feature cards (guards específicos)
- Grid de produtos em destaque
- Footer com badge de segurança

Para adaptar:

1. Mude as cores no `tailwind.config` (extend.colors)
2. Substitua os placeholders de produto
3. Ajuste os textos do hero e features

---

## 🔗 Relacionado

- [`../skill/SKILL.md`](../skill/SKILL.md) — Entry point do Solana AI Kit Skill
- [`../docs/SUBMISSION.md`](../docs/SUBMISSION.md) — Rascunho de submissão da bounty
- `Safe AI Skill` — Camada de segurança para agentes de IA (firewall para skills, chamadas MCP, leituras de segredos)

---

## 📄 Licença

MIT — veja [`../LICENSE`](../LICENSE).
