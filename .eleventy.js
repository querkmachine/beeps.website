// Config
import paths from "./config/paths.js";

// 11ty plugins
import pluginLogging from "@11ty/eleventy-plugin-directory-output";
import pluginRss from "@11ty/eleventy-plugin-rss";
import pluginToc from "eleventy-plugin-toc";

// Helpful functions that do stuff
import {
  getArchiveYears,
  getArchivePostsByYear,
} from "./config/blogArchive.js";
import {
  getAllTags,
  filterCommonTags,
  formatAsTag,
} from "./config/blogTags.js";
import {
  markdownConfig,
  markdownFilter,
  markdownFilterInline,
} from "./config/markdown.js";
import { urlizeOpenGraphImage } from "./config/opengraph.js";
import { compileSass } from "./config/sass.js";
import {
  cachebustAssetUrl,
  formatDate,
  formatISODate,
  getFirstNItems,
  pageIsBlogPost,
} from "./config/utils.js";

// Shortcodes
import calloutShortcode from "./config/shortcodes/callout.js";
import characterShortcode from "./config/shortcodes/character.js";
import figureShortcode from "./config/shortcodes/figure.js";
import imageDifferShortcode from "./config/shortcodes/imageDiffer.js";
import mastodonShortcode from "./config/shortcodes/mastodon.js";
import responsiveImageShortcode from "./config/shortcodes/responsiveImages.js";
import twitterShortcode from "./config/shortcodes/twitter.js";
import youTubeShortcode from "./config/shortcodes/youtube.js";

/**
 *  @param {import("@11ty/eleventy/src/UserConfig")} eleventyConfig
 */

export default async function (eleventyConfig) {
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
  eleventyConfig.addPairedNunjucksShortcode("callout", calloutShortcode);
  eleventyConfig.addPairedNunjucksShortcode("character", characterShortcode);
  eleventyConfig.addPairedNunjucksShortcode("figure", figureShortcode);
  eleventyConfig.addNunjucksAsyncShortcode("imageDiffer", imageDifferShortcode);
  eleventyConfig.addPairedNunjucksShortcode("markdown", markdownFilter);
  eleventyConfig.addPairedNunjucksShortcode("mastodon", mastodonShortcode);
  eleventyConfig.addNunjucksAsyncShortcode(
    "responsiveImage",
    responsiveImageShortcode
  );
  eleventyConfig.addPairedNunjucksShortcode("twitter", twitterShortcode);
  eleventyConfig.addNunjucksShortcode("youtube", youTubeShortcode);

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
}
