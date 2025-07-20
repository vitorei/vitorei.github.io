document.getElementById("search").addEventListener("input", function () {
    const searchText = this.value.toLowerCase();
    const cards = document.querySelectorAll(".product-card");

    cards.forEach(card => {
        const productName = card.getAttribute("data-name").toLowerCase();
        if (productName.includes(searchText)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
});
