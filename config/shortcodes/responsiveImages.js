const paths = require("../paths.json");

const pluginImages = require("@11ty/eleventy-img");

const responsiveImagesShortcode = async function (src, alt, args) {
  if (alt === undefined) {
    // You bet we throw an error on missing alt (alt="" works okay)
    throw new Error(`Missing \`alt\` on responsiveImage from: ${src}`);
  }

  const defaultArgs = {
    lazy: true,
    classes: "",
  };
  const settings = { ...defaultArgs, ...args };

  let metadata = await pluginImages(src, {
    widths: [600, 900, 1200, null],
    formats: ["webp"],
    urlPath: "/images/",
    outputDir: paths.output + "/images/",
    sharpOptions: {
      animated: true,
    },
  });

  let originalSize = metadata.webp[metadata.webp.length - 1];

  return `<picture>
  ${Object.values(metadata)
    .map((imageFormat) => {
      return `  <source type="image/${
        imageFormat[0].format
      }" srcset="${imageFormat
        .map((entry) => entry.srcset)
        .join(", ")}" sizes="100vw">`;
    })
    .join("\n")}
    <img src="${originalSize.url}" width="${originalSize.width}" height="${
    originalSize.height
  }" alt="${alt}"${
    (settings.lazy ? ` loading="lazy"` : "",
    settings.classes ? ` class="${settings.classes}"` : "")
  }>
  </picture>`;
};

module.exports = responsiveImagesShortcode;
