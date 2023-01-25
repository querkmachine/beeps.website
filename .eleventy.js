// Config
const paths = require("./config/paths.json");

// 11ty plugins
const pluginLogging = require("@11ty/eleventy-plugin-directory-output");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const pluginSyntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const pluginToc = require("eleventy-plugin-toc");

// Helpful functions that do stuff
const {
  getAllTags,
  filterCommonTags,
  formatAsTag,
} = require("./config/blogTags.js");
const { markdownConfig } = require("./config/markdown.js");
const { processOpenGraphImages, splitLines } = require("./config/opengraph.js");
const { compileSass } = require("./config/sass.js");
const {
  cachebustAssetUrl,
  formatDate,
  getFirstNItems,
  pageIsBlogPost,
} = require("./config/utils.js");

// Shortcodes
const shortcodeCallout = require("./config/shortcodes/callout.js");
const shortcodeCharacter = require("./config/shortcodes/character.js");
const shortcodeFigure = require("./config/shortcodes/figure.js");
const shortcodeImage = require("./config/shortcodes/responsiveImages.js");

module.exports = function (eleventyConfig) {
  // Turn off default log output
  eleventyConfig.setQuietMode(true);

  // Set global constants
  eleventyConfig.addGlobalData("siteName", "beeps");
  eleventyConfig.addGlobalData(
    "siteDomain",
    process.env.ENVIRONMENT === "prod" ? "https://beeps.website" : ""
  );

  // Load plugins
  eleventyConfig.addPlugin(pluginLogging);
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(pluginSyntaxHighlight);
  eleventyConfig.addPlugin(pluginToc);

  // Global settings
  eleventyConfig.setDataDeepMerge(true);

  // Copy JS and UI images
  eleventyConfig.addPassthroughCopy(paths.srcAssets + "/images");
  eleventyConfig.addPassthroughCopy(paths.srcAssets + "/javascript");

  // Copy .htaccess
  eleventyConfig.addPassthroughCopy(paths.src + "/.htaccess");

  // Copy favicons/OpenGraph images
  eleventyConfig.addPassthroughCopy(paths.src + "/android-chrome-*");
  eleventyConfig.addPassthroughCopy(paths.src + "/apple-touch-icon.png");
  eleventyConfig.addPassthroughCopy(paths.src + "/browserconfig.xml");
  eleventyConfig.addPassthroughCopy(paths.src + "/favicon*");
  eleventyConfig.addPassthroughCopy(paths.src + "/mstile-*");
  eleventyConfig.addPassthroughCopy(paths.src + "/safari-pinned-tab.svg");
  eleventyConfig.addPassthroughCopy(paths.src + "/site.webmanifest");

  // Markdown configuration
  eleventyConfig.setLibrary("md", markdownConfig);

  // Compile Sass
  eleventyConfig.on("beforeBuild", compileSass);

  // Generate Opengraph images
  eleventyConfig.on("afterBuild", processOpenGraphImages);

  // Collections
  eleventyConfig.addCollection("tags", getAllTags);

  // Custom Nunjucks Shortcodes
  eleventyConfig.addPairedNunjucksShortcode("callout", shortcodeCallout);
  eleventyConfig.addPairedNunjucksShortcode("character", shortcodeCharacter);
  eleventyConfig.addPairedNunjucksShortcode("figure", shortcodeFigure);
  eleventyConfig.addNunjucksAsyncShortcode("responsiveImage", shortcodeImage);

  // Filters
  eleventyConfig.addFilter("cachebust", cachebustAssetUrl);
  eleventyConfig.addFilter("filterTagList", filterCommonTags);
  eleventyConfig.addFilter("formatDate", formatDate);
  eleventyConfig.addFilter("head", getFirstNItems);
  eleventyConfig.addFilter("isBlogPost", pageIsBlogPost);
  eleventyConfig.addFilter("splitlines", splitLines);
  eleventyConfig.addFilter("tagify", formatAsTag);

  return {
    markdownTemplateEngine: "njk",
    dir: {
      input: paths.src,
      includes: "_includes",
      layouts: "_layouts",
    },
  };
};
