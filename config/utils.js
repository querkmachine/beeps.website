const { DateTime } = require("luxon");

/**
 * Generate a string we can use for asset cachebusting
 *
 * @param {string} url - The URL to cachebust.
 * @returns {string} - The URL with a cachebusting query string parameter
 *   appended to it.
 *
 * @author Rob Hudson
 * @tutorial https://rob.cogit8.org/posts/2020-10-28-simple-11ty-cache-busting/
 */
const cachebustAssetUrl = function (url) {
  const [urlPart, paramPart] = url.split("?");
  const params = new URLSearchParams(paramPart || "");
  params.set("v", DateTime.local().toFormat("X"));
  return `${urlPart}?${params}`;
};

/**
 * Convert a date from one format into a different format.
 *
 * @param {Date|string|number} date - Date as a JS object, ISO string or Unix timestamp.
 * @param {"iso"|"human"|string} format - Either one of the pre-defined format keys, or a
 *   custom format constructed using Luxon's datetime tokens.
 *   https://moment.github.io/luxon/#/formatting?id=table-of-tokens
 * @returns {string} - The formatted date time.
 *
 * @tutorial https://moment.github.io/luxon/
 */
const formatDate = function (date, format, sourceFormat) {
  switch (sourceFormat) {
    case "iso":
      date = DateTime.fromISO(date);
      break;
    case "unix":
      date = DateTime.fromSeconds(Number(date));
      break;
    case "js":
    default:
      date = DateTime.fromJSDate(date);
      break;
  }

  switch (format) {
    case "iso":
      return date.toISODate();
      break;
    case "human":
      return date.toFormat("d LLLL yyyy");
      break;
    case "unix":
      return date.toSeconds();
    default:
      format = format || "";
      return date.toFormat(format);
      break;
  }
};

/**
 * Determine if a URL leads to a blog post by looking for the "/blog" string
 * within the URL. Nasty, but it works for now.
 *
 * @param {string} postUrl - The URL of the page.
 * @returns {boolean} - Whether or not this page is a blog post entry.
 */
const pageIsBlogPost = function (page) {
  return page.filePathStem.substring(0, 6) !== "/blog/" ? false : true;
};

/**
 * Take an array, remove the first n items from it, and return those items as a
 * new array.
 *
 * @param {array} array - The original array of items.
 * @param {number} n - The number of items to take from the old array and put in
 *   the new array.
 * @returns {array} - The new array with the chosen number of items.
 */
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
