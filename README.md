# Bar do Petisco — Site

Site estático (HTML/CSS/JS puro, sem framework) para divulgar o bar nas
redes sociais. Mobile-first — pensado primeiro pra celular Android (a
maioria do público real), desktop é o extra.

## Como ver o site rodando no seu computador

Não dá pra abrir o `index.html` direto clicando duas vezes (o navegador
bloqueia alguns recursos por segurança quando o site é aberto como
arquivo local). Rode um servidor local simples:

```bash
# dentro da pasta do projeto
python -m http.server 8000
```

Depois abra `http://localhost:8000` no navegador.

## Como editar o conteúdo (cardápio, batidas, eventos, promoções)

**Não precisa mexer no HTML.** Todo o conteúdo fica em `js/script.js`,
no topo do arquivo, em listas fáceis de editar:

- `CONFIG` — número de WhatsApp e links de Instagram/Facebook.
- `CARDAPIO` — lista de petiscos (nome, descrição, preço, imagem).
- `BATIDAS` — lista de batidas.
- `PROMOCOES` — promoções da semana.
- `EVENTOS` — agenda semanal (samba, forró etc.).

Pra adicionar um prato novo, copie um bloco `{ nome: ..., descricao: ...,
preco: ..., imagem: ... }` existente e ajuste os valores. Pra remover,
apague o bloco inteiro (do `{` até o `}`, incluindo a vírgula).

## Como trocar as imagens

As imagens ficam em `images/`, organizadas por seção:

```
images/
├── ambiente/   → fotos do bar, cerveja, eventos (hero, galeria)
├── cardapio/   → foto de cada petisco
└── batidas/    → foto de cada batida
```

**As fotos atuais são de banco de imagens gratuito (placeholder)** —
troque pelas fotos reais do bar assim que tiver. Basta substituir o
arquivo mantendo o mesmo nome (ex. `images/cardapio/petisco-1.jpg`), ou
trocar o nome do arquivo em `js/script.js` no campo `imagem` do item
correspondente.

## Antes de publicar de verdade — dados ainda fictícios

- [ ] Número de WhatsApp real (`CONFIG.whatsappNumero` em `js/script.js`)
- [ ] Links reais de Instagram/Facebook (`CONFIG.instagramUrl`/`facebookUrl`)
- [ ] Cardápio e preços reais
- [ ] Lista de batidas e preços reais
- [ ] Agenda de eventos real
- [ ] Promoções da semana reais
- [ ] Endereço e horário de funcionamento reais (no rodapé, `index.html`)
- [ ] Fotos reais do bar/comida/bebidas/ambiente

## Publicar no GitHub Pages

1. Suba este repositório pro GitHub.
2. Nas configurações do repositório: **Settings → Pages → Source**,
   selecione a branch principal e a pasta raiz (`/`).
3. O site fica disponível em `https://<usuario>.github.io/<repositorio>/`.

Não precisa de build nem de servidor — é só HTML/CSS/JS puro.
