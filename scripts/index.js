const switcher = document.getElementById("themeSwitch");
const stylesheet = document.getElementById("themeStylesheet");

switcher.addEventListener("change", () => {
  const themeFile = switcher.checked
    ? "stylesheets/light.css"
    : "stylesheets/dark.css";
  stylesheet.setAttribute("href", themeFile);
  localStorage.setItem("theme", themeFile);
  console.log("SWITCHED");
});

window.onload = function () {
  const savedTheme = localStorage.getItem("theme");
  console.log(savedTheme);
  if (savedTheme !== null) {
    stylesheet.setAttribute("href", savedTheme);
    switcher.checked = savedTheme.includes("light.css");
  }
};
