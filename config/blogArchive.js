/**
 * Create an array of all years within a collection of posts.
 *
 * @param {array} collection - Eleventy page collection.
 * @returns {array} - An array of years found, as strings.
 */
const getArchiveYears = function (collection) {
  const years = collection.map((x) => x.data.date.getFullYear()).sort();
  return [...new Set(years)];
};

/**
 * Create an array of posts within a collection of posts, filtered by year.
 *
 * @param {array} collection - Eleventy page collection.
 * @param {number} year - The year to filter the posts by.
 * @returns {array} - A collection of matching posts.
 */
const getArchivePostsByYear = function (collection, year) {
  const posts = collection.filter((x) => x.data.date.getFullYear() === year);
  return [...new Set(posts)];
};

export { getArchiveYears, getArchivePostsByYear };
