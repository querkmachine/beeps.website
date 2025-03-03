export default function () {
  return {
    layout: "generic.njk",
    tags: ["snippets"],
    cssComponents: ["code"],
    eleventyComputed: {
      permalink: function (data) {
        return `/frontend-snippets/${this.slugify(data.title)}/`;
      },
    },
  };
}
