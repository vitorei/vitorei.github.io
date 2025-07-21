document.getElementById("orcamentoForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const material = document.getElementById("material").value;
  const metragem = parseFloat(document.getElementById("metragem").value);

  if (!material || isNaN(metragem) || metragem <= 0) {
    alert("Preencha os dados corretamente.");
    return;
  }

  const precos = {
    granito: 300,
    marmore: 400,
    quartzo: 550
  };

  const precoM2 = precos[material];
  const total = precoM2 * metragem;

  const resultadoDiv = document.getElementById("resultado");

  resultadoDiv.innerHTML = `
    <p><strong>Material:</strong> ${material.charAt(0).toUpperCase() + material.slice(1)}</p>
    <p><strong>Metragem:</strong> ${metragem.toFixed(2)} m²</p>
    <p><strong>Preço estimado:</strong> R$ ${total.toFixed(2)}</p>
    <p>Entraremos em contato com você para confirmar os detalhes!</p>
  `;

  resultadoDiv.style.animation = "fadeInResult 0.6s ease";
});
