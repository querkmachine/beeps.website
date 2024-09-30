const isProduction = process.env.ENVIRONMENT === "prod";

export default {
  eleventyExcludeFromCollections: true,
  eleventyComputed: {
    permalink: (data) => {
      return isProduction ? false : data.permalink;
    },
  },
};
