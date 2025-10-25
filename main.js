document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".product-container");
  const next = document.querySelector(".next");
  const prev = document.querySelector(".prev");

  if (container && next && prev) {
    const cards = container.querySelectorAll(".product-card");
    if (!cards.length) return;

    let index = 0;
    function scrollToCard() {
      const cardWidth = cards[0].offsetWidth + parseInt(window.getComputedStyle(container).gap || 0);
      container.scrollTo({
        left: index * cardWidth,
        behavior: "smooth"
      });
    }

    next.addEventListener("click", () => {
      if (index < cards.length - 1) index++;
      scrollToCard();
    });

    prev.addEventListener("click", () => {
      if (index > 0) index--;
      scrollToCard();
    });

    window.addEventListener("resize", () => {
      scrollToCard();
    });
  }
});