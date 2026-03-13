const cards = document.querySelectorAll(".link-card");

cards.forEach(card => {
card.addEventListener("click", () => {
console.log("Link opened:", card.href);
});
});
