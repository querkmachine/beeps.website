const { DateTime } = require("luxon");

// Generate a string we can use for asset cachebusting
// https://rob.cogit8.org/posts/2020-10-28-simple-11ty-cache-busting/
const cachebustAssetUrl = function (url) {
  const [urlPart, paramPart] = url.split("?");
  const params = new URLSearchParams(paramPart || "");
  params.set("v", DateTime.local().toFormat("X"));
  return `${urlPart}?${params}`;
};

const formatDate = function (dateObj, format) {
  const date = DateTime.fromJSDate(dateObj, { zone: "utc" });
  if (format === "iso") {
    return date.toISODate();
  } else if (format === "human") {
    return date.toFormat("d LLLL yyyy");
  } else {
    return date.toFormat(format);
  }
};

const pageIsBlogPost = function (postUrl) {
  if (!postUrl) return false;
  return postUrl.substring(0, 6) === "/blog/" ? true : false;
};

const getFirstNItems = function (array, n) {
  if (n < 0) {
    return array.slice(n);
  }
  return array.slice(0, n);
};

module.exports = {
  cachebustAssetUrl,
  formatDate,
  getFirstNItems,
  pageIsBlogPost,
};
