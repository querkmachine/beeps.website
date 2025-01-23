export default function () {
  return {
    layout: "generic.njk",
    tags: ["snippets"],
    eleventyComputed: {
      permalink: function (data) {
        return `/accessible-snippets/${this.slugify(data.title)}/`;
      },
    },
  };
}
