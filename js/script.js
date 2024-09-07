document.addEventListener("DOMContentLoaded", (event) => {
  const darkModeToggle = document.getElementById("darkModeToggle");
  const html = document.documentElement;

  // Verifica si hay una preferencia guardada
  if (localStorage.getItem("darkMode") === "true") {
    html.classList.add("dark");
  }

  darkModeToggle.addEventListener("click", () => {
    html.classList.toggle("dark");
    localStorage.setItem("darkMode", html.classList.contains("dark"));
  });
});
