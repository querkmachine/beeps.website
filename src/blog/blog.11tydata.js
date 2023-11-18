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
      console.log(data);
      return `${data.site.domain}/images/opengraph/${data.page.date
        .toISOString()
        .substr(0, 10)}-${data.page.fileSlug}.png`;
    },
  },
};
