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

/**
 * Process a string as Markdown, treating it as a block of content (i.e. it will
 * insert paragraph tags around the content.)
 *
 * @param {string} str - The string to parse as Markdown.
 * @returns {string} - The resulting HTML.
 */
const markdownFilter = function (str) {
  return markdownConfig.render(str);
};

/**
 * Process a string as Markdown, treating it as inline content (i.e. it will NOT
 * insert paragraph tags around the content.)
 *
 * @param {string} str - The string to parse as Markdown.
 * @returns {string} - The resulting HTML.
 */
const markdownFilterInline = function (str) {
  return markdownConfig.renderInline(str);
};

module.exports = {
  markdownConfig,
  markdownFilter,
  markdownFilterInline,
};
