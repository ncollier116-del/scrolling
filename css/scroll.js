const text = document.querySelector(".animated-text");

// chaos text title 

const title = document.querySelector("#chaos-title");
window.addEventListener("scroll", function () {
  const scrollAmount = window.scrollY;
  const scale = Math.min(5, 1 + scrollAmount / 400);
  title.style.setProperty("--scroll-scale", scale);
});



// making clocked function for can 

// const image = document.querySelector('.shake-image')
// image.addEventListener('click', function) { 
// image.classList.remove('shaking');
// void image.offsetWidth;
// image.classList.add('shaking');
// });



//figure out what this does, i think its my animated text from left

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