# Solana Digital Media Marketplace Skill

> Skill oficial do Solana AI Kit para founders construindo marketplaces Web2.5 e produtos de utilidade NFT com recibos Solana, licenciamento claro e entrega protegida.

**Submissão para o Superteam Brasil Solana AI Kit Skills Bounty.**

---

## Sumário

- [Capítulo 1 — Comece por aqui](#capítulo-1--comece-por-aqui)
- [Capítulo 2 — O que é esta skill?](#capítulo-2--o-que-é-esta-skill)
- [Capítulo 3 — Diferenciais](#capítulo-3--diferenciais)
- [Capítulo 4 — Programas e recursos Solana utilizados](#capítulo-4--programas-e-recursos-solana-utilizados)
- [Capítulo 5 — Integrações](#capítulo-5--integrações)
- [Capítulo 6 — Sistema de Seeds](#capítulo-6--sistema-de-seeds)
- [Capítulo 7 — Micro-interações só com HTML e CSS](#capítulo-7--micro-interações-só-com-html-e-css)
- [Capítulo 8 — Pipeline Claude Design.md](#capítulo-8--pipeline-claude-designmd)
- [Capítulo 9 — Safe AI Skill — Firewall de segurança para agentes](#capítulo-9--safe-ai-skill--firewall-de-segurança-para-agentes)
- [Capítulo 10 — Estrutura do repositório](#capítulo-10--estrutura-do-repositório)
- [Capítulo 11 — Quem deve usar](#capítulo-11--quem-deve-usar)
- [Capítulo 12 — Prompts de início rápido](#capítulo-12--prompts-de-início-rápido)
- [Capítulo 13 — Segurança complementar e quarentena](#capítulo-13--segurança-complementar-e-quarentena)
- [Capítulo 14 — Casos de hackathon](#capítulo-14--casos-de-hackathon)
- [Capítulo 15 — Validação](#capítulo-15--validação)
- [Capítulo 16 — Licença](#capítulo-16--licença)

---

## Capítulo 1 — Comece por aqui

Em **60 segundos** você tem a skill instalada e um marketplace conceitual rodando.

### 1.1 Instalação

```bash
git clone https://github.com/superteamBR/solana-digital-asset-marketplace-skill.git
cd solana-digital-asset-marketplace-skill
chmod +x install.sh
./install.sh
```

A skill é copiada para `.installed/solana-digital-asset-marketplace-skill/`. Para um diretório personalizado:

```bash
./install.sh /caminho/para/seu-projeto
```

### 1.2 Explore as landing pages — sem servidor, sem build

Os 5 exemplos HTML já estão prontos para abrir no navegador:

```bash
open examples/01-vitrine.html      # Scroll horizontal — ativos 3D
open examples/02-copla.html         # Onda escalonada — beats e samples
open examples/03-patio.html         # Cards radiais — memberships
open examples/04-avenida.html       # Split-screen — arte digital
open examples/05-prateleira.html    # Masonry — game assets
```

Cada página é **um único arquivo HTML autônomo** — zero dependências, zero build, zero servidor.

### 1.3 Valide a instalação

```bash
python3 scripts/validate.py
```

Saída esperada:

```
OK: validated 44 required files
```

### 1.4 Prompt rápido para o seu agente

```text
Use a skill solana-digital-asset-marketplace para projetar um marketplace
de drops musicais independentes com passes de acesso NFT, checkout normal,
pagamento a criadores e conteúdo bônus protegido.
```

---

## Capítulo 2 — O que é esta skill?

Esta skill ajuda um agente de IA a atuar como um **parceiro de produto prático** para founders que estão construindo marketplaces de mídia digital, produtos de utilidade NFT e aplicações de comércio criador na Solana.

### Princípio central

**Utilidade real em primeiro lugar. UX Web2 em segundo. Camada de prova Solana em terceiro. Automação do marketplace por último.**

A recomendação padrão **não** é "coloque tudo on-chain" e **não** é "construa um marketplace completo primeiro". A recomendação é:

1. Comece com uma fatia estreita de mercado (criador-comprador).
2. Mantenha a experiência de compra familiar (checkout tradicional, carteira opcional).
3. Use a Solana como camada de prova silenciosa — recibos, proveniência e hashes de licença.
4. Proteja a entrega de arquivos com infraestrutura web normal (URLs assinadas, storage privado).
5. Mantenha o onboarding de criadores manual até que a demanda real apareça.

### O que a skill gera

- Roteiro completo de produto: da fatia de mercado ao plano de demo para hackathon
- Decisões concretas sobre licenciamento, entrega protegida, recibos Solana e métricas
- Seeds de marketplace que geram landing pages visualmente distintas
- Alertas de segurança cibernética e verificação de supply chain

---

## Capítulo 3 — Diferenciais

Esta skill não é mais um template de marketplace NFT genérico. Ela ocupa um espaço único entre outras skills do Solana AI Kit.

### 3.1 O que a torna única

| Aspecto | Auditor Skill (solanabr/Auditor) | Legal Skill | Position Manager Skill | **Esta Skill** |
|---------|-------------------------------|-------------|----------------------|----------------|
| **Foco** | Auditoria de programas Solana | Revisão jurídica de contratos e tokens | Gerenciamento de posições DeFi | **Produto de marketplace & utilidade NFT** |
| **Público** | Desenvolvedores de programas | Advogados e compliance | Traders e degens | **Founders, PMs, criadores** |
| **Output** | Relatório de vulnerabilidades | Minutas contratuais | Análise de portfólio | **Landing pages, seeds, decisões de produto** |
| **UX** | Técnico | Jurídico | Financeiro | **Visual e interativo (HTML/CSS)** |
| **Entrega** | Auditoria de código | Documentos legais | Dashboard de posições | **Páginas HTML autônomas + seeds React** |

### 3.2 O que esta skill faz que nenhuma outra faz

1. **Sistema de Seeds** — Um JSON de 25 linhas define um marketplace inteiro. Troque o seed, troque a experiência visual completamente. Cinco layouts diferentes (Vitrine, Copla, Pátio, Avenida, Prateleira) provam o conceito.

2. **Páginas HTML autônomas** — Cada landing page é um único arquivo `.html` que abre em qualquer navegador. Sem React, sem build, sem servidor. Perfeito para demos de hackathon e validação rápida.

3. **Micro-interações só com CSS** — Animações de scroll, hover cards, equalizadores visuais, transições de escala — tudo em CSS puro. Zero JavaScript. Explicamos como no [Capítulo 7](#capítulo-7--micro-interações-só-com-html-e-css).

4. **Safe AI Skill integrado** — Quatro guards de segurança embedados que protegem operações on-chain de agentes, sem depender de ferramentas externas.

5. **Foco em utilidade real** — A skill deliberadamente empurra o founder para fatias de mercado específicas (assets 3D, beats musicais, passes de comunidade, tickets de eventos, credentials educacionais) em vez de "marketplace NFT genérico".

6. **Complementar ao ecossistema** — Em vez de competir, a skill roteia trabalho de auditoria para o [solanabr/Auditor](https://github.com/solanabr/Auditor) e trabalho jurídico para a Legal Skill, focando no que mais importa no estágio inicial: **decisões de produto**.

---

## Capítulo 4 — Programas e recursos Solana utilizados

Esta skill foi projetada para se integrar nativamente com o ecossistema Solana. Abaixo, os programas e recursos referenciados — sempre usando fontes oficiais ([docs.solana.com](https://docs.solana.com), [solana.com](https://solana.com), [solana.foundation](https://solana.foundation), [github.com/solana-labs](https://github.com/solana-labs), [github.com/solana-foundation](https://github.com/solana-foundation)) e [SuperteamBR](https://github.com/superteamBR).

### 4.1 SPL Token

O programa base para tokens fungíveis e NFTs na Solana. Referenciado nos módulos de recibos Solana (`skill/solana-receipts.md`) para definir quando mintar um NFT como recibo de compra, passe de acesso ou credencial.

**Documentação oficial:** [spl.solana.com/token](https://spl.solana.com/token)

### 4.2 SPL Memo

Programa leve para anexar mensagens legíveis a transações Solana. Usado nos seeds como camada de proveniência — hashes de licença, identificadores de pedido e metadados de entrega podem ser ancorados via SPL Memo sem custo de mint.

**Documentação oficial:** [spl.solana.com/memo](https://spl.solana.com/memo)

### 4.3 SPL Account Compression

Programa para compressão de contas Merkle na Solana, reduzindo custos em ordens de magnitude. Referenciado para cenários de alta escala: coleções com milhares de itens, passes de evento, credentials educacionais e airdrops de membership.

**Documentação oficial:** [spl.solana.com/account-compression](https://spl.solana.com/account-compression)

### 4.4 Solana Pay

Padrão de checkout descentralizado que permite pagamentos em SOL e SPL tokens via QR code ou links. A skill recomenda Solana Pay como alternativa de checkout quando o founder quer oferecer pagamento direto em cripto, mantendo a opção de cartão de crédito via Stripe.

**Documentação oficial:** [docs.solanapay.com](https://docs.solanapay.com)

### 4.5 Solana Actions e Blinks

Tecnologia que transforma transações Solana em links compartilháveis e embedáveis — qualquer URL pode se tornar uma ação on-chain. Referenciado nos planos de integração para permitir compra, mint ou claim diretamente de redes sociais, blogs ou emails.

**Documentação oficial:** [solana.com/docs/advanced/actions](https://solana.com/docs/advanced/actions)

### 4.6 Solana Mobile

SDK e stack para aplicações mobile na Solana, incluindo Solana dApp Store e Mobile Wallet Adapter. Mencionado nos cenários de tickets de evento e passes de loyalty com uso em dispositivos móveis.

**Documentação oficial:** [docs.solanamobile.com](https://docs.solanamobile.com)

### 4.7 Metaplex (referência oficial)

Padrão da indústria para NFTs na Solana, incluindo Token Metadata, Candy Machine e Gumdrop. A skill referencia Metaplex via repositórios oficiais ([github.com/metaplex-foundation](https://github.com/metaplex-foundation)) como a camada de mint recomendada para NFTs de utilidade.

---

## Capítulo 5 — Integrações

A skill foi arquitetada para funcionar com o ecossistema Web2.5 — pontes entre o mundo tradicional e a Solana. Abaixo, as integrações documentadas nos módulos, templates e seeds.

### 5.1 Stripe

Checkout tradicional como **padrão recomendado**. A skill defende que a carteira deve ser opcional. Stripe processa pagamentos em moeda fiduciária; a Solana atua como camada de prova. Cenário típico:

- Comprador paga com cartão via Stripe
- Sistema gera recibo Solana (SPL Memo + NFT opcional)
- Entrega protegida via URL assinada

### 5.2 Supabase

Backend serverless para armazenamento de metadados, perfis de criadores, registros de licença e logs de entrega. Usado nos seeds como camada de dados off-chain, complementar à camada on-chain Solana.

### 5.3 Resend

Serviço de email transacional para notificações de compra, confirmação de licença, links de download e alerts de segurança. Integrado nos templates de fluxo de checkout.

### 5.4 Netlify Functions

Funções serverless para validação de webhooks (Stripe, Resend), geração de URLs assinadas, verificação de licença e processamento de mint Solana. A skill inclui templates de quarentena específicos para Netlify.

### 5.5 Vercel Edge

Edge functions para entrega de conteúdo com baixa latência, verificação de acesso em tempo real e redirecionamento condicional baseado em regras de licença. Ideal para marketplaces globais com público distribuído.

### 5.6 Solana Pay

Integração direta de pagamento on-chain para usuários que preferem pagar com SOL ou SPL tokens. A skill recomenda oferecer **ambas as opções** (Stripe + Solana Pay) e deixar o comprador escolher.

### 5.7 Crossmint

Serviço de checkout cross-chain que permite compra de NFTs com cartão de crédito. Referenciado como alternativa de checkout simplificado para usuários não-crypto, especialmente em cenários de tickets e passes de evento.

### 5.8 Helius

Plataforma de RPC, webhooks e indexação Solana. Usada nos planos de arquitetura para monitorar transações de recibo, escutar eventos de mint e manter synced logs de entrega com dados on-chain.

**Documentação oficial:** [docs.helius.dev](https://docs.helius.dev)

### 5.9 Metaplex (integração)

Integração via Candy Machine para mint de coleções e Token Metadata para gestão de atributos. As seeds incluem configuração de Candy Machine como opção para drops em larga escala.

---

## Capítulo 6 — Sistema de Seeds

O sistema de **Seeds** é a inovação central desta skill. Um seed é um arquivo JSON de aproximadamente 25 linhas que define completamente um marketplace — nome, layout, cores, guards de segurança, assets e features.

### 6.1 Como funciona

```
JSON Seed (25 linhas)
       ↓
generate.js (Node.js)
       ↓
Landing Page HTML única (.html)
```

Cada layout renderiza o **mesmo seed** de forma visualmente única. O gerador (`examples/generate.js`) mapeia o campo `layout` do seed para um renderizador específico.

### 6.2 Os 5 seeds e seus layouts

#### Vitrine (`01-vitrine.json`)
- **Layout:** Horizontal Scroll (`horizontal-scroll`)
- **Mercado:** Ativos 3D para arquitetura (Archviz)
- **Visual:** Cards em scroll horizontal com snap, glassmorphism, gradiente violeta/preto
- **Guards:** Mainnet, Authority, Vault

#### Copla (`02-copla.json`)
- **Layout:** Onda Escalonada (`staggered-wave`)
- **Mercado:** Batidas e samples musicais
- **Visual:** Grid de linhas com efeitos hover que expandem padding, equalizador CSS animado
- **Guards:** Mainnet, Account Shield, Vault

#### Pátio (`03-patio.json`)
- **Layout:** Cards Radiais (`circular-radial`)
- **Mercado:** Assinaturas e passes de comunidade (Memberships)
- **Visual:** Fundo com gradiente radial CSS, cards de tier com card destacado em escala
- **Guards:** Mainnet, Authority, Account Shield

#### Avenida (`04-avenida.json`)
- **Layout:** Split Parallax (`split-parallax`)
- **Mercado:** Arte digital e colecionáveis
- **Visual:** Split-screen 50/50 com sidebar escura + conteúdo claro, cards de coleção com hover zoom
- **Guards:** Mainnet, Authority, Account Shield, Vault (cobertura total)

#### Prateleira (`05-prateleira.json`)
- **Layout:** Masonry Shelf (`masonry-shelf`)
- **Mercado:** Assets para jogos e texturas
- **Visual:** Grid masonry com primeiro item em destaque (2 colunas x 2 linhas)
- **Guards:** Mainnet, Authority, Vault

### 6.3 Seeds React (componentes versionáveis)

Além dos seeds HTML, o repositório inclui seeds tipados para React em [`templates/react-marketplace-seeds.ts`](templates/react-marketplace-seeds.ts). O componente [`components/SeededMarketplacePage.tsx`](components/SeededMarketplacePage.tsx) renderiza seções reutilizáveis a partir de um seed:

```tsx
import { SeededMarketplacePage } from './components/SeededMarketplacePage';

export default function Page() {
  return <SeededMarketplacePage seedId="threedCcConcierge" compact />;
}
```

**Modo compacto** (`compact`): renderiza apenas as seções listadas em `seed.agentTokenHints.includeSectionsOnly` — economia de tokens em drafts iniciais.

---

## Capítulo 7 — Micro-interações só com HTML e CSS

Todas as 5 landing pages de exemplo utilizam **exclusivamente CSS** para interações visuais. **Zero JavaScript de runtime.** Esta abordagem foi deliberada: páginas mais rápidas, mais seguras e mais portáteis.

### 7.1 Por que CSS-only?

- **Sem dependências:** nenhum bundle, nenhum framework JS, nenhuma vulnerabilidade de supply chain
- **Performance instantânea:** animações GPU-accelerated via `transform` e `opacity`
- **Funciona em qualquer lugar:** abre direto no navegador, sem build, sem servidor
- **Ideal para demos de hackathon:** mostra a visão do produto sem distrações técnicas

### 7.2 Técnicas CSS utilizadas

#### Hover com escala e elevação

```css
.s-card:hover {
  transform: translateY(-6px) scale(1.02);
  box-shadow: 0 20px 60px rgba(109,40,217,.2);
}
```

Usado em **Vitrine** e **Pátio**: cada card "levanta" com uma transição suave (`cubic-bezier`) que simula física real.

#### Hover com expansão de padding

```css
.w-row:hover {
  background: rgba(220,38,38,.06);
  padding-left: 28px;
}
```

Usado em **Copla**: as linhas da tracklist expandem para a esquerda no hover, como ondas sonoras.

#### Zoom em imagens no hover

```css
.a-card img {
  transition: transform .45s ease;
}
.a-card:hover img {
  transform: scale(1.06);
}
```

Usado em **Prateleira** e **Avenida**: a imagem dentro do card amplia suavemente.

#### Animação CSS pura (equalizador)

```css
@keyframes eq {
  0% { height: 3px; }
  100% { height: 20px; }
}
.eq span {
  animation: eq 1.2s ease-in-out infinite alternate;
}
.eq span:nth-child(2) { animation-delay: .15s; }
```

Usado em **Copla**: cinco barras de equalizador animadas com delays escalonados — parece JavaScript, é CSS puro.

#### Scroll snap horizontal

```css
.h-scroll {
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  display: flex;
  gap: 24px;
}
.s-card {
  scroll-snap-align: start;
}
```

Usado em **Vitrine**: navegação horizontal com snap — a experiência de um carrossel, sem JS.

#### Glassmorphism com backdrop-filter

```css
.glass {
  background: rgba(255,255,255,.04);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(255,255,255,.06);
}
```

Usado em **Vitrine**: efeito vidro que funciona como componente visual de segurança.

#### Radiais e gradientes CSS como fundo

```css
.radial-bg {
  background: radial-gradient(ellipse at 50% 0%, rgba(5,150,105,.12), transparent 60%),
              radial-gradient(ellipse at 50% 100%, rgba(245,158,11,.06), transparent 50%),
              #f0fdf4;
}
```

Usado em **Pátio**: fundo dinâmico sem imagens.

---

## Capítulo 8 — Pipeline Claude Design.md

A skill suporta o pipeline **Claude Design.md**, um fluxo de trabalho onde o design do marketplace é especificado em um arquivo Markdown antes da implementação. O agente Claude lê o Design.md, entende a visão do produto e gera o seed JSON correspondente sem precisar de múltiplas iterações de prompt.

### 8.1 Fluxo recomendado

```
Design.md (visão do marketplace)
    ↓
Agente Claude interpreta o design
    ↓
Gera seed JSON (25 linhas)
    ↓
generate.js produz landing page HTML
```

### 8.2 Exemplo de entrada Design.md

```markdown
# Marketplace: Vitrine

### Conceito
Mostruário de ativos 3D para arquitetura e produto.
Curadoria profissional, licenciamento claro, entrega protegida.

### Público
Arquitetos, designers de interiores, visualizadores 3D.

### Layout
Galeria horizontal com scroll, cards com preview 3D.
Fundo escuro com efeito glass nos cards.

### Cores
Primária: violeta (#6d28d9)
Fundo: preto (#0f0b1a)
Destaque: âmbar (#f59e0b)

### Segurança
Mainnet Guard, Authority Lock, Secret Vault

### Assets
4 cards com título, imagem, preço em SOL e criador.
```

### 8.3 Saída: seed JSON

```json
{
  "slug": "vitrine",
  "name": "Vitrine",
  "tagline": "Mostruário curado de ativos 3D...",
  "layout": "horizontal-scroll",
  "primary": "#6d28d9",
  "bg": "#0f0b1a",
  "safe_guards": ["mainnet", "authority", "vault"],
  "cards": [ ... ]
}
```

O pipeline reduz o tempo de ideação à primeira página funcional para **minutos**, não horas. É especialmente eficaz em hackathons, onde o tempo de setup é crítico.

---

## Capítulo 9 — Safe AI Skill — Firewall de segurança para agentes

A skill integra **Safe AI Skill**, uma camada de guarda de segurança que protege qualquer fluxo de trabalho de agente de IA contra riscos de supply chain, injeção de comandos e operações não autorizadas em mainnet.

### 9.1 Os 4 guards

| Guarda | O que faz | Onde se aplica |
|--------|-----------|----------------|
| 🚫 **Mainnet Guard** | Bloqueia deploys para mainnet Solana sem autorização multi-sig | `scripts/`, `commands/`, ações delegadas pelo agente |
| 🔒 **Authority Lock** | Exige aprovação 2-de-3 para mudanças de authority em contas | Pagamentos a criadores, ownership do marketplace, mint authority |
| 🛡️ **Account Shield** | Quarentena operações de close de conta com cooldown de 24h | Close de carteira, tesouraria do marketplace, contas admin |
| 🔑 **Secret Vault** | Nunca expõe chaves privadas ou secrets a agentes; todas as leituras são logadas | `.env`, keypairs, webhook secrets, API tokens |

### 9.2 Uso prático

```bash
# Gate qualquer comando através do Safe AI Skill
safe-ai-skill gate "solana program deploy ..."
safe-ai-skill check "npm publish"
safe-ai-skill audit --all
```

### 9.3 Exemplo nos seeds

Cada landing page de exemplo exibe badges dos guards aplicáveis no navbar. Seeds diferentes usam combinações diferentes de guards, demonstrando flexibilidade.

---

## Capítulo 10 — Estrutura do repositório

```text
.
├── README.md                      # Este arquivo
├── LICENSE                        # MIT
├── install.sh                     # Instalador local
├── skill/                         # Módulos progressivos da skill
│   ├── SKILL.md                   # Ponto de entrada e roteador
│   ├── marketplace-wedge.md       # Escolha da fatia de mercado
│   ├── web2-5-ux.md              # UX familiar com Web3 opcional
│   ├── license-models.md          # Modelos de licenciamento
│   ├── protected-delivery.md      # Entrega protegida de arquivos
│   ├── solana-receipts.md         # Recibos e proveniência Solana
│   ├── creator-onboarding.md      # Onboarding de criadores
│   ├── ip-risk-checklist.md       # Checklist de risco de IP
│   ├── metrics-and-funnel.md      # Métricas e funil
│   ├── funding-readiness.md       # Preparação para funding
│   └── security-threat-model.md   # Modelo de ameaças cibernéticas
├── templates/                     # Templates, seeds, fallbacks
│   ├── react-marketplace-seeds.ts # Seeds tipados para React
│   ├── creator-intake.md          # Template de onboarding
│   ├── asset-license-brief.md     # Brief de licenciamento
│   ├── marketplace-risk-register.md
│   ├── demo-script.md
│   ├── investor-one-pager.md
│   ├── quarantine-fallback.ts     # Fallback de quarentena
│   └── maintenance-page.html      # Página de pausa pública
├── components/                    # Componentes React/Tailwind
│   └── SeededMarketplacePage.tsx
├── scripts/                       # Scripts de validação e segurança
│   ├── validate.py
│   └── npm_supply_chain_guard.py
├── commands/                      # Especificações de workflow
│   ├── design-marketplace-flow.md
│   ├── generate-creator-intake.md
│   ├── generate-license-brief.md
│   └── prepare-funding-demo.md
├── agents/                        # Especificações de agentes especialistas
│   ├── marketplace-product-strategist.md
│   ├── creator-ops-reviewer.md
│   └── solana-receipt-architect.md
├── rules/                         # Regras de segurança e produto
│   └── cybersecurity-baseline.md
├── references/                    # Referências de UX e produto
│   └── site-ux-patterns.md
├── examples/                      # Exemplos e landing pages
│   ├── generate.js                # Gerador de páginas a partir de seeds
│   ├── seeds/                     # Seeds JSON (5 marketplaces)
│   │   ├── 01-vitrine.json
│   │   ├── 02-copla.json
│   │   ├── 03-patio.json
│   │   ├── 04-avenida.json
│   │   └── 05-prateleira.json
│   ├── 01-vitrine.html            # Landing page gerada
│   ├── 02-copla.html
│   ├── 03-patio.html
│   ├── 04-avenida.html
│   └── 05-prateleira.html
└── docs/                          # Documentação da submissão
    ├── SUBMISSION.md
    ├── PROJECT_STRUCTURE.md
    ├── REACT_SEEDED_COMPONENTS.md
    ├── STORYTELLING.md
    └── SUPPLY_CHAIN_SECURITY.md
```

---

## Capítulo 11 — Quem deve usar

### Use esta skill quando

- Você está construindo um marketplace de mídia digital (música, vídeo, fotos, templates, modelos 3D, assets de jogos)
- Você quer um produto de utilidade NFT com benefício real para o usuário
- Você precisa de passes de acesso, tickets de evento, credentials educacionais ou memberships
- Você quer checkout familiar com carteira opcional
- Você quer recibos Solana sem forçar o usuário a entender crypto
- Você está preparando um demo de hackathon ou submissão para grant

### Não use como

- Aconselhamento jurídico — consulte um advogado
- Aconselhamento financeiro — consulte um profissional
- Auditoria de smart contracts — use o [solanabr/Auditor](https://github.com/solanabr/Auditor)
- Ferramenta de gestão de posições DeFi
- Gerador genérico de hype NFT sem caso de uso concreto

---

## Capítulo 12 — Prompts de início rápido

```text
Use a skill solana-digital-asset-marketplace para projetar um marketplace
Web2.5 para drops musicais independentes com passes de acesso NFT, checkout
normal, pagamento a criadores e conteúdo bônus protegido.
```

```text
Use esta skill para projetar um sistema de tickets NFT com prova de
presença para um hackathon universitário. Mantenha a carteira opcional
e inclua alertas de segurança cibernética.
```

```text
Revise esta ideia de marketplace de mídia e me diga o que deve ser
manual, o que deve ser automatizado depois, o que deve ser registrado
na Solana e o que não deve ser um NFT.
```

---

## Capítulo 13 — Segurança complementar e quarentena

O repositório inclui guards de segurança prática para projetos de marketplace. Este material é **complementar** — para auditoria de programas Solana, use o [solanabr/Auditor](https://github.com/solanabr/Auditor) como ferramenta principal.

### 13.1 Guards incluídos

- [`scripts/npm_supply_chain_guard.py`](scripts/npm_supply_chain_guard.py) — varre manifestos package.json e lockfiles por scripts de lifecycle suspeitos, dependências não-registry, URLs de lockfile inseguras e findings de npm audit.
- [`templates/quarantine-fallback.ts`](templates/quarantine-fallback.ts) — wrapper de função para colocar em quarentena operações de risco (checkout, downloads, uploads, mudanças de payout).
- [`templates/maintenance-page.html`](templates/maintenance-page.html) — página pública de pausa para projetos que precisam interromper fluxos durante uma revisão de segurança.
- [`docs/SUPPLY_CHAIN_SECURITY.md`](docs/SUPPLY_CHAIN_SECURITY.md) — documentação completa do fluxo de quarentena.

### 13.2 Primeira verificação recomendada

```bash
python3 scripts/npm_supply_chain_guard.py /caminho/do/projeto --audit --fail-on medium
```

Postura padrão de incidente: pausar checkout e desbloqueio de arquivos primeiro, revisar findings de dependências, rotacionar secrets se scripts de instalação podem ter rodado com credenciais, liberar quarentena só após revisão humana.

---

## Capítulo 14 — Casos de hackathon

Esta skill foi projetada para ajudar equipes a enviar demos de hackathon críveis rapidamente.

### 14.1 Direções fortes para hackathon

- **NFT ticketing** para eventos universitários ou comunitários
- **Prova de presença** com benefícios pós-evento reais
- **Drop musical ou de vídeo** com conteúdo bônus protegido
- **Cupom/passe de negócio local** com prova Solana
- **Membership de criador** com checkout normal e recibo opcional em carteira
- **Credencial/certificado** para workshops, cursos ou hackathons
- **Marketplace de licenciamento de mídia** para fotógrafos, designers, músicos ou artistas 3D

### 14.2 Jornada completa de demo

```text
Landing → Claim/Comprar → Acesso/Recibo → Benefício real → Verificação → Visão admin
```

### 14.3 Ciclo rápido com o pipeline

1. Escreva um `Design.md` (5 minutos)
2. Claude gera o seed JSON (30 segundos)
3. `generate.js` produz a landing page (1 segundo)
4. Abra no navegador e apresente (instantâneo)

---

## Capítulo 15 — Validação

```bash
python3 scripts/validate.py
```

Saída esperada:

```
OK: validated 44 required files
```

O script verifica arquivos obrigatórios, frontmatter do `SKILL.md`, seções do README e referências internas entre módulos.

---

## Capítulo 16 — Licença

MIT — veja o arquivo [`LICENSE`](LICENSE).

---

*Construído para o Superteam Brasil Solana AI Kit Skills Bounty.*  
*Referências Solana oficiais utilizadas: [docs.solana.com](https://docs.solana.com), [solana.com](https://solana.com), [solana.foundation](https://solana.foundation), [github.com/solana-labs](https://github.com/solana-labs), [github.com/solana-foundation](https://github.com/solana-foundation), [github.com/superteamBR](https://github.com/superteamBR).*
