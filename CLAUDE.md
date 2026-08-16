# CLAUDE.md

Site estático (HTML/CSS/JS puro, sem framework/build tool) para divulgar
um bar real nas redes sociais. Pra ser publicado no GitHub (provavelmente
GitHub Pages).

## Contexto do cliente

Bar real do Welton (conhecido pessoalmente pelo usuário), chamado na vida
real de **"Bar do Bigode"** — mas o nome real **não pode aparecer** neste
repositório público. **Nome a usar em todo o site/código: "Bar do
Petisco"**. Filha do Welton está propondo a ele um site + divulgação nas
mídias sociais; o site precisa ser bom o bastante pra ele se encantar com
a ideia (palavras do usuário: "primoroso, lindo de morrer").

Situação real do bar: novo, boa comida e petiscos, mas com pouca
clientela ainda — o site é parte de uma estratégia de virar o jogo via
redes sociais.

## O que o bar oferece (base pro conteúdo do site)

- Petiscos em geral.
- Batidas caseiras (drinks).
- Bebidas em geral, cerveja "super gelada" como diferencial.
- Faz entregas.
- Eventos ao vivo: roda de samba, forró etc.

## Requisitos do site (pedido literal do usuário)

1. Visual alegre, gente sorrindo, imagens de cerveja gelada e pessoas
   sentadas nas mesas petiscando.
2. **Cardápio**: descrição + imagem + preço, por prato.
3. **Batidas**: mesmo formato (descrição + imagem + preço).
4. **Eventos**: divulgação (roda de samba, forró...) com calendário.
5. **Promoções da semana**.
6. Links pras redes sociais (Instagram, Facebook) no site.
7. **Link de encomenda via WhatsApp** (provavelmente `wa.me/<numero>` com
   mensagem pré-preenchida).
8. Publicar no GitHub.

## Requisito técnico importante

**Mobile-first é prioridade máxima** — a galera vai acessar pelo
Instagram/WhatsApp no celular. Dispositivo de referência pra testar:
**Android** (ex. viewport ~412×915, tipo Pixel/Moto G), não iPhone —
pouca gente em Campos dos Goytacazes (cidade do bar) usa iPhone.

## Status (2026-08-16) — primeira versão construída e testada

Site completo em `index.html` + `css/style.css` + `js/script.js`, mobile
primeiro, com todo o conteúdo pedido (hero, cardápio, batidas, eventos,
promoções, galeria, WhatsApp, redes sociais). **Conteúdo é fictício de
propósito** (placeholder fácil de editar, ver `README.md`) — usuário
optou por estruturar o site antes de ter os dados reais do bar.

**Imagens**: 17 fotos de banco gratuito (Pexels, sem necessidade de
atribuição) baixadas pra `images/`, escolhidas por tema (cerveja gelada,
gente sorrindo à mesa, petiscos fritos, batidas coloridas, música ao
vivo) — trocar pelas fotos reais do bar quando tiver.

**Conteúdo editável**: todo o cardápio/batidas/eventos/promoções e os
links de WhatsApp/redes sociais ficam em arrays no topo de
`js/script.js` — não precisa mexer no HTML pra editar. Ver `README.md`.

**Achado real de bug, corrigido**: o menu mobile (hambúrguer) tinha um
bug real — o painel do menu colapsava pra ~40px de altura em vez de
cobrir a tela inteira (CSS `position:fixed; top:68px; bottom:0` não
resolvia a altura automaticamente como esperado nesse contexto).
Corrigido trocando por `height: calc(100vh - 68px)` explícito — padrão
mais robusto pra overlay fullscreen mobile. Só foi descoberto testando de
verdade num viewport estreito (ver seção de teste abaixo) — não teria
aparecido só olhando o código.

**Como foi testado em mobile** (ferramenta de resize de janela não
funciona neste ambiente — janela fica travada em 1280px): criado um
iframe wrapper temporário (`_preview_mobile.html`, gitignored, apagado
depois de usar) com `width`/`height` fixos batendo com um Android real
(412×915) apontando pro site servido via `python -m http.server`. Esse
truque força a renderização real na largura/altura certa mesmo sem
conseguir redimensionar a janela do navegador — útil lembrar se precisar
testar de novo.

**Limitação importante do truque de iframe, descoberta em 2026-08-16**:
funciona bem pra conferir layout/tamanho (largura real, quebra de linha,
etc.), mas **rolagem simulada por scroll do mouse dentro do iframe não é
confiável pra testar `position: sticky`** — um teste assim indicou
(erroneamente) que `overflow-x: hidden` no `body` quebrava o header
sticky; a "correção" foi tentada de várias formas (mover pra `html`,
trocar por `overflow-x: clip`, até remover completamente) e o sintoma
persistiu idêntico mesmo sem nenhum `overflow-x` em lugar nenhum — sinal
de que o problema era do método de teste (iframe aninhado + scroll
sintético), não do CSS. Confirmado depois testando com scroll real direto
na página de nível superior (sem iframe): `body { overflow-x: hidden; }`
**não quebra** o sticky de verdade. Lição: usar o iframe só pra layout;
pra qualquer coisa que dependa de comportamento de scroll, testar direto
na página real.

**Segundo achado real de bug, corrigido**: usuário reportou que ao clicar
no botão "Peça agora" (canto superior direito) "o topo some e não dá pra
voltar a não ser rolando a página". Reproduzido em teste: o clique trava
a aba num diálogo nativo do Chrome (JS da página continua respondendo,
só a captura de tela trava) — condizente com o comportamento conhecido de
links `wa.me` com `target="_blank"` no Android Chrome, que tentam abrir
o app do WhatsApp numa aba nova e podem deixar uma aba em branco/travada
pra trás. **Corrigido**: removido `target="_blank"`/`rel="noopener"` dos
3 botões de WhatsApp (nav, hero, rodapé) — agora navegam na mesma aba,
prática padrão recomendada pra esse tipo de link em mobile. Links de
Instagram/Facebook mantiveram `target="_blank"` (sites normais, sem esse
problema conhecido).

## Estrutura de pastas

```
welton/
├── index.html
├── css/style.css
├── js/script.js         (conteúdo editável fica aqui, ver README.md)
├── README.md             (instruções de edição e publicação)
└── images/
    ├── cardapio/         (6 fotos de petiscos)
    ├── batidas/           (5 fotos de batidas)
    └── ambiente/          (6 fotos: hero, cerveja, amigos, eventos)
```

## O que falta

1. Conteúdo real: cardápio+preços, batidas+preços, eventos, promoções
   (ver checklist completo em `README.md`).
2. Fotos reais do bar (trocar as de banco de imagens).
3. Número real de WhatsApp e links reais de Instagram/Facebook.
4. Endereço e horário reais no rodapé.
5. ~~Primeiro commit git + publicar no GitHub (Pages)~~ — feito, ver
   `github.com/wilsonreis/bar-do-petisco` e
   `https://wilsonreis.github.io/bar-do-petisco/`.
