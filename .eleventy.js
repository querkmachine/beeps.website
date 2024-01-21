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
const { urlizeOpenGraphImage } = require("./config/opengraph.js");
const { compileSass } = require("./config/sass.js");
const {
  cachebustAssetUrl,
  formatDate,
  formatISODate,
  getFirstNItems,
  pageIsBlogPost,
} = require("./config/utils.js");

/**
 *  @param {import("@11ty/eleventy/src/UserConfig")} eleventyConfig
 */

module.exports = function (eleventyConfig) {
  // Turn off default log output
  eleventyConfig.setQuietMode(true);

  // Load plugins
  eleventyConfig.addPlugin(pluginLogging);
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(pluginToc);

  // Configure frontmatter parsing
  eleventyConfig.setFrontMatterParsingOptions({
    excerpt: true,
  });

  // Ignore the blog drafts directory if this is a production build
  if (process.env.ENVIRONMENT === "prod") {
    eleventyConfig.ignores.add(paths.src + "/blog/drafts/**/*");
  }

  // Copy JS and assets
  eleventyConfig.addPassthroughCopy(paths.srcAssets + "/fonts");
  eleventyConfig.addPassthroughCopy(paths.srcAssets + "/images");
  eleventyConfig.addPassthroughCopy(paths.srcAssets + "/javascript");

  // Copy .htaccess
  eleventyConfig.addPassthroughCopy(paths.src + "/.htaccess");

  // Copy Google Search Console verification file, don't compile it
  eleventyConfig.ignores.add(paths.src + "/googlea3140dc71dc0155f.html");
  eleventyConfig.addPassthroughCopy(paths.src + "/googlea3140dc71dc0155f.html");

  // Copy manual .well-known directory entries
  eleventyConfig.addPassthroughCopy(paths.src + "/.well-known/**/*");

  // Markdown configuration
  eleventyConfig.setLibrary("md", markdownConfig);

  // Watch and compile Sass files
  eleventyConfig.addWatchTarget(paths.srcAssets + "/**/*.scss");
  eleventyConfig.on("beforeBuild", compileSass);

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
  eleventyConfig.addPairedNunjucksShortcode("markdown", markdownFilter);
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
  eleventyConfig.addFilter("formatISODate", formatISODate);
  eleventyConfig.addFilter("head", getFirstNItems);
  eleventyConfig.addFilter("isBlogPost", pageIsBlogPost);
  eleventyConfig.addFilter("tagify", formatAsTag);
  eleventyConfig.addFilter("getArchiveYears", getArchiveYears);
  eleventyConfig.addFilter("getArchivePostsByYear", getArchivePostsByYear);
  eleventyConfig.addFilter("markdown", markdownFilter);
  eleventyConfig.addFilter("markdownInline", markdownFilterInline);
  eleventyConfig.addFilter("urlizeOpenGraphImage", urlizeOpenGraphImage);

  return {
    markdownTemplateEngine: "njk",
    dir: {
      input: paths.src,
      includes: "_includes",
      layouts: "_layouts",
    },
  };
};
