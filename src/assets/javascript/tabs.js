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

    // Give all panels the `tabpanel` role and make them keyboard focusable
    this.$panels.forEach(($panel) => {
      $panel.setAttribute("role", "tabpanel");
    });

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
    const $tablist = document.createElement("div");
    $tablist.className = "kimTabs_tablist";
    $tablist.setAttribute("role", "tablist");

    // Loop through each panel and create a link leading to it
    this.$panels.forEach(($panel) => {
      // Generate an ID and assign it to the panel
      const panelId = `${this.idPrefix}-${this.createRandomId()}`;
      $panel.id = panelId;

      const $linkText = document.createElement("span");
      $linkText.className = "kimTabs_label";
      $linkText.innerText = $panel.getAttribute("data-label");

      const $link = document.createElement("a");
      $link.className = "kimTabs_link";
      $link.setAttribute("href", `#${panelId}`);
      $link.setAttribute("role", "tab");
      $link.setAttribute("aria-controls", panelId);
      $link.setAttribute("aria-selected", "false");
      $link.addEventListener("click", this.onTabClick.bind(this));
      $link.addEventListener("keydown", this.onTabKeydown.bind(this));
      $link.insertAdjacentElement("beforeend", $linkText);
      this.$tabs.push($link);

      $tablist.insertAdjacentElement("beforeend", $link);
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
    const $previousTab = $currentTab.previousElementSibling;

    if (!$previousTab) {
      return;
    }

    this.hidePanel($currentTab);
    this.showPanel($previousTab);
    $previousTab.focus();
  }
  activateNextPanel() {
    const $currentTab = this.getCurrentTab();
    const $nextTab = $currentTab.nextElementSibling;

    if (!$nextTab) {
      return;
    }

    this.hidePanel($currentTab);
    this.showPanel($nextTab);
    $nextTab.focus();
  }
}
