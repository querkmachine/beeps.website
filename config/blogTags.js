/**
 * Create an array of all tags within a collection of posts.
 *
 * @param {array} collection - Eleventy page collection.
 * @returns {array} - An array of tags found, as strings.
 */
const getAllTags = function (collection) {
  let tagSet = new Set();
  collection.getAll().forEach((item) => {
    (item.data.tags || []).forEach((tag) => tagSet.add(tag));
  });
  tagSet = filterCommonTags([...tagSet]);
  return tagSet.sort();
};

/**
 * Filter out common tags, such as those that apply to all pages on the site or
 * all things in the blog collection.
 *
 * @param {array} tags - An array of tags, as strings.
 * @returns {array} - The array of tags, with common and repeated tags removed.
 */
const filterCommonTags = function (tags) {
  return (tags || []).filter(
    (tag) =>
      ["all", "blog", "nav", "post", "posts", "stash"].indexOf(tag) === -1,
  );
};

/**
 * Replaces spaces with hyphens. A stylistic choice.
 *
 * @param {string} tag - The name of a tag.
 * @returns {string} - The name of the tag, but stylistically formatted a bit
 *   like a hashtag.
 */
const formatAsTag = function (tag) {
  return `#${tag.replace(" ", "-")}`;
};

export { getAllTags, filterCommonTags, formatAsTag };
