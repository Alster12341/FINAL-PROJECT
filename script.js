document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector("#themeToggle");

  // THEME
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
  }

  button.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    localStorage.setItem(
      "theme",
      document.body.classList.contains("dark-mode") ? "dark" : "light"
    );
  });

  // PAGE NAVIGATION (FIXED)
  const links = document.querySelectorAll("[data-page]");
  const pages = document.querySelectorAll(".page");

  links.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault(); // stops page jump

      const target = link.dataset.page;

      pages.forEach(p => p.classList.remove("active"));
      document.getElementById(target).classList.add("active");
    });
  });

  // FAQ
  document.querySelectorAll(".faq-item").forEach(item => {
    item.addEventListener("click", () => {
      const p = item.querySelector("p");
      p.style.display = p.style.display === "block" ? "none" : "block";
    });
  });

  // FORM
  const form = document.querySelector("#contactForm");
  form.addEventListener("submit", e => {
    e.preventDefault();
    alert("Form submitted!");
  });
});
