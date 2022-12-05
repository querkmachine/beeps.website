const $d = document.documentElement;
const $container = document.querySelector(".kimColorSchemeSwitch");
const $toggles = document.getElementsByName("color-scheme");
const prefersLight = matchMedia("(prefers-color-scheme: light)");

if ($toggles) {
  initColorScheme();
}

function initColorScheme() {
  // Check to see if we already have a preferred scheme stored, if so, use it
  // If not, base the decision on the user's current light/dark mode preference
  // with the fallback being dark
  let configuredColorScheme = isColorSchemeSupported() ? "auto" : "dark";
  let effectiveColorScheme = "dark";

  if (localStorage.getItem("prefers-color-scheme")) {
    effectiveColorScheme = configuredColorScheme = localStorage.getItem(
      "prefers-color-scheme"
    );
  }

  if (configuredColorScheme === "auto") {
    effectiveColorScheme = prefersLight.matches ? "light" : "dark";
  }

  // If (prefers-color-scheme) isn't supported, remove the 'auto' option
  if (!isColorSchemeSupported()) {
    document.getElementById("color-scheme-auto").parentElement.remove();
  }

  // Set default values
  setColorScheme(configuredColorScheme, effectiveColorScheme);

  // Loop through each toggle and do some stuff
  $toggles.forEach(($toggle) => {
    // Bind the change event... for when someone changes it
    $toggle.addEventListener("change", () => {
      setColorScheme(
        $toggle.value,
        $toggle.value === "auto"
          ? prefersLight.matches
            ? "light"
            : "dark"
          : $toggle.value
      );
    });

    // While we're here, if this is our current color scheme, set it as checked by default
    if ($toggle.value === configuredColorScheme) {
      $toggle.checked = true;
    }
  });

  // Ready to gooooooo
  $container.removeAttribute("hidden");
}

function setColorScheme(configuredColorScheme, effectiveColorScheme) {
  localStorage.setItem("prefers-color-scheme", configuredColorScheme);
  $d.dataset.colorScheme = effectiveColorScheme;
}

function isColorSchemeSupported() {
  return matchMedia("(prefers-color-scheme)").media !== "not all";
}
