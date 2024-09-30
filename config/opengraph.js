const { DateTime } = require("luxon");

const urlizeOpenGraphImage = function (url) {
  return `https://v1.screenshot.11ty.dev/${encodeURIComponent(
    url,
  )}/opengraph/_${DateTime.local().toFormat("X")}/`;
};

module.exports = {
  urlizeOpenGraphImage,
};
