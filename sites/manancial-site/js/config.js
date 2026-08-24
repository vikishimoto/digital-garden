/**
 * CONFIG CENTRAL — CATEDRAL MANANCIAL DA PALAVRA
 * ------------------------------------------------
 * Todas as informações que costumam mudar (links, horários, endereço,
 * PIX, redes sociais) ficam centralizadas aqui. Para atualizar o site,
 * edite apenas este arquivo — nenhum outro arquivo precisa ser tocado.
 */

const SITE = {
  nome: "Catedral Manancial da Palavra",
  nomeCurto: "Manancial da Palavra",
  cidade: "Jundiaí, São Paulo",
  endereco: "Rua União, 465 — Jundiaí, SP",
  logo: "assets/img/logo-full-transparent.png",
  logoMarca: "assets/img/logo-mark-transparent.png",

  lideranca: {
    bispo: {
      nome: "Bispo Pablo Romano",
      cargo: "Bispo Presidente",
      foto: "[FOTO-BISPO]"
    },
    bispa: {
      nome: "Bispa Anna Rayanne",
      cargo: "Bispa",
      foto: "[FOTO-BISPA]"
    },
    fotoCasal: "[FOTO-BISPO-BISPA]",
    fotoLiderancaPastoral: "[FOTO-LIDERANCA-PASTORAL]"
  },

  cultos: [
    {
      dia: "Segunda-feira",
      nome: "Oração e Avivamento",
      horario: "19h30",
      observacao: "Consulte nossas redes sociais para confirmar a programação desta semana."
    },
    {
      dia: "Quarta-feira",
      nome: "Quarta da Resposta",
      horario: "19h30",
      observacao: ""
    },
    {
      dia: "Sexta-feira",
      nome: "Sexta-feira dos Milagres",
      horario: "19h30",
      observacao: ""
    },
    {
      dia: "Domingo",
      nome: "Culto de Celebração",
      horario: "9h30 e 18h30",
      observacao: ""
    }
  ],

  ministerios: [
    {
      nome: "Jovens Manancial",
      descricao: "Uma geração levantada para viver e anunciar a Palavra.",
      instagram: "https://www.instagram.com/jovensdamanancial_/",
      disponivel: true
    },
    {
      nome: "Kids Manancial",
      descricao: "Cuidando e ensinando a Palavra às novas gerações.",
      instagram: null,
      disponivel: "em breve"
    },
    {
      nome: "Mulheres Posicionadas",
      descricao: "",
      instagram: null,
      disponivel: "em breve"
    },
    {
      nome: "Manancial Men",
      descricao: "",
      instagram: null,
      disponivel: "em breve"
    }
  ],

  redes: {
    instagramCatedral: "https://www.instagram.com/manancialdapalavra/",
    youtube: "https://www.youtube.com/@Catedral_ManancialdaPalavra",
    instagramJovens: "https://www.instagram.com/jovensdamanancial_/",
    instagramKids: null // [INSTAGRAM-KIDS] — será inserido posteriormente
  },

  whatsappOracao: null, // [WHATSAPP-PEDIDO-DE-ORACAO] — número será fornecido
  mensagemWhatsappOracao: "Olá! Gostaria de enviar um pedido de oração.",

  biblia: {
    url: "https://www.bible.com/bible/211/JHN.1.NTLH"
  },

  pix: {
    chave: "42.013.257/0001-28",
    titulo: "SEJA UM PILAR DESSA OBRA"
  },

  estacionamento: {
    fotos: ["[FOTO-ESTACIONAMENTO-01]", "[FOTO-ESTACIONAMENTO-02]"]
  },

  heroFotos: [
    "[FOTO-HERO-01]",
    "[FOTO-HERO-02]",
    "[FOTO-HERO-03]",
    "[FOTO-HERO-04]",
    "[FOTO-HERO-05]"
  ],

  fraseBiblicaHero: {
    texto: "Porque onde estiverem dois ou três reunidos em meu nome, ali estou no meio deles.",
    referencia: "Mateus 18:20"
  },

  fraseBiblicaDestaque: {
    texto: "Aquele que crê em mim, como diz a Escritura, do seu interior correrão rios de água viva.",
    referencia: "João 7:38"
  },

  // Carrossel de fotos + versículos na home (index.html). Cada item vira um
  // slide: ao trocar de foto, a frase bíblica muda junto. Adicione novos
  // itens aqui (e as fotos correspondentes) para ampliar o carrossel.
  versiculosCarrossel: [
    {
      texto: "Aquele que crê em mim, como diz a Escritura, do seu interior correrão rios de água viva.",
      referencia: "João 7:38",
      foto: "assets/img/hero-teste.jpg"
    },
    {
      texto: "Porque onde estiverem dois ou três reunidos em meu nome, ali estou no meio deles.",
      referencia: "Mateus 18:20",
      foto: "[FOTO-VERSÍCULO-02]"
    },
    {
      texto: "Tudo posso naquele que me fortalece.",
      referencia: "Filipenses 4:13",
      foto: "[FOTO-VERSÍCULO-03]"
    },
    {
      texto: "Seja forte e corajoso! Não se apavore, nem desanime, pois o Senhor, o seu Deus, estará com você por onde você andar.",
      referencia: "Josué 1:9",
      foto: "[FOTO-VERSÍCULO-04]"
    },
    {
      texto: "O Senhor é o meu pastor, nada me faltará.",
      referencia: "Salmo 23:1",
      foto: "[FOTO-VERSÍCULO-05]"
    }
  ],

  nav: [
    { label: "Início", href: "index.html", id: "inicio" },
    { label: "A Igreja", href: "a-igreja.html", id: "igreja" },
    { label: "Ministérios", href: "ministerios.html", id: "ministerios" },
    { label: "Agenda", href: "agenda.html", id: "agenda" },
    { label: "Pedido de Oração", href: "oracao.html", id: "oracao" },
    { label: "Contribuições", href: "contribuicoes.html", id: "contribuicoes" },
    { label: "Bíblia Online", href: "biblia.html", id: "biblia" }
  ]
};