const { formatISODate } = require("../utils.js");

const twitterQuoteShortcode = function (content, args) {
  // Error if any of these args are missing
  if (!args.username) {
    throw new Error("Tweet embed is missing username.");
  }
  if (!args.number) {
    throw new Error("Tweet embed is missing tweet ID number.");
  }
  if (!args.date) {
    throw new Error("Tweet embed is missing date.");
  }

  return `<figure class="kimFigure"><blockquote class="kimBlockquote">
  ${content}
  </blockquote><figcaption class="kimFigure_caption">&mdash; @${
    args.username
  } on Twitter. <time datetime="${args.date}">${formatISODate(
    args.date,
    "humanWithTime"
  )}.</time>  (<a href="https://twitter.com/${args.username}/status/${
    args.number
  }" rel="noreferrer noopener">original tweet</a>)</figcaption></figure>`;
};

module.exports = twitterQuoteShortcode;
