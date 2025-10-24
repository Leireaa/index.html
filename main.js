document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".product-container");
  const next = document.querySelector(".next");
  const prev = document.querySelector(".prev");
  
  if (container && next && prev) {
    const card = container.querySelector(".product-card");
    const style = window.getComputedStyle(container);
    const gap = parseInt(style.gap) || 0;
    const width = card ? card.offsetWidth + gap : 0;
    
    next.addEventListener("click", () => {
      container.scrollBy({ left: width, behavior: "smooth" });
    });
    
    prev.addEventListener("click", () => {
      container.scrollBy({ left: -width, behavior: "smooth" });
    });
  }
});