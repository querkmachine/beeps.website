import responsiveImagesShortcode from "./responsiveImages.js";

const imageDifferShortCode = async function (
  image1Src,
  image1Alt,
  image2Src,
  image2Alt,
) {
  const imageOptions = { classes: "kimImageDiffer_image" };
  const image1 = await responsiveImagesShortcode(
    image1Src,
    image1Alt,
    imageOptions,
  );
  const image2 = await responsiveImagesShortcode(
    image2Src,
    image2Alt,
    imageOptions,
  );
  return `<div class="kimImageDiffer" data-js="image-differ">${image1}${image2}</div>`;
};

export default imageDifferShortCode;
