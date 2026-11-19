let todos = [];

const listaProjetos = document.querySelector("#lista-projetos");
const contagem = document.querySelector("#contagem");

const criarCard = (projeto) => {
  const card = document.createElement("section");
  card.classList.add("card");
  const titulo = document.createElement("h2");
  titulo.textContent = projeto.titulo;
  const texto = document.createElement("p");
  texto.textContent = projeto.descricao;
  card.appendChild(titulo);
  card.appendChild(texto);
  listaProjetos.appendChild(card);
};

const mostrar = (lista) => {
  listaProjetos.innerHTML = "";
  for (const projeto of lista) {
    criarCard(projeto);
  }
  const titulos = lista.map((projeto) => projeto.titulo);
  contagem.textContent = `${lista.length} projetos: ${titulos.join(", ")}`;
};

const filtrar = (categoria) => {
  const lista = todos.filter((projeto) => projeto.categoria === categoria);
  mostrar(lista);
};

const botaoTodos = document.querySelector("#filtro-todos");
const botaoPessoal = document.querySelector("#filtro-pessoal");
const botaoEstudo = document.querySelector("#filtro-estudo");

botaoTodos.addEventListener("click", () => mostrar(todos));
botaoPessoal.addEventListener("click", () => filtrar("Pessoal"));
botaoEstudo.addEventListener("click", () => filtrar("Estudo"));

fetch("projetos.json")
  .then((resposta) => resposta.json())
  .then((dados) => {
    todos = dados;
    mostrar(todos);
  });