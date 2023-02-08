const isProduction = process.env.ENVIRONMENT === "prod";

const excludeFromProductionBuild = (data) => {
  return isProduction && data.draft;
};

module.exports = {
  layout: "blog-post.njk",
  tags: ["blog"],
  mastheadBreadcrumbs: [
    {
      url: "/blog/",
      label: "blog",
    },
  ],
  eleventyComputed: {
    eleventyExcludeFromCollections: (data) => {
      return excludeFromProductionBuild(data)
        ? true
        : data.eleventyExcludeFromCollections;
    },
    permalink: (data) => {
      return excludeFromProductionBuild(data) ? false : data.permalink;
    },
  },
};
