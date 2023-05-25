const paths = require("./paths.json");

const fs = require("fs-extra");
const pluginImages = require("@11ty/eleventy-img");

/**
 * Manually split a string into lines of a maximum length. Used when generating
 * OpenGraph SVGs, as SVG text can't do this automatically.
 *
 * @param {string} input - The string to split.
 * @param {number} [maxChars=20] - The maximum number of characters that can be
 *   in each line.
 * @returns {array} - An array containing each split line as a separate index.
 *
 * @author Stefan Baumgartner
 * @tutorial https://fettblog.eu/11ty-automatic-twitter-cards/
 */
const splitLines = function (input, maxChars = 20) {
  const parts = input.split(" ");
  const lines = parts.reduce(function (prev, current) {
    if (!prev.length) {
      return [current];
    }
    let lastOne = prev[prev.length - 1];
    if (lastOne.length + current.length > maxChars) {
      return [...prev, current];
    }
    prev[prev.length - 1] = lastOne + " " + current;
    return prev;
  }, []);
  return lines;
};

/**
 * Run the automatically generated OpenGraph SVGs through Eleventy's image
 * plugin, convert them to PNGs, and save them out as part of the compiled site.
 *
 * @author Bernard Nijenhuis
 * @tutorial https://bnijenhuis.nl/notes/2021-05-10-automatically-generate-open-graph-images-in-eleventy/
 */
const processOpenGraphImages = function () {
  const socialPreviewImagesDir = paths.output + "/images/opengraph/";
  fs.readdir(socialPreviewImagesDir, (err, files) => {
    if (err) throw err;
    files.forEach((filename) => {
      if (filename.endsWith(".svg")) {
        let imageUrl = socialPreviewImagesDir + filename;
        pluginImages(imageUrl, {
          formats: ["png"],
          outputDir: socialPreviewImagesDir,
          filenameFormat: (id, src, width, format, options) => {
            let outputFilename = filename.substring(0, filename.length - 4);
            return `${outputFilename}.${format}`;
          },
        });
      }
    });
  });
};

module.exports = {
  processOpenGraphImages,
  splitLines,
};
