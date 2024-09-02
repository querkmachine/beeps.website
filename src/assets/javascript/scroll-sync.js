export default class ScrollSync {
  constructor($module) {
    this.$module = $module;
    this.timer = null;

    // This group's ID
    this.groupId = this.$module.dataset.scrollSyncGroup;

    // Get linked scrollable elements
    this.$linkedElements = document.querySelectorAll(
      `[data-scroll-sync-group="${this.groupId}"]`
    );

    // Do stuff when scrolled
    this.$module.addEventListener(
      "scroll",
      this.syncroniseScrollPosition.bind(this)
    );
  }
  syncroniseScrollPosition() {
    const scrollTop = this.$module.scrollTop;
    const scrollLeft = this.$module.scrollLeft;

    this.$linkedElements.forEach(($elem) => {
      if (this.$module !== $elem) {
        $elem.scrollTop = scrollTop;
        $elem.scrollLeft = scrollLeft;
      }
    });
  }
}
