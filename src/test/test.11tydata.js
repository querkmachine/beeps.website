const isProduction = process.env.ENVIRONMENT === "prod";

module.exports = {
  eleventyExcludeFromCollections: true,
  eleventyComputed: {
    permalink: (data) => {
      return isProduction ? false : data.permalink;
    },
  },
};
