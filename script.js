// Scroll Animation Observer
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate-in");
    }
  });
}, observerOptions);

// Observe elements when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  // Observe the things section header
  const thingsHeader = document.querySelector(".things-header");
  if (thingsHeader) {
    observer.observe(thingsHeader);
  }

  // Observe all thing cards
  const thingCards = document.querySelectorAll(".thing-card");
  thingCards.forEach((card) => {
    observer.observe(card);
  });
});
