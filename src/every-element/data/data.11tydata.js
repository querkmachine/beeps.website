export default function () {
  return {
    permalink: false,
    tags: ["every-element"],
    eleventyComputed: {
      mdn: async (data) => {
        if (data.mdn) {
          return data.mdn
            ? data.mdn
            : `https://developer.mozilla.org/en-US/docs/Web/HTML/Element/${data.tag}`;
        }
      },
    },
  };
}
