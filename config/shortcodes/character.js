const paths = require("../paths.json");

const pluginImages = require("@11ty/eleventy-img");

// List of available variants, images and alt text
const variants = {
  ash: [
    {
      name: "alarmed",
      image: "grimace.svg",
      alt: "An amphimorpho looking alarmed and grimacing.",
    },
    {
      name: "happy",
      image: "happy.svg",
      alt: "An amphimorpho smiling happily.",
    },
    {
      name: "love",
      image: "hearts.svg",
      alt: "An amphimorpho smiling warmly with multiple love hearts floating around it.",
    },
    {
      name: "pensive",
      image: "pensive.svg",
      alt: "An amphimorpho with ears drooped and eyes closed in contemplation.",
    },
    {
      name: "sleepy",
      image: "sleepy.svg",
      alt: "An amphimorpho with ears drooped and mouth hung open, sleepy Zs emanating from it.",
    },
    {
      name: "thinking",
      image: "thinking.svg",
      alt: "An amphimorpho looking to the side in puzzlement, with a paw on its chin in thought.",
    },
    {
      name: "tongue",
      image: "tongue.svg",
      alt: "An amphimorpho cheekily sticking its tongue out at you.",
    },
  ],
  emy: [
    {
      name: "alarmed",
      image: "alarmed.png",
      alt: "An alarmed looking robot bat.",
    },
    {
      name: "angry",
      image: "angry.png",
      alt: "A robot bat gesturing angrily.",
    },
    {
      name: "broken",
      image: "broken.png",
      alt: "A robot bat looking disappointedly down at a wing that's fallen off.",
    },
    { name: "dab", image: "dab.png", alt: "A robot bat dabbing." },
    {
      name: "gun",
      image: "gun.png",
      alt: "A robot bat casually brandishing a pistol.",
    },
    { name: "happy", image: "happy.png", alt: "A robot bat cheering happily." },
    {
      name: "innards",
      image: "innards.png",
      alt: "A robot bat with its chest open, exposing the wiring within and looking at you expectantly.",
    },
    {
      name: "flying",
      image: "flying.png",
      alt: "A robot bat flying through the sky, propulsive flames shooting from its back.",
    },
    { name: "love", image: "love.png", alt: "A robot bat blowing a kiss." },
    {
      name: "point",
      image: "point.png",
      alt: "A robot bat looking and pointing to the right.",
    },
    {
      name: "point-down",
      image: "point-down.png",
      alt: "A robot bat looking and pointing downwards.",
    },
    {
      name: "point-up",
      image: "point-up.png",
      alt: "A robot bat looking and pointing upwards.",
    },
    {
      name: "wave",
      image: "wave.png",
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

  const imagePath = `${paths.srcAssets}/images/${character}/${variant.image}`;
  const imageConfig = {
    widths: [150],
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
