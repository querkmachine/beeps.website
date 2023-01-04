class TOC {
  constructor($module) {
    this.$module = $module;
    this.mediaQuery = window.matchMedia("(min-width: 768px)"); // 'defiant' size
    this.check();
    this.watch();
  }
  watch() {
    this.mediaQuery.addEventListener("change", () => {
      this.check();
    });
  }
  check() {
    if (this.mediaQuery.matches) {
      this.open();
    } else {
      this.close();
    }
  }
  open() {
    this.$module.open = true;
  }
  close() {
    this.$module.open = false;
  }
}

document.querySelectorAll("[data-js='toc']").forEach(($module) => {
  new TOC($module);
});
