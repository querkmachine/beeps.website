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
    link: false,
    htmlPicture: true,
  };
  const settings = { ...defaultArgs, ...args };

  let metadata = await pluginImages(src, {
    widths: [300, 600, 900, 1200, null],
    formats: ["webp"],
    urlPath: "/images/",
    outputDir: paths.output + "/images/",
    sharpOptions: {
      animated: true,
    },
  });

  let originalSize = metadata.webp[metadata.webp.length - 1];

  // Generate <img> element
  let imageCode = `<img${settings.lazy ? ` loading="lazy"` : ""} src="${
    originalSize.url
  }" width="${originalSize.width}" height="${
    originalSize.height
  }" alt="${alt}"${settings.classes ? ` class="${settings.classes}"` : ""}>`;

  // Generate <picture> element, if configured
  if (settings.htmlPicture) {
    imageCode = `<picture>
  ${Object.values(metadata)
    .map((imageFormat) => {
      return `<source type="image/${
        imageFormat[0].format
      }" srcset="${imageFormat
        .map((entry) => entry.srcset)
        .join(", ")}" sizes="(min-width: 768px) 66vi, 100vi">`;
    })
    .join("\n")}${imageCode}</picture>`;
  }

  // If a link is configured, create that too
  if (typeof settings.link === "boolean" && settings.link === true) {
    imageCode = `<a href="${originalSize.url}">${imageCode}</a>`;
  } else if (typeof settings.link === "string") {
    imageCode = `<a href="${settings.link}">${imageCode}</a>`;
  }

  return imageCode;
};

module.exports = responsiveImagesShortcode;
