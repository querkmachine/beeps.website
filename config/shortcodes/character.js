const paths = require("../paths.json");

const pluginImages = require("@11ty/eleventy-img");

// List of available variants, images and alt text
const variants = {
  ash: [
    { name: "alarmed", alt: "An amphimorpho looking alarmed and grimacing." },
    { name: "happy", alt: "An amphimorpho smiling happily." },
    {
      name: "love",
      alt: "An amphimorpho smiling warmly with multiple love hearts floating around it.",
    },
    {
      name: "pensive",
      alt: "An amphimorpho with ears drooped and eyes closed in contemplation.",
    },
    {
      name: "sleepy",
      alt: "An amphimorpho with ears drooped and mouth hung open, sleepy Zs emanating from it.",
    },
    {
      name: "thinking",
      alt: "An amphimorpho looking to the side in puzzlement, with a paw on its chin in thought.",
    },
    {
      name: "tongue",
      alt: "An amphimorpho cheekily sticking its tongue out at you.",
    },
  ],
  emy: [
    {
      name: "alarmed",
      alt: "An alarmed looking robot bat.",
    },
    {
      name: "angry",
      image: "angry.png",
      alt: "A robot bat gesturing angrily.",
    },
    {
      name: "broken",
      alt: "A robot bat looking disappointedly down at a wing that's fallen off.",
    },
    { name: "dab", alt: "A robot bat dabbing." },
    {
      name: "gun",
      alt: "A robot bat casually brandishing a pistol.",
    },
    { name: "happy", alt: "A robot bat cheering happily." },
    {
      name: "innards",
      alt: "A robot bat with its chest open, exposing the wiring within and looking at you expectantly.",
    },
    {
      name: "flying",
      alt: "A robot bat flying through the sky, propulsive flames shooting from its back.",
    },
    { name: "love", alt: "A robot bat blowing a kiss." },
    {
      name: "point",
      alt: "A robot bat looking and pointing to the right.",
    },
    {
      name: "point-down",
      alt: "A robot bat looking and pointing downwards.",
    },
    {
      name: "point-up",
      alt: "A robot bat looking and pointing upwards.",
    },
    {
      name: "wave",
      alt: "A robot bat looking and waving at you.",
    },
  ],
};

const characterShortcode = function (content, args) {
  if (!args.variant) {
    throw new Error(`Missing \`variant\` argument on character shortcode.`);
  }

  const character = args.character || "emy";
  const variant = variants[character].find((i) => i.name === args.variant);

  const imagePath = `${paths.srcAssets}/images/${character}/${variant.name}.png`;
  const imageConfig = {
    widths: [null],
    formats: ["webp"],
    urlPath: `/images/${character}/`,
    outputDir: `${paths.output}/images/${character}/`,
  };

  // Process image
  pluginImages(imagePath, imageConfig);

  // Get image metadata, even if the above isn't finished yet
  const imageMeta = pluginImages.statsSync(imagePath, imageConfig);
  const image = imageMeta.webp[imageMeta.webp.length - 1];

  return `<figure class="kimCharacter kimCharacter-${character}">
    <figcaption class="kimCharacter_cite">
      <img
        class="kimCharacter_image"
        src="${image.url}"
        width="${image.width}"
        height="${image.height}"
        alt="${variant.alt}">
    </figcaption>
    <blockquote class="kimCharacter_speech">\n${content}</blockquote>
  </figure>`;
};

module.exports = characterShortcode;
