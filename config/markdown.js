const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");

const markdownConfig = markdownIt({
  html: true,
  typographer: true,
}).use(markdownItAnchor, {
  tabIndex: false,
});

module.exports = {
  markdownConfig,
};