import paths from "../paths.js";
import pluginImages from "@11ty/eleventy-img";

const responsiveImagesShortcode = async function (src, alt, args) {
  if (alt === undefined) {
    // You bet we throw an error on missing alt (alt="" works okay)
    throw new Error(`Missing \`alt\` on responsiveImage from: ${src}`);
  }

  const defaultArgs = {
    lazy: true,
    classes: "",
    link: false,
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

  let imageCode = `<img`;
  imageCode += settings.classes ? ` class="${settings.classes}"` : "";
  imageCode += settings.lazy ? ` loading="lazy"` : "";
  imageCode += ` src="${originalSize.url}"`;
  imageCode += ` srcset="${metadata.webp.map((entry) => entry.srcset).join(", ")}"`;
  imageCode += ` sizes="(min-width: 768px) 66vi, 100vi"`;
  imageCode += ` width="${originalSize.width}"`;
  imageCode += ` height="${originalSize.height}"`;
  imageCode += ` alt="${alt}">`;

  // If a link is configured, create that too
  if (typeof settings.link === "boolean" && settings.link === true) {
    imageCode = `<a href="${originalSize.url}">${imageCode}</a>`;
  } else if (typeof settings.link === "string") {
    imageCode = `<a href="${settings.link}">${imageCode}</a>`;
  }

  return imageCode;
};

export default responsiveImagesShortcode;
