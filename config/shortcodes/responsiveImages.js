import paths from "../paths.js";
import Image from "@11ty/eleventy-img";

const responsiveImagesShortcode = async function (src, alt, args) {
  const defaultArgs = {
    lazy: true,
    classes: "",
    link: false,
    sizes: "100vi",
  };
  const settings = { ...defaultArgs, ...args };

  let metadata = await Image(src, {
    // Compile in-memory for local dev
    transformOnRequest: process.env.ELEVENTY_RUN_MODE === "serve",

    // Output options
    widths: [300, 600, 900, 1200, null],
    formats: ["webp"],
    urlPath: "/images/",
    outputDir: paths.output + "/images/",

    // Don't convert SVG files
    svgShortCircuit: true,

    // Maintain animated images
    sharpOptions: {
      animated: true,
    },
  });

  let html = Image.generateHTML(metadata, {
    alt,
    sizes: settings.sizes,
    class: settings.classes,
    loading: settings.lazy ? "lazy" : "eager",
    decoding: "async",
  });

  // If a link is configured, create that too
  if (typeof settings.link === "boolean" && settings.link === true) {
    const imageUrl = metadata.webp[metadata.webp.length - 1].url;
    html = `<a class="kimLink-image" href="${imageUrl}">${html}</a>`;
  } else if (typeof settings.link === "string") {
    html = `<a class="kimLink-image" href="${settings.link}">${html}</a>`;
  }

  return html;
};

export default responsiveImagesShortcode;
