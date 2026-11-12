const text = document.querySelector(".animated-text");

if (text) {
  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        currentObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  observer.observe(text);
}