// Config
const paths = require("./config/paths.json");

// 11ty plugins
const pluginLogging = require("@11ty/eleventy-plugin-directory-output");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const pluginToc = require("eleventy-plugin-toc");

// Helpful functions that do stuff
const {
  getArchiveYears,
  getArchivePostsByYear,
} = require("./config/blogArchive.js");
const {
  getAllTags,
  filterCommonTags,
  formatAsTag,
} = require("./config/blogTags.js");
const {
  markdownConfig,
  markdownFilter,
  markdownFilterInline,
} = require("./config/markdown.js");
const { processOpenGraphImages, splitLines } = require("./config/opengraph.js");
const { compileSass } = require("./config/sass.js");
const {
  cachebustAssetUrl,
  formatDate,
  getFirstNItems,
  pageIsBlogPost,
} = require("./config/utils.js");

module.exports = function (eleventyConfig) {
  // Turn off default log output
  eleventyConfig.setQuietMode(true);

  // Load plugins
  eleventyConfig.addPlugin(pluginLogging);
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(pluginToc);

  // Copy JS and assets
  eleventyConfig.addPassthroughCopy(paths.srcAssets + "/fonts");
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

  // Watch and compile Sass files
  eleventyConfig.addWatchTarget(paths.srcAssets + "/**/*.scss");
  eleventyConfig.on("beforeBuild", compileSass);

  // Generate Opengraph images
  eleventyConfig.on("afterBuild", processOpenGraphImages);

  // Collections
  eleventyConfig.addCollection("tags", getAllTags);

  // Custom Nunjucks Shortcodes
  eleventyConfig.addPairedNunjucksShortcode(
    "callout",
    require("./config/shortcodes/callout.js")
  );
  eleventyConfig.addPairedNunjucksShortcode(
    "character",
    require("./config/shortcodes/character.js")
  );
  eleventyConfig.addPairedNunjucksShortcode(
    "figure",
    require("./config/shortcodes/figure.js")
  );
  eleventyConfig.addNunjucksAsyncShortcode(
    "responsiveImage",
    require("./config/shortcodes/responsiveImages.js")
  );
  eleventyConfig.addNunjucksShortcode(
    "youtube",
    require("./config/shortcodes/youtube.js")
  );

  // Filters
  eleventyConfig.addFilter("cachebust", cachebustAssetUrl);
  eleventyConfig.addFilter("filterTagList", filterCommonTags);
  eleventyConfig.addFilter("formatDate", formatDate);
  eleventyConfig.addFilter("head", getFirstNItems);
  eleventyConfig.addFilter("isBlogPost", pageIsBlogPost);
  eleventyConfig.addFilter("splitlines", splitLines);
  eleventyConfig.addFilter("tagify", formatAsTag);
  eleventyConfig.addFilter("getArchiveYears", getArchiveYears);
  eleventyConfig.addFilter("getArchivePostsByYear", getArchivePostsByYear);
  eleventyConfig.addFilter("markdown", markdownFilter);
  eleventyConfig.addFilter("markdownInline", markdownFilterInline);

  return {
    markdownTemplateEngine: "njk",
    dir: {
      input: paths.src,
      includes: "_includes",
      layouts: "_layouts",
    },
  };
};
