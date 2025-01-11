export default class Masthead {
  constructor($module) {
    if (!$module) {
      return;
    }

    this.$module = $module;

    this.$fallbackLink = this.$module.querySelector(".kimMasthead_menu-link");
    this.$toggle = this.$module.querySelector(".kimMasthead_menu-toggle");

    if (!this.$fallbackLink || !this.$toggle) {
      return;
    }

    this.navigationId = this.$toggle.getAttribute("aria-controls");
    this.$navigation = document.getElementById(this.navigationId);

    // Hide fallback, unhide toggle
    this.$fallbackLink.setAttribute("hidden", "hidden");
    this.$toggle.removeAttribute("hidden");

    // Add accessibility gubbins
    this.$toggle.setAttribute("aria-expanded", "false");

    // Bind toggle functionality
    this.$toggle.addEventListener("click", this.toggle.bind(this));
  }
  open() {
    this.$toggle.setAttribute("aria-expanded", "true");
    this.$navigation.removeAttribute("hidden");
  }
  close() {
    this.$toggle.setAttribute("aria-expanded", "false");
    this.$navigation.setAttribute("hidden", "hidden");
  }
  toggle() {
    if (this.$toggle.getAttribute("aria-expanded") === "true") {
      this.close();
      return;
    }
    this.open();
  }
}
