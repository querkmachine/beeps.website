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
 * Format a JavaScript date object into one of our pre-defined formats
 *
 * @param {Date} dateObj - The JavaScript date object to format.
 * @param {"iso"|"human"|string} format - Either one of the pre-defined format keys, or a
 *   custom format constructed using Luxon's datetime tokens.
 *   https://moment.github.io/luxon/#/formatting?id=table-of-tokens
 * @returns {string} - The formatted date time.
 *
 * @tutorial https://moment.github.io/luxon/
 */
const formatDate = function (dateObj, format) {
  const date = DateTime.fromJSDate(dateObj, { zone: "utc" });
  if (format === "iso") {
    return date.toISODate();
  } else if (format === "human") {
    return date.toFormat("d LLLL yyyy");
  } else if (format === "humanWithTime") {
    return date.toFormat("d LLLL yyyy; H:mm");
  } else {
    return date.toFormat(format);
  }
};

/**
 * Same idea as the above but accepts an ISO timestamp instead of requiring a
 * JS date object. Useful for data pulled from third-party services.
 */
const formatISODate = function (isoDate, format) {
  const date = new Date(isoDate);
  return formatDate(date, format);
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
  formatISODate,
  getFirstNItems,
};
