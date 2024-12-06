export default class CopyCode {
  constructor($module) {
    // Check that clipboard API is supported, exit if not
    if (!("clipboard" in navigator)) {
      return;
    }

    this.$module = $module;
    this.codeToCopy = this.$module.innerText;

    this.defaultText = "Copy to clipboard";
    this.copiedText = "Copied!";

    this.buildButton();
  }

  buildButton() {
    const $button = document.createElement("button");
    $button.classList = "kimCodeBlock_copyButton";
    $button.type = "button";
    $button.innerText = this.defaultText;
    $button.addEventListener("click", this.copyCode.bind(this));

    this.$module.insertAdjacentElement("afterbegin", $button);

    this.$button = $button;
  }

  copyCode() {
    navigator.clipboard
      .writeText(this.codeToCopy)
      .then((e) => {
        console.log({ e });
        this.$button.innerText = this.copiedText;
        setTimeout(() => {
          this.$button.innerText = this.defaultText;
        }, 3000);
      })
      .catch((error) => console.error(error));
  }
}
