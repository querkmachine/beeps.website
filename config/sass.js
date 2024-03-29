const paths = require("./paths.json");

const fs = require("fs-extra");
const sass = require("sass");
const postcss = require("postcss");
const postcssPresetEnv = require("postcss-preset-env");

/**
 * Syncronously compile sass by passing it first through the Sass compiler and
 * then PostCSS.
 *
 * @returns {boolean} - Boolean indicating whether the transformation was
 *   successful or not.
 */
const compileSass = function () {
  const result = sass.renderSync({
    file: paths.srcAssets + "/stylesheet.scss",
    sourceMap: false,
    outputStyle: "compressed",
  });
  console.log("Sass compiled.");

  let css = result.css.toString();
  postcss([postcssPresetEnv()])
    .process(css, { from: "stylesheet.scss", to: "assets/stylesheet.css" })
    .then((result) => {
      fs.outputFile(
        paths.outputAssets + "/stylesheet.css",
        result.css,
        (err) => {
          if (err) console.error(err);
          console.log("PostCSS transformations complete.");
          return false;
        }
      );
    });

  return true;
};

module.exports = {
  compileSass,
};
