document.querySelector('.buy-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const quantity = document.querySelector('#quantity').value;
  alert(`Você adicionou ${quantity} unidade(s) da Mesa Solis ao carrinho.`);
});
