const fs = require("fs-extra");

// Other packages
const { DateTime } = require("luxon");
const sass = require("sass");
const postcss = require("postcss");
const postcssPresetEnv = require("postcss-preset-env");

// 11ty plugins
const pluginImages = require("@11ty/eleventy-img");
const pluginNavigation = require("@11ty/eleventy-navigation");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const pluginSyntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function (eleventyConfig) {
  // Some static data
  eleventyConfig.addGlobalData("siteDomain", "https://berly.kim");

  // Load plugins
  eleventyConfig.addPlugin(pluginNavigation);
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(pluginSyntaxHighlight);

  // Global settings
  eleventyConfig.setDataDeepMerge(true);

  // Copy UI images
  eleventyConfig.addPassthroughCopy("assets/images");

  // Copy .htaccess
  eleventyConfig.addPassthroughCopy(".htaccess");

  // Sass/PostCSS pipeline
  eleventyConfig.on("beforeBuild", () => {
    const result = sass.renderSync({
      file: "assets/stylesheet.scss",
      sourceMap: false,
      outputStyle: "compressed",
    });
    console.log("Sass compiled.");

    let css = result.css.toString();
    postcss([postcssPresetEnv()])
      .process(css, { from: "stylesheet.scss", to: "assets/stylesheet.css" })
      .then((result) => {
        fs.outputFile("_site/assets/stylesheet.css", result.css, (err) => {
          if (err) console.error(err);
          console.log("PostCSS transformations complete.");
        });
      });
  });

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
        formats: ["webp", "jpeg", "png"],
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

  // Generate a string we can use for asset cachebusting
  // https://rob.cogit8.org/posts/2020-10-28-simple-11ty-cache-busting/
  eleventyConfig.addFilter("cachebust", (url) => {
    const [urlPart, paramPart] = url.split("?");
    const params = new URLSearchParams(paramPart || "");
    params.set("v", DateTime.local().toFormat("X"));
    return `${urlPart}?${params}`;
  });

  // Smartquotes filter so I stop getting annoyed at seeing incorrect quote marks everywhere
  // https://charliepark.org/smartquotes_in_eleventy/
  eleventyConfig.addFilter("smartquotes", (post) => {
    const apostrophes = new RegExp(/(?<=<(h|l|p[^r]).*)\b'\b/g);
    const years = new RegExp(/(?<=\s)'(?=\d)/g);
    const openDoubles = new RegExp(/(?<=<(h|l|p[^r]).*)(?<=\s|>)&quot;/g);
    const closeDoubles = new RegExp(
      /(?<=<(h|l|p[^r]).*“.*)&quot;(?=(\s|\p{P}|<))/gu
    );
    const openSingles = new RegExp(/(?<=<(h|l|p[^r]).*)(?<=\s|>)'/g);
    const closeSingles = new RegExp(
      /(?<=<(h|l|p[^r]).*‘.*)'(?=(\s|\p{P}|<))/gu
    );
    return post
      .replace(apostrophes, "’")
      .replace(years, "’")
      .replace(openDoubles, "“")
      .replace(closeDoubles, "”")
      .replace(openSingles, "‘")
      .replace(closeSingles, "’");
  });

  // Layouts
  eleventyConfig.addLayoutAlias("blog-post", "blog-post.njk");

  return {
    markdownTemplateEngine: "njk",
    dir: {
      layouts: "_layouts",
    },
  };
};
