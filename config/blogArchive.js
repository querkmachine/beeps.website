const getArchiveYears = function (collection) {
  const years = collection.map((x) => x.data.date.getFullYear()).sort();
  return [...new Set(years)];
};

const getArchivePostsByYear = function (collection, year) {
  const posts = collection.filter((x) => x.data.date.getFullYear() === year);
  return [...new Set(posts)];
};

module.exports = {
  getArchiveYears,
  getArchivePostsByYear,
};
