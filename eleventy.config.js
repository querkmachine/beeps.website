// Config
import paths from "./config/paths.js";
import site from "./src/_data/site.js";

// 11ty plugins
import { eleventyImageOnRequestDuringServePlugin } from "@11ty/eleventy-img";
import loggingPlugin from "@11ty/eleventy-plugin-directory-output";
import { feedPlugin } from "@11ty/eleventy-plugin-rss";

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
import { compileStylesheets } from "./config/sass.js";
import { getTableOfContents } from "./config/tableOfContents.js";
import {
  cachebustAssetUrl,
  formatDate,
  formatISODate,
  getFirstNItems,
  mergeArrays,
} from "./config/utils.js";

// Nunjucks shortcodes
import shortcodeCallout from "./config/shortcodes/callout.js";
import shortcodeCharacter from "./config/shortcodes/character.js";
import shortcodeFigure from "./config/shortcodes/figure.js";
import shortcodeImageDiffer from "./config/shortcodes/imageDiffer.js";
import shortcodeLink from "./config/shortcodes/link.js";
import shortcodeRedaction from "./config/shortcodes/redaction.js";
import shortcodeResponsiveImage from "./config/shortcodes/responsiveImages.js";
import shortcodeSocialEmbed from "./config/shortcodes/socialEmbed.js";
import shortcodeYouTube from "./config/shortcodes/youtube.js";

/**
 *  @param {import("@11ty/eleventy/src/UserConfig")} eleventyConfig
 */

export default function (eleventyConfig) {
  const siteData = site();

  // Turn off default log output
  eleventyConfig.setQuietMode(true);

  // Load plugins
  eleventyConfig.addPlugin(eleventyImageOnRequestDuringServePlugin);
  eleventyConfig.addPlugin(loggingPlugin);
  eleventyConfig.addPlugin(feedPlugin, {
    type: "atom",
    outputPath: "/feed.xml",
    stylesheet: "/assets/feed.xsl",
    collection: {
      name: "blog",
      limit: 10,
    },
    metadata: {
      language: "en",
      title: siteData.blogName,
      subtitle: siteData.blogDescription,
      base: siteData.domain,
      author: {
        name: siteData.authorName,
        email: siteData.authorEmail,
      },
    },
  });

  // Ignore the blog drafts directory if this is a production build
  if (process.env.ENVIRONMENT === "prod") {
    eleventyConfig.ignores.add(paths.src + "/blog/drafts/**/*");
  }

  // Copy JS and assets
  eleventyConfig.addPassthroughCopy(paths.srcAssets + "/fonts");
  eleventyConfig.addPassthroughCopy(paths.srcAssets + "/images");
  eleventyConfig.addPassthroughCopy(paths.srcAssets + "/javascript");
  eleventyConfig.addPassthroughCopy(paths.srcAssets + "/feed.xsl");

  // Copy .htaccess
  eleventyConfig.addPassthroughCopy(paths.src + "/.htaccess");

  // Copy Google Search Console verification file, don't compile it
  eleventyConfig.ignores.add(paths.src + "/googlea3140dc71dc0155f.html");
  eleventyConfig.addPassthroughCopy(paths.src + "/googlea3140dc71dc0155f.html");

  // Copy manual .well-known directory entries
  eleventyConfig.addPassthroughCopy(paths.src + "/.well-known/**/*");

  // Additionally copy favicon.ico to root, as some systems will look for it there
  eleventyConfig.addPassthroughCopy({ "**/favicon.ico": "/" });

  // Markdown configuration
  eleventyConfig.setLibrary("md", markdownConfig);

  // Watch and compile Sass files
  eleventyConfig.addWatchTarget(paths.srcAssets + "/**/*.scss");
  eleventyConfig.on("beforeBuild", compileStylesheets);

  // Collections
  eleventyConfig.addCollection("tags", getAllTags);

  // Bundles
  eleventyConfig.addBundle("css");

  // Custom Nunjucks functions
  eleventyConfig.addNunjucksGlobal("merge", mergeArrays);
  eleventyConfig.addNunjucksGlobal("getTableOfContents", getTableOfContents);

  // Custom Nunjucks Shortcodes
  eleventyConfig.addPairedNunjucksShortcode("callout", shortcodeCallout);
  eleventyConfig.addPairedNunjucksShortcode("character", shortcodeCharacter);
  eleventyConfig.addPairedNunjucksShortcode("figure", shortcodeFigure);
  eleventyConfig.addNunjucksAsyncShortcode("imageDiffer", shortcodeImageDiffer);
  eleventyConfig.addNunjucksAsyncShortcode("link", shortcodeLink);
  eleventyConfig.addPairedNunjucksShortcode("markdown", markdownFilter);
  eleventyConfig.addNunjucksShortcode("redaction", shortcodeRedaction);
  eleventyConfig.addNunjucksAsyncShortcode("image", shortcodeResponsiveImage);
  eleventyConfig.addPairedNunjucksShortcode(
    "socialEmbed",
    shortcodeSocialEmbed,
  );
  eleventyConfig.addNunjucksShortcode("youtube", shortcodeYouTube);

  // Filters
  eleventyConfig.addFilter("cachebust", cachebustAssetUrl);
  eleventyConfig.addFilter("filterTagList", filterCommonTags);
  eleventyConfig.addFilter("formatDate", formatDate);
  eleventyConfig.addFilter("formatISODate", formatISODate);
  eleventyConfig.addFilter("head", getFirstNItems);
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
