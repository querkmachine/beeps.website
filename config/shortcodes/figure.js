import { markdownFilterInline } from "../markdown.js";

const figureShortcode = function (content, args) {
  let html = `<figure class="kimFigure${
    args?.float ? " kimFigure-" + args.float : ""
  }">${content}`;
  if (args?.caption) {
    html += `<figcaption class="kimFigure_caption">${markdownFilterInline(args.caption)}</figcaption>`;
  }
  html += `</figure>`;
  return html;
};

export default figureShortcode;
