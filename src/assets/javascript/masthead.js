export default class Masthead {
  constructor($module) {
    if (!$module) {
      return;
    }

    this.$fallbackLink = $module.querySelector(".kimMasthead_nav-link");
    this.$toggleButton = $module.querySelector(".kimMasthead_nav-toggle");
    this.$menu = document.getElementById(
      this.$toggleButton.getAttribute("aria-controls"),
    );

    if (!this.$toggleButton || !this.$menu) {
      return;
    }

    this.$toggleButton.setAttribute("aria-expanded", "false");
    this.$toggleButton.addEventListener("click", this.toggleMenu.bind(this));

    this.$toggleButton.removeAttribute("hidden");
    this.$fallbackLink.setAttribute("hidden", "hidden");
  }
  toggleMenu() {
    if (this.$toggleButton.getAttribute("aria-expanded") == "false") {
      this.openMenu();
      return;
    }
    this.closeMenu();
  }
  openMenu() {
    this.$toggleButton.setAttribute("aria-expanded", "true");
    this.$menu.removeAttribute("hidden");
  }
  closeMenu() {
    this.$toggleButton.setAttribute("aria-expanded", "false");
    this.$menu.setAttribute("hidden", "hidden");
  }
}
