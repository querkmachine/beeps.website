class ThemeSwitcher {
  constructor() {
    this.$toggle = document.querySelector("[data-theme-toggle]");

    this.query = window.matchMedia("(prefers-color-scheme: dark)");
    this.themePreference = localStorage.getItem("theme-preference") || "auto";
    this.themeOptions = {
      auto: "🤖 Auto",
      dark: "🌜 Always dark",
      light: "☀️ Always light",
    };

    this.onLoad();
  }
  onLoad() {
    const loadCheck = () => {
      if (localStorage.getItem("theme-preference") !== "auto") {
        return this.setCurrentTheme(localStorage.getItem("theme-preference"));
      }

      return this.query.matches
        ? this.setCurrentTheme("dark")
        : this.setCurrentTheme("light");
    };

    this.query.addEventListener("change", loadCheck);
    loadCheck();

    this.$toggle.bindClick = this.onClick.bind(this);
    this.$toggle.addEventListener("click", this.$toggle.bindClick);

    this.$toggle.setAttribute("aria-live", "polite");
    this.$toggle.removeAttribute("hidden");
    this.setToggleState(this.themePreference);
  }
  onClick(e) {
    if (this.themePreference === "auto") {
      // Set to dark
      this.setToggleState("dark");
      this.setCurrentTheme("dark");
    } else if (this.themePreference === "dark") {
      // Set to light
      this.setToggleState("light");
      this.setCurrentTheme("light");
    } else {
      // Set to auto
      this.setToggleState("auto");
      this.query.matches
        ? this.setCurrentTheme("dark")
        : this.setCurrentTheme("light");
    }
  }
  setCurrentTheme(theme) {
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }
  setToggleState(theme) {
    this.$toggle.setAttribute("data-current-theme", theme);
    this.$toggle.innerHTML = `<span class="kim-!-sr">Current theme: </span>${this.themeOptions[theme]}<span class="kim-!-sr">. Click to switch theme.</span>`;

    localStorage.setItem("theme-preference", theme);
    this.themePreference = theme;
  }
}

new ThemeSwitcher();
