const projetos = [
  { titulo: "Site Portifólio", descricao: "Meu site, com 4 páginas, no ar." },
  { titulo: "Arandu", descricao: "TCC de uma plataforma de turismo" },
  { titulo: "Sistema de Irrigação Automatizado", descricao: "Um sistema para automação de irrigação em agriculturas familiares." },
  { titulo: "Playlist", descricao: "As músicas que mais escuto." }
];

const listaProjetos = document.querySelector("#lista-projetos");

function criarCard(projeto) {
  const card = document.createElement("section");
  card.classList.add("card");
  const titulo = document.createElement("h2");
  titulo.textContent = projeto.titulo;
  const texto = document.createElement("p");
  texto.textContent = projeto.descricao;
  card.appendChild(titulo);
  card.appendChild(texto);
  listaProjetos.appendChild(card);
}

for (const projeto of projetos) {
  criarCard(projeto);
}