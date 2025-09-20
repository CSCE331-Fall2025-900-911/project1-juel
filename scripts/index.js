const switcher = document.getElementById("themeSwitch");
const stylesheet = document.getElementById("themeStylesheet");

switcher.addEventListener("change", () => {
  if (switcher.checked) {
    stylesheet.setAttribute("href", "stylesheets/light.css");
  } else {
    stylesheet.setAttribute("href", "stylesheets/dark.css");
  }

  localStorage.setItem(
    "theme",
    switcher.checked ? "stylesheets/light.css" : "stylesheets/dark.css"
  );
});

window.onload = function () {
  const savedTheme = localStorage.getItem("theme");
  console.log(savedTheme);
  if (savedTheme !== null) {
    stylesheet.setAttribute("href", savedTheme);
  }
};
