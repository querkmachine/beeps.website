const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");

const markdownConfig = markdownIt({
  html: true,
  typographer: true,
  breaks: true,
}).use(markdownItAnchor, {
  tabIndex: false,
});

const markdownFilter = function (str) {
  return markdownConfig.render(str);
};

const markdownFilterInline = function (str) {
  return markdownConfig.renderInline(str);
};

module.exports = {
  markdownConfig,
  markdownFilter,
  markdownFilterInline,
};
