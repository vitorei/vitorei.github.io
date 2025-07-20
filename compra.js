 document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('search');
    const searchButton = document.querySelector('.search-button');
    const products = document.querySelectorAll('.product-card');

    function normalize(text) {
      return text
        .toLowerCase()
        .normalize("NFD") // remove acentos
        .replace(/[\u0300-\u036f]/g, '');
    }

    function filterProducts() {
      const query = normalize(searchInput.value.trim());
      products.forEach(product => {
        const title = normalize(product.querySelector('h3').textContent);
        const description = normalize(product.querySelector('p').textContent);
        if (
          title.startsWith(query) ||
          description.startsWith(query) ||
          title.includes(query) ||
          description.includes(query)
        ) {
          product.style.display = 'block';
        } else {
          product.style.display = 'none';
        }
      });
    }

    searchButton.addEventListener('click', filterProducts);
  });
