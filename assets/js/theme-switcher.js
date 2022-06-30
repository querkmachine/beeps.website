class ThemeSwitcher {
  constructor() {
    this.$toggle = document.querySelector("[data-theme-toggle]");

    this.themePreference = localStorage.getItem("theme-preference") || "auto";
    this.themeOptions = {
      auto: "🤖 Auto",
      dark: "🌘 Dark mode",
      light: "☀️ Light mode",
    };

    this.onLoad();
  }
  onLoad() {
    const query = window.matchMedia("(prefers-color-scheme: dark)");

    const loadCheck = () => {
      if (localStorage.getItem("theme-preference") !== "auto") {
        return this.setCurrentTheme(localStorage.getItem("theme-preference"));
      }

      return query.matches
        ? this.setCurrentTheme("dark")
        : this.setCurrentTheme("light");
    };

    query.addEventListener("change", loadCheck);
    loadCheck();

    this.$toggle.removeAttribute("hidden");
    this.setToggleState(this.themePreference);
  }
  onClick(e) {
    // TODO
  }
  setCurrentTheme(theme) {
    const d = document.documentElement;
    localStorage.setItem("theme", theme);
    d.setAttribute("data-theme", theme);
  }
  setToggleState(state) {
    this.$toggle.setAttribute("data-current-theme", this.themePreference);
    this.$toggle.innerText = this.themeOptions[this.themePreference];
    this.$toggle.bindClick = this.onClick.bind(this);
    this.$toggle.addEventListener("click", $toggle.bindClick);
    localStorage.setItem("theme-preference", this.themePreference);
  }
}

new ThemeSwitcher();
