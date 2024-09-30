export default class Tabs {
  constructor($module) {
    this.$module = $module;
    this.$panels = $module.querySelectorAll(".kimTabs_panel");
    this.$tabList = null;
    this.$tabLinks = [];

    // Generate a random ID for all of these
    this.idPrefix = `tabs-${this.randomId()}`;

    this.buildHTML();

    this.showPanel(this.$tabLinks[0]);
  }
  buildHTML() {
    // Give the container an ID
    this.$module.id = this.idPrefix;

    // Create the list element we're containing tabs in
    const $tabList = document.createElement("ul");
    $tabList.className = "kimTabs_tablist";

    // Loop through each panel and create a link leading to it
    this.$panels.forEach(($panel) => {
      // Generate an ID and assign it to the panel
      const panelId = `${this.idPrefix}-${this.randomId()}`;
      $panel.id = panelId;

      const $li = document.createElement("li");
      $li.className = "kimTabs_tab";

      const $link = document.createElement("a");
      $link.className = "kimTabs_link";
      $link.innerText = $panel.getAttribute("data-label");
      $link.setAttribute("href", `#${panelId}`);
      $link.setAttribute("aria-controls", panelId);
      $link.setAttribute("aria-selected", "false");
      $link.addEventListener("click", (e) => {
        e.preventDefault();
        this.showPanel($link);
      });
      this.$tabLinks.push($link);

      $li.insertAdjacentElement("beforeend", $link);
      $tabList.insertAdjacentElement("beforeend", $li);
    });

    this.$module.insertAdjacentElement("afterbegin", $tabList);
    this.$tabList = $tabList;

    this.$module.classList.add("kimTabs-active");
  }
  showPanel($tab) {
    const panelSelector = $tab.getAttribute("href");
    const $panel = this.$module.querySelector(panelSelector);
    $panel.removeAttribute("aria-hidden", "false");

    $tab.setAttribute("aria-selected", "true");

    this.hideAllPanels($tab);
  }
  hideAllPanels($exceptThisTab) {
    const $activeTabs = this.$tabList.querySelectorAll(
      ".kimTabs_link[aria-selected='true']",
    );
    $activeTabs.forEach(($tab) => {
      if ($tab.getAttribute("href") !== $exceptThisTab.getAttribute("href")) {
        $tab.setAttribute("aria-selected", "false");
      }
    });

    this.$panels.forEach(($panel) => {
      if ($exceptThisTab.getAttribute("href") !== `#${$panel.id}`) {
        $panel.setAttribute("aria-hidden", "true");
      }
    });
  }
  randomId() {
    return Math.floor(Math.random() * Date.now()).toString(36);
  }
}
