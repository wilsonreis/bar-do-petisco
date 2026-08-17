/* ============================================================
   Bar do Petisco — conteúdo e interações do site
   ------------------------------------------------------------
   Pra editar cardápio, batidas, eventos, promoções, WhatsApp e
   redes sociais: mexa só nos dados aqui embaixo (CONFIG e os
   arrays). Não precisa tocar no HTML pra trocar um preço ou
   adicionar um petisco novo.
   ============================================================ */

// ------------------------------------------------------------
// CONFIGURAÇÃO GERAL — troque aqui pelos dados reais do bar
// ------------------------------------------------------------
const CONFIG = {
  // Número de WhatsApp em formato internacional, só dígitos (55 + DDD + número).
  // TEMPORÁRIO pra teste (número pessoal do usuário) — trocar pelo número
  // real do Bar do Petisco assim que disponível.
  whatsappNumero: "5521982614390",
  whatsappMensagem: "Olá! Vim pelo site do Bar do Petisco e quero fazer um pedido 🍻",

  // PLACEHOLDER — trocar pelos links reais das redes sociais.
  instagramUrl: "https://instagram.com/",
  facebookUrl: "https://facebook.com/",
};

// ------------------------------------------------------------
// CARDÁPIO — conteúdo fictício, ajustar com pratos/preços reais
// ------------------------------------------------------------
const CARDAPIO = [
  {
    nome: "Batata Frita com Anéis de Cebola",
    descricao: "Porção generosa de batata frita crocante com anéis de cebola empanados e molho especial da casa.",
    preco: "R$ 32,90",
    imagem: "images/cardapio/petisco-1.jpg",
  },
  {
    nome: "Petiscada Mista",
    descricao: "Seleção de fritos da casa com três molhos diferentes pra você escolher o favorito.",
    preco: "R$ 45,90",
    imagem: "images/cardapio/petisco-2.jpg",
  },
  {
    nome: "Bolinhos Sortidos",
    descricao: "Bolinho de bacalhau, de carne seca e de queijo, todos fritos na hora do pedido.",
    preco: "R$ 38,90",
    imagem: "images/cardapio/petisco-3.jpg",
  },
  {
    nome: "Tábua de Fritos da Casa",
    descricao: "Combinado generoso pra dividir com a galera, com molhos variados pra acompanhar.",
    preco: "R$ 49,90",
    imagem: "images/cardapio/petisco-4.jpg",
  },
  {
    nome: "Tábua Gourmet do Petisco",
    descricao: "Seleção especial com molhos artesanais da casa — ideal pra compartilhar na mesa.",
    preco: "R$ 52,90",
    imagem: "images/cardapio/petisco-5.jpg",
  },
  {
    nome: "Frango a Passarinho",
    descricao: "Frango frito na hora, temperado no alho e servido bem crocante.",
    preco: "R$ 36,90",
    imagem: "images/cardapio/petisco-6.jpg",
  },
];

// ------------------------------------------------------------
// BATIDAS — conteúdo fictício, ajustar com sabores/preços reais
// ------------------------------------------------------------
const BATIDAS = [
  {
    nome: "Batida de Maracujá",
    descricao: "Feita com maracujá fresco e um toque especial da casa.",
    preco: "R$ 18,00",
    imagem: "images/batidas/batida-maracuja.jpg",
  },
  {
    nome: "Batida de Morango",
    descricao: "Morangos frescos batidos na hora com leite condensado.",
    preco: "R$ 18,00",
    imagem: "images/batidas/batida-morango.jpg",
  },
  {
    nome: "Batida de Abacaxi com Hortelã",
    descricao: "Refrescante, com abacaxi maduro e um toque de hortelã.",
    preco: "R$ 19,00",
    imagem: "images/batidas/batida-abacaxi.jpg",
  },
  {
    nome: "Batida de Limão",
    descricao: "A clássica batida de limão, azedinha na medida certa.",
    preco: "R$ 17,00",
    imagem: "images/batidas/batida-limao.jpg",
  },
  {
    nome: "Batida de Coco",
    descricao: "Cremosa, feita com leite de coco de verdade.",
    preco: "R$ 19,00",
    imagem: "images/batidas/batida-coco.jpg",
  },
];

// ------------------------------------------------------------
// PROMOÇÕES DA SEMANA — conteúdo fictício, ajustar com o real
// ------------------------------------------------------------
const PROMOCOES = [
  {
    dia: "Terça-feira",
    titulo: "Chopp em Dobro",
    descricao: "Peça um chopp e ganhe outro, das 18h às 20h.",
  },
  {
    dia: "Quarta-feira",
    titulo: "Combo Petisco + Batida",
    descricao: "Uma porção de petisco à sua escolha + batida da casa por preço especial.",
  },
  {
    dia: "Quinta-feira",
    titulo: "Happy Hour da Roda de Samba",
    descricao: "15% de desconto nos petiscos durante toda a roda de samba.",
  },
  {
    dia: "Domingo",
    titulo: "Domingo em Família",
    descricao: "Porção família com desconto especial e petisco de cortesia pra criançada.",
  },
];

// ------------------------------------------------------------
// EVENTOS — agenda semanal fixa, ajustar com a programação real
// ------------------------------------------------------------
const EVENTOS = [
  {
    dia: "Quinta-feira · 20h",
    nome: "Roda de Samba",
    descricao: "Samba de raiz com músicos da casa e petisco especial de quinta.",
    imagem: "images/ambiente/evento-musica-1.jpg",
  },
  {
    dia: "Sábado · 21h",
    nome: "Forró ao Vivo",
    descricao: "Banda ao vivo pra arrastar o pé até fechar a casa.",
    imagem: "images/ambiente/evento-musica-2.jpg",
  },
  {
    dia: "Domingo · 17h",
    nome: "Sinuca Livre & Chopp",
    descricao: "Tarde tranquila de sinuca liberada com o chopp sempre gelado.",
    imagem: "images/ambiente/hero-bg.jpg",
  },
];

// ------------------------------------------------------------
// Monta o link do WhatsApp a partir do CONFIG
// ------------------------------------------------------------
function montarLinkWhatsapp() {
  const texto = encodeURIComponent(CONFIG.whatsappMensagem);
  return `https://wa.me/${CONFIG.whatsappNumero}?text=${texto}`;
}

// ------------------------------------------------------------
// Renderiza um card de cardápio/batida
// ------------------------------------------------------------
function criarCardProduto(item) {
  const card = document.createElement("article");
  card.className = "card revelar";
  card.innerHTML = `
    <div class="card__img-wrap">
      <img src="${item.imagem}" alt="${item.nome}" loading="lazy">
    </div>
    <div class="card__corpo">
      <div class="card__topo">
        <h3 class="card__nome">${item.nome}</h3>
        <span class="card__preco">${item.preco}</span>
      </div>
      <p class="card__desc">${item.descricao}</p>
    </div>
  `;
  return card;
}

function criarCardPromocao(item) {
  const card = document.createElement("div");
  card.className = "promo-card revelar";
  card.innerHTML = `
    <span class="promo-card__dia">${item.dia}</span>
    <h3 class="promo-card__titulo">${item.titulo}</h3>
    <p class="promo-card__desc">${item.descricao}</p>
  `;
  return card;
}

function criarCardEvento(item) {
  const card = document.createElement("article");
  card.className = "evento-card revelar";
  card.innerHTML = `
    <div class="evento-card__img">
      <img src="${item.imagem}" alt="${item.nome}" loading="lazy">
    </div>
    <div class="evento-card__corpo">
      <span class="evento-card__dia">${item.dia}</span>
      <h3 class="evento-card__nome">${item.nome}</h3>
      <p class="evento-card__desc">${item.descricao}</p>
    </div>
  `;
  return card;
}

// ------------------------------------------------------------
// Preenche as seções a partir dos dados acima
// ------------------------------------------------------------
function preencherSecoes() {
  const gradeCardapio = document.getElementById("gradeCardapio");
  CARDAPIO.forEach((item) => gradeCardapio.appendChild(criarCardProduto(item)));

  const gradeBatidas = document.getElementById("gradeBatidas");
  BATIDAS.forEach((item) => gradeBatidas.appendChild(criarCardProduto(item)));

  const gradePromocoes = document.getElementById("gradePromocoes");
  PROMOCOES.forEach((item) => gradePromocoes.appendChild(criarCardPromocao(item)));

  const gradeEventos = document.getElementById("gradeEventos");
  EVENTOS.forEach((item) => gradeEventos.appendChild(criarCardEvento(item)));
}

// ------------------------------------------------------------
// Liga todos os links/botões de WhatsApp e redes sociais
// ------------------------------------------------------------
function ligarLinksExternos() {
  const linkWhatsapp = montarLinkWhatsapp();
  ["navWhatsapp", "heroWhatsapp", "footerWhatsapp"].forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.href = linkWhatsapp;
  });

  const insta = document.getElementById("linkInstagram");
  if (insta) insta.href = CONFIG.instagramUrl;

  const face = document.getElementById("linkFacebook");
  if (face) face.href = CONFIG.facebookUrl;
}

// ------------------------------------------------------------
// Menu mobile (hambúrguer)
// ------------------------------------------------------------
function configurarMenuMobile() {
  const botao = document.getElementById("menuToggle");
  const menu = document.getElementById("navMenu");

  botao.addEventListener("click", () => {
    // remove o "fechar instantâneo" antes de abrir de novo, senão a
    // próxima abertura também ficaria sem animação (ver comentário abaixo)
    menu.classList.remove("nav--fechar-instantaneo");
    const aberto = menu.classList.toggle("nav--aberto");
    botao.setAttribute("aria-expanded", aberto ? "true" : "false");
  });

  // Fecha o menu ao clicar em qualquer link (comportamento esperado no mobile).
  // Fecha SEM animação (nav--fechar-instantaneo) porque a página também vai
  // rolar suavemente até a seção ao mesmo tempo — duas animações concorrentes
  // (fechar menu + scroll suave) confundem o repaint do Chrome Android e
  // deixam o cabeçalho fixo sumido até vários toques de scroll forçarem o
  // recálculo. Fechando instantâneo, sobra só uma animação por vez. A classe
  // fica ali até a próxima vez que o hambúrguer for clicado (não precisa
  // remover logo depois — o menu está fechado/invisível o tempo todo nesse
  // meio-tempo, então não faz diferença visual).
  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.add("nav--fechar-instantaneo");
      menu.classList.remove("nav--aberto");
      botao.setAttribute("aria-expanded", "false");
    });
  });
}

// ------------------------------------------------------------
// Animação leve de "revelar ao rolar a página"
// ------------------------------------------------------------
function configurarAnimacaoDeEntrada() {
  const elementos = document.querySelectorAll(".revelar");
  const observador = new IntersectionObserver(
    (entradas) => {
      entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
          entrada.target.classList.add("revelado");
          observador.unobserve(entrada.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  elementos.forEach((el) => observador.observe(el));
}

// ------------------------------------------------------------
// Inicialização
// ------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  preencherSecoes();
  ligarLinksExternos();
  configurarMenuMobile();
  configurarAnimacaoDeEntrada();

  const anoEl = document.getElementById("anoAtual");
  if (anoEl) anoEl.textContent = new Date().getFullYear();
});
