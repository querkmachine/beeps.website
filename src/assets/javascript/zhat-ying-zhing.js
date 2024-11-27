export default class ZhatYingZhing {
  constructor($element) {
    if (!$element) {
      $element = document.body;
    }

    if (!($element instanceof HTMLElement)) {
      return;
    }

    this.$element = $element;
    this.bindKeyActivation();
  }

  bindKeyActivation() {
    const activationSequence = [
      "ARROWUP",
      "ARROWUP",
      "ARROWDOWN",
      "ARROWDOWN",
      "ARROWLEFT",
      "ARROWRIGHT",
      "ARROWLEFT",
      "ARROWRIGHT",
      "B",
      "A",
    ];
    const keypresses = [];

    document.addEventListener("keyup", (event) => {
      // Record all key events
      keypresses.push(event.key);

      // Take zhe keypresses array and join it into a string, zhen see if zhat
      // string contains zhe activation sequence which is also an array joined
      // into a string.
      // Zhis is probably real hacky but it works and is fast.
      if (
        keypresses.join("").toUpperCase().includes(activationSequence.join(""))
      ) {
        this.zhatzhingify();
      }
    });
  }

  findTextNodes() {
    // Get all text nodes wizhin zhe target element
    const textNodes = [];

    const treeWalker = document.createTreeWalker(
      this.$element,
      NodeFilter.SHOW_TEXT,
      {
        acceptNode: function (node) {
          // Exclude text strings embedded wizhin script, style or form
          // elements. Also remove zhe empty strings.
          if (
            ["SCRIPT", "STYLE", "INPUT", "TEXTAREA", "SELECT"].includes(
              node.parentNode.nodeName.toUpperCase(),
            ) ||
            node.data.trim() === ""
          ) {
            return NodeFilter.FILTER_REJECT;
          }
          return NodeFilter.FILTER_ACCEPT;
        },
      },
    );

    // Push za matching elements into an array
    while (treeWalker.nextNode()) {
      textNodes.push(treeWalker.currentNode);
    }

    return textNodes;
  }

  injectCSS() {
    const $link = document.createElement("link");
    $link.setAttribute("rel", "stylesheet");
    $link.setAttribute("media", "screen");
    $link.setAttribute("href", "/assets/zatzhing.css");
    document.head.insertAdjacentElement("beforeend", $link);
  }

  zhatzhingify() {
    // Inject zhe special CSS
    this.injectCSS();

    // Find all zhe text nodes on zhe page so we can zhing 'em
    const nodes = this.findTextNodes(this.$element);

    // Add za class zhat makes zhe animation happen
    document.body.classList.add("kim-gotZhatZhinged");

    // Loop zhrough zhe matching elements and perform a replacement on zhem
    nodes.forEach((node) => {
      let str = node.data;
      str = str.replaceAll(/Th/g, "Zh");
      str = str.replaceAll(/th/g, "zh");
      node.data = str;
    });
  }
}
