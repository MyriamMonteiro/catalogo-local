// Lista de prestadores que entramos em contado e adicionamos ao catálogo. 
const prestadores = [
  {
    id: 1,
    nome: "José Pedro",
    servico: "Eletricista Residencial",
    categoria: "Manutenção",
    bairro: "Butantã",
    telefone: "(11) 94821-5873",
    whats: "5511948215873",
    descricao: "Instalações elétricas, quadros de força e pequenos reparos.",
    imagem: "img1.jpg"
  },
  {
    id: 2,
    nome: "Rita de Cassia",
    servico: "Faxina",
    categoria: "Serviços Domésticos",
    bairro: "Butantã",
    telefone: "(11) 97654-3210",
    whats: "5511976543210",
    descricao: "Faxineira e diarista.",
    imagem: "img2.jpg"
  },
  {
    id: 3,
    nome: "Kelwin Marques",
    servico: "Fotografia de eventos",
    categoria: "Fotografia",
    bairro: "Butantã",
    telefone: "(11) 94040-7676",
    whats: "5511940407676",
    descricao: "Fotografia de casamentos, aniversários e eventos em geral.",
    imagem: "img3.jpg"
  },
  {
    id: 4,
    nome: "Fernanda Nogueira",
    servico: "Ilustração e design gráfico",
    categoria: "Artes gráficas",
    bairro: "Butantã",
    telefone: "(11) 95432-1098",
    whats: "5511954321098",
    descricao: "Desenhos digitais, arte para posters, banners e panfletos.",
    imagem: "img4.jpg"
  },
  {
    id: 5,
    nome: "Juliana Prado",
    servico: "Aulas Particulares de Matemática",
    categoria: "Educação",
    bairro: "Butantã",
    telefone: "(11) 94321-0987",
    whats: "5511943210987",
    descricao: "Reforço escolar para ensino fundamental e médio.",
    imagem: "img5.jpg"
  }
];

const grid = document.getElementById("cardsGrid");
const searchInput = document.getElementById("searchInput");

function renderCards(lista) {
  grid.innerHTML = "";
  if (lista.length === 0) {
    grid.innerHTML = "<p style='grid-column: 1/-1; text-align: center; font-weight: 500;'>Nenhum prestador encontrado para essa busca.</p>";
    return;
  }

  lista.forEach(item => {
    // Mensagem padrão ao clicar em contato
    const mensagem = encodeURIComponent(`Olá, ${item.nome}! Vi seu anúncio no Catálogo Local do Butantã e gostaria de um orçamento.`);
    const linkWhats = `https://wa.me/${item.whats}?text=${mensagem}`;

    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <div class="card-img-container">
        <img src="${item.imagem}" alt="Foto de ${item.nome}" onerror="this.src='https://placehold.co/300x200/162214/ffffff?text=Foto';">
      </div>
      <div class="card-content">
        <div class="card-header">
          <span class="card-title">${item.nome}</span>
          <span class="stars">★★★★★</span>
        </div>
        <div class="card-cat">${item.categoria}</div>
        <div class="card-service">${item.servico}</div>
        <p class="card-desc">${item.descricao}</p>
        <div class="card-footer">
          <span class="card-location">📍 ${item.bairro}</span>
          <a class="btn-contact" href="${linkWhats}" target="_blank">Contato</a>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
}

// Filtro de busca
searchInput.addEventListener("input", (e) => {
  const termo = e.target.value.toLowerCase();
  const filtrados = prestadores.filter(p => 
    p.nome.toLowerCase().includes(termo) || 
    p.categoria.toLowerCase().includes(termo) ||
    p.servico.toLowerCase().includes(termo) ||
    p.descricao.toLowerCase().includes(termo)
  );
  renderCards(filtrados);
});

// Renderização inicial
renderCards(prestadores);