// Hero Section Text Animation
document.addEventListener("DOMContentLoaded", () => {
  const heroTitle = document.querySelector("#hero h1");
  heroTitle.style.opacity = 0;
  heroTitle.style.transform = "translateY(-20px)";
  
  setTimeout(() => {
    heroTitle.style.transition = "all 1s ease-in-out";
    heroTitle.style.opacity = 1;
    heroTitle.style.transform = "translateY(0)";
  }, 300);
});