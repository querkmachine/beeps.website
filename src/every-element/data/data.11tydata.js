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
      caniuse: async (data) => {
        if (data.caniuse === null) return null;

        return data.caniuse
          ? data.caniuse
          : `https://caniuse.com/mdn-html_elements_${data.tag}`;
      },
    },
  };
}
