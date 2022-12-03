// Globals
const $d = document.documentElement;
const $toggleButton = document.getElementById("toggle-color-scheme");
const prefersLight = matchMedia("(prefers-color-scheme: light)");

// Set current color scheme
function setColorScheme(colorScheme) {
  localStorage.setItem("prefers-color-scheme", colorScheme);
  $d.dataset.colorScheme = colorScheme;
  $toggleButton.setAttribute(
    "aria-pressed",
    colorScheme == "light" ? "true" : "false"
  );
}

// Check to see if we already have a preferred scheme stored, if so, use it
// If not, base the decision on the user's current light/dark mode preference
// with the fallback being dark
let currentColorScheme = "dark";
if (localStorage.getItem("prefers-color-scheme")) {
  currentColorScheme = localStorage.getItem("prefers-color-scheme");
} else {
  currentColorScheme = prefersLight.match ? "light" : "dark";
}
setColorScheme(currentColorScheme);

// Set up the toggle button a11y
$toggleButton.setAttribute(
  "aria-pressed",
  $d.dataset.colorScheme == "light" ? "true" : "false"
);
$toggleButton.addEventListener("click", () => {
  setColorScheme($d.dataset.colorScheme === "light" ? "dark" : "light");
});
$toggleButton.removeAttribute("hidden");
