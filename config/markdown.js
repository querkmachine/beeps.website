const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");
const hljs = require("highlight.js");

const markdownConfig = markdownIt({
  html: true,
  typographer: true,
  breaks: true,
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(str, { language: lang }).value;
      } catch (e) {
        throw new Error(e);
      }
    }
  },
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
