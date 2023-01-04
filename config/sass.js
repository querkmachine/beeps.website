const paths = require("./paths.json");

const fs = require("fs-extra");
const sass = require("sass");
const postcss = require("postcss");
const postcssPresetEnv = require("postcss-preset-env");

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
