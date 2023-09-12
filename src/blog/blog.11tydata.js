module.exports = {
  layout: "blog-post.njk",
  tags: ["blog"],
  mastheadBreadcrumbs: [
    {
      url: "/blog/",
      label: "Blog",
    },
  ],
  eleventyComputed: {
    opengraphImage: (data) => {
      return `${data.page.date.toISOString().substr(0, 10)}-${
        data.page.fileSlug
      }.png`;
    },
  },
};
