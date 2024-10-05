export default class Tabs {
  constructor($module) {
    if (!$module) {
      return;
    }
    this.$module = $module;

    this.$panels = $module.querySelectorAll(".kimTabs_panel");
    this.$tablist = null;
    this.$tabs = [];

    // Use the module's `id` or generate a random ID to associate all of the
    // elements together
    this.idPrefix = this.$module.id || `tabs-${this.createRandomId()}`;
    this.$module.id = this.idPrefix;

    // Build the tabs HTML in JS
    this.buildTabsHTML();

    // Hide all panels
    this.$tabs.forEach(($tab) => this.hidePanel($tab));

    // Show the first panel by default
    this.showPanel(this.$tabs[0]);
  }
  createRandomId() {
    return Math.floor(Math.random() * Date.now()).toString(36);
  }
  buildTabsHTML() {
    // Create the list element to hold the tabs within
    const $tablist = document.createElement("ul");
    $tablist.className = "kimTabs_tablist";

    // Loop through each panel and create a link leading to it
    this.$panels.forEach(($panel) => {
      // Generate an ID and assign it to the panel
      const panelId = `${this.idPrefix}-${this.createRandomId()}`;
      $panel.id = panelId;

      const $li = document.createElement("li");
      $li.className = "kimTabs_tab";

      const $link = document.createElement("a");
      $link.className = "kimTabs_link";
      $link.innerText = $panel.getAttribute("data-label");
      $link.setAttribute("href", `#${panelId}`);
      $link.setAttribute("aria-controls", panelId);
      $link.setAttribute("aria-selected", "false");
      $link.addEventListener("click", this.onTabClick.bind(this));
      $link.addEventListener("keydown", this.onTabKeydown.bind(this));
      this.$tabs.push($link);

      $li.insertAdjacentElement("beforeend", $link);
      $tablist.insertAdjacentElement("beforeend", $li);
    });

    this.$module.insertAdjacentElement("afterbegin", $tablist);
    this.$tablist = $tablist;

    this.$module.classList.add("kimTabs-active");
  }
  getPanel($tab) {
    const panelId = $tab.href.split("#").pop();
    return this.$module.querySelector(`#${panelId}`);
  }
  getCurrentTab() {
    return this.$tablist.querySelector('.kimTabs_link[aria-selected="true"]');
  }
  showPanel($tab) {
    const $panel = this.getPanel($tab);
    $panel.setAttribute("aria-hidden", "false");

    $tab.setAttribute("aria-selected", "true");
    $tab.setAttribute("tabindex", "0");
  }
  hidePanel($tab) {
    const $panel = this.getPanel($tab);
    $panel.setAttribute("aria-hidden", "true");

    $tab.setAttribute("aria-selected", "false");
    $tab.setAttribute("tabindex", "-1");
  }
  onTabClick(event) {
    const $currentTab = this.getCurrentTab();
    const $nextTab = event.currentTarget;

    if (!$currentTab || !($nextTab instanceof HTMLAnchorElement)) {
      return;
    }

    event.preventDefault();

    this.hidePanel($currentTab);
    this.showPanel($nextTab);
  }
  onTabKeydown(event) {
    const isRTL = this.$module.closest("[dir]")?.getAttribute("dir") === "rtl";
    const previousKey = isRTL ? "ArrowRight" : "ArrowLeft";
    const nextKey = isRTL ? "ArrowLeft" : "ArrowRight";

    switch (event.key) {
      case previousKey:
        this.activatePreviousPanel();
        event.preventDefault();
        break;
      case nextKey:
        this.activateNextPanel();
        event.preventDefault();
        break;
    }
  }
  activatePreviousPanel() {
    const $currentTab = this.getCurrentTab();
    const $previousTablistItem =
      $currentTab.parentElement.previousElementSibling;

    if (!$previousTablistItem) {
      return;
    }

    const $previousTab = $previousTablistItem.querySelector("a");

    this.hidePanel($currentTab);
    this.showPanel($previousTab);
    $previousTab.focus();
  }
  activateNextPanel() {
    const $currentTab = this.getCurrentTab();
    const $nextTablistItem = $currentTab.parentElement.nextElementSibling;

    if (!$nextTablistItem) {
      return;
    }

    const $nextTab = $nextTablistItem.querySelector("a");

    this.hidePanel($currentTab);
    this.showPanel($nextTab);
    $nextTab.focus();
  }
}
