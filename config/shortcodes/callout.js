const calloutShortcode = function (content, args) {
  // The markdown parser gets angry without the newline
  return `<div class="kimCallout">\n${content}</div>`;
};

module.exports = calloutShortcode;
