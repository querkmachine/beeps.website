export default function () {
  return {
    layout: "every-element.njk",
    tags: ["every-element"],
    eleventyComputed: {
      permalink: (data) => `/every-element/${data.tagSafe ?? data.tag}/`,
      mdn: async (data) => {
        if (data.mdn === null) return null;

        return data.mdn
          ? data.mdn
          : `https://developer.mozilla.org/en-US/docs/Web/HTML/Element/${data.tag}`;
      },
    },
  };
}
