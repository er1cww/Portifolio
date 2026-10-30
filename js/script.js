const nome = "Eric";
let hora = new Date().getHours();
let saudacao;

if (hora < 12) {
  saudacao = "Bom dia";
} else if (hora < 18) {
  saudacao = "Boa tarde";
} else {
  saudacao = "Boa noite";
}

const titulo = document.querySelector("h1");
titulo.textContent = saudacao + ", eu sou o " + nome;

const botao = document.querySelector("#tema");
botao.addEventListener("click", function () {
  document.body.classList.toggle("claro");
  if (document.body.classList.contains("claro")) {
    botao.textContent = "Modo Escuro";
  } else {
    botao.textContent = "Modo Claro";
  }
});

const gostos = ["Design", "Marina Sena", "Billie Eilish", "Café"];
console.log(gostos.length);
console.log(gostos[0]);
const lista = document.querySelector("#gostos");

for (const gosto of gostos) {
  const item = document.createElement("li");
  item.textContent = gosto;
  lista.appendChild(item);
}