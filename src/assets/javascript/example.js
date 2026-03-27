export default class Example {
  constructor($module) {
    this.$module = $module;
    this.$iframe = $module.querySelector("iframe");

    this.$iframe.addEventListener("load", this.resizeIframe.bind(this));
    window.addEventListener("resize", this.resizeIframe.bind(this));
  }

  resizeIframe() {
    if (!this.$iframe) return;
    const iframeDocument =
      this.$iframe.contentDocument ?? this.$iframe.contentWindow.document;
    this.$iframe.style.height = iframeDocument.body.scrollHeight + "px";
  }
}
