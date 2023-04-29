class ColorScheme {
  constructor() {
    this.$d = document.documentElement;
    this.$container = document.querySelector(".kimColorSchemeSwitch");

    this.isPrefersColorSchemeSupported =
      matchMedia("(prefers-color-scheme)").media !== "not all";
    this.doesUserPreferLight = this.isPrefersColorSchemeSupported
      ? matchMedia("(prefers-color-scheme: light)").matches
      : false;

    // Set some defaults
    // configured = what the user setting is [auto, dark, light]
    // effective = what is actually being used by the page [dark, light]
    this.configuredColorScheme = this.isPrefersColorSchemeSupported
      ? "auto"
      : "dark";
    this.effectiveColorScheme = "dark";

    // Let's goooooo
    this.init();

    // Init controls if they're present on this page
    if (this.$container) {
      this.initControls();
    }
  }

  init() {
    // If the user already has defined a preference, use it.
    // effectiveColorScheme may temporarily be set to "auto" here (which we
    // don't want), but we correct for that in the next bit.
    if (localStorage.getItem("prefers-color-scheme")) {
      this.effectiveColorScheme = this.configuredColorScheme =
        localStorage.getItem("prefers-color-scheme");
    }

    // If the user preference is "auto", determine whether to use light or dark
    // depending on their OS preference
    if (this.configuredColorScheme === "auto") {
      this.effectiveColorScheme = this.doesUserPreferLight ? "light" : "dark";
    }

    // Set and save the scheme based on what we've worked out so far
    this.setColorScheme();
  }

  initControls() {
    const $toggles = this.$container.querySelectorAll(
      ".kimColorSchemeSwitch_input"
    );

    // If prefers-color-scheme isn't supported, remove the "auto" option from the controls
    if (!this.isPrefersColorSchemeSupported) {
      this.$container.querySelector("[value='auto']").parentElement.remove();
    }

    // Loop through each toggle and do some stuff
    $toggles.forEach(($toggle) => {
      // Add change event binding to set the new colour scheme
      $toggle.addEventListener("change", () => {
        this.configuredColorScheme = $toggle.value;
        this.effectiveColorScheme =
          $toggle.value === "auto"
            ? this.doesUserPreferLight
              ? "light"
              : "dark"
            : $toggle.value;
        this.setColorScheme();
      });

      // Check the toggle by default if this is our current scheme
      if ($toggle.value === this.configuredColorScheme) {
        $toggle.checked = true;
      }
    });

    // Show the controls
    this.$container.removeAttribute("hidden");
  }

  setColorScheme() {
    localStorage.setItem("prefers-color-scheme", this.configuredColorScheme);
    this.$d.dataset.colorScheme = this.effectiveColorScheme;
  }
}

new ColorScheme();
