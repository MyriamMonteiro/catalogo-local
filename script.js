// Base de dados local simulada (compatível com os dados reais do piloto)
const prestadores = [
  {
    nome: "Mariana Silva",
    categoria: "Design e Ilustração",
    descricao: "Identidades visuais, ilustrações personalizadas e embalagens para comércio local.",
    bairro: "Butantã",
    whats: "5511999990001"
  },
  {
    nome: "Carlos Elétrica",
    categoria: "Eletricista Residencial",
    descricao: "Instalação de chuveiros, tomadas, disjuntores e manutenção elétrica em geral.",
    bairro: "Butantã",
    whats: "5511999990002"
  },
  {
    nome: "Ana Doces Caseiros",
    categoria: "Confeitaria Artesanal",
    descricao: "Bolos caseiros, tortas e docinhos sob encomenda para festas e vizinhos.",
    bairro: "Butantã",
    whats: "5511999990003"
  },
  {
    nome: "Marcos Pinturas",
    categoria: "Pintura Residencial",
    descricao: "Pintura interna e externa, aplicação de massa corrida e texturas.",
    bairro: "Butantã",
    whats: "5511999990004"
  }
];

const grid = document.getElementById("cardsGrid");
const searchInput = document.getElementById("searchInput");

function renderCards(lista) {
  grid.innerHTML = "";
  if (lista.length === 0) {
    grid.innerHTML = "<p style='grid-column: 1/-1; text-align: center;'>Nenhum prestador encontrado para essa busca.</p>";
    return;
  }

  lista.forEach(item => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <div class="card-img-placeholder">📷</div>
      <div class="card-content">
        <div class="card-header">
          <span class="card-title">${item.nome}</span>
          <span class="stars">★★★★★</span>
        </div>
        <div class="card-cat">${item.categoria}</div>
        <p class="card-desc">${item.descricao}</p>
        <div class="card-footer">
          <span class="card-location">📍 ${item.bairro}</span>
          <a class="btn-contact" href="https://wa.me/${item.whats}?text=Olá,%20vi%20seu%20contato%20no%20Catálogo%20Local" target="_blank">Contato</a>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
}

// Filtro de busca por nome ou categoria em tempo real
searchInput.addEventListener("input", (e) => {
  const termo = e.target.value.toLowerCase();
  const filtrados = prestadores.filter(p => 
    p.nome.toLowerCase().includes(termo) || 
    p.categoria.toLowerCase().includes(termo)
  );
  renderCards(filtrados);
});

// Renderização inicial
renderCards(prestadores);