const { DateTime } = require("luxon");

const pluginImages = require("@11ty/eleventy-img");
const pluginNavigation = require("@11ty/eleventy-navigation");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const pluginSass = require("eleventy-plugin-sass");
const pluginSyntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function (eleventyConfig) {
  // Load plugins
  eleventyConfig.addPlugin(pluginNavigation);
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(pluginSass, {
    outputDir: "./_site/",
  });
  eleventyConfig.addPlugin(pluginSyntaxHighlight);

  // Global settings
  eleventyConfig.setDataDeepMerge(true);

  // Responsive images shortcode
  eleventyConfig.addNunjucksAsyncShortcode(
    "responsiveImage",
    async function (src, alt, sizes = "100vw") {
      if (alt === undefined) {
        // You bet we throw an error on missing alt (alt="" works okay)
        throw new Error(`Missing \`alt\` on responsiveImage from: ${src}`);
      }

      let metadata = await pluginImages(src, {
        widths: [300, 600, 900, null],
        formats: ["webp", "jpeg"],
        urlPath: "/images/",
        outputDir: "./_site/images/",
      });

      let lowsrc = metadata.jpeg[0];

      return `<picture>
      ${Object.values(metadata)
        .map((imageFormat) => {
          return `  <source type="image/${
            imageFormat[0].format
          }" srcset="${imageFormat
            .map((entry) => entry.srcset)
            .join(", ")}" sizes="${sizes}">`;
        })
        .join("\n")}
        <img
          src="${lowsrc.url}"
          width="${lowsrc.width}"
          height="${lowsrc.height}"
          alt="${alt}">
      </picture>`;
    }
  );

  // Date formats
  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat(
      "d LLLL yyyy"
    );
  });

  eleventyConfig.addFilter("htmlDateString", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat("yyyy-LL-dd");
  });

  // Get the first `n` elements of a collection.
  eleventyConfig.addFilter("head", (array, n) => {
    if (n < 0) {
      return array.slice(n);
    }
    return array.slice(0, n);
  });

  // Layouts
  eleventyConfig.addLayoutAlias("blog-post", "layouts/blog-post.njk");
};
