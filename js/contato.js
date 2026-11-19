const formulario = document.querySelector("#formulario");
const resposta = document.querySelector("#resposta");

formulario.addEventListener("submit", (evento)  => {
  evento.preventDefault();
  const nome = document.querySelector("#nome").value;
  const mensagem = document.querySelector("#mensagem").value.trim();

  if (mensagem.length < 10) {
    resposta.textContent = `Faltam ${10 - mensagem.length} caracteres para enviar a mensagem.`;
    resposta.classList.add("erro");
  } else {
    resposta.textContent = `Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.`;
    resposta.classList.remove("erro");
    formulario.reset();
  }
});