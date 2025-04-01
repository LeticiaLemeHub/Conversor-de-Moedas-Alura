function irParaOutraPagina() {
  window.location.href = "conversor.html";
}

function converter() {
  let valorEmReais = document.getElementById("valor").value;
  let taxaDeCambio = 5.68;

  if (valorEmReais === "" || isNaN(valorEmReais) || valorEmReais <= 0) {
    document.getElementById("resultado").innerText = "Por favor, digite um valor válido!";
    return;
  }

  let valorEmDolares = valorEmReais / taxaDeCambio;
  document.getElementById("resultado").innerText = `Valor em Dólares: $${valorEmDolares.toFixed(2)}`;
}
