export default class ImageDiffer {
  constructor($module) {
    // Check it actually has two images in
    if ($module.querySelectorAll("img").length !== 2) {
      return;
    }

    this.$module = $module;

    // Construct input
    const $input = document.createElement("input");
    $input.className = "kimImageDiffer_range";
    $input.setAttribute(
      "aria-label",
      "Change how much the 'after' image overlaps the 'before' image.",
    );
    $input.type = "range";
    $input.value = 50;
    $input.min = 0;
    $input.max = 100;
    $input.addEventListener("input", this.bindInput.bind(this));
    this.$module.insertAdjacentElement("beforeend", $input);
    this.$input = $input;

    // Mark component as active
    this.$module.classList.add("kimImageDiffer-active");
  }

  bindInput() {
    this.$module.style.setProperty("--exposure", `${this.$input.value}%`);
  }
}
