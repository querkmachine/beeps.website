import paths from "./paths.js";

import { mkdir, writeFile } from "node:fs/promises";
import { glob } from "glob";
import * as sass from "sass";
import postcss from "postcss";
import postcssPresetEnv from "postcss-preset-env";
import postcssCssNano from "cssnano";

const compileStylesheets = async function () {
  const files = await glob(`${paths.srcAssets}/**/*.scss`, {
    ignore: `${paths.srcAssets}/**/_*.scss`,
  });
  for await (const file of files) {
    const filenameParts = file.split("/");
    const filename = filenameParts[filenameParts.length - 1].replace(
      ".scss",
      ".css",
    );
    const fileDirectory =
      filenameParts[filenameParts.length - 2] !== "assets"
        ? paths.outputAssets + "/" + filenameParts[filenameParts.length - 2]
        : paths.outputAssets;

    let css = compileSassFile(file);
    css = await transformCss(css);

    await mkdir(fileDirectory, {
      recursive: true,
    });
    await writeFile(`${fileDirectory}/${filename}`, css);
  }
};

const compileSassFile = function (file) {
  const result = sass.compile(file, {
    sourceMap: false,
    outputStyle: "expanded",
  });
  return result.css.toString();
};

const transformCss = async function (css) {
  return postcss([postcssPresetEnv, postcssCssNano])
    .process(css)
    .then(async (result) => result.css);
};

export { compileStylesheets };
