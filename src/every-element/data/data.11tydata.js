export default function () {
  return {
    permalink: false,
    tags: ["every-element"],
    eleventyComputed: {
      mdn: async (data) =>
        `https://developer.mozilla.org/en-US/docs/Web/HTML/Element/${data.tag}`,
    },
  };
}
