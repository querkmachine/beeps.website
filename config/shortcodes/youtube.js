const youtubeShortcode = function (videoId, settings = {}) {
  // Combine settings
  const defaultSettings = {
    aspectRatio: "16/9",
    title: "YouTube video player",
  };
  settings = { ...defaultSettings, ...settings };

  // Calculate aspect ratio for the video dimensions
  let multiplier = 1;
  if (String(settings.aspectRatio).includes("/")) {
    const ratioParts = String(settings.aspectRatio).split("/");
    multiplier = Number(ratioParts[1].trim()) / Number(ratioParts[0].trim());
  }

  // 500 is really just a fallback (e.g. if CSS didn't load), as the video will
  // be scaled to fit the available space anyway
  const width = 500;
  const height = width * multiplier;

  return `<div class="kimEmbed" style="aspect-ratio:${
    settings.aspectRatio
  }"><iframe width="${width}" height="${Math.round(
    height,
  )}" src="https://www.youtube-nocookie.com/embed/${videoId}" title="${
    settings.title
  }" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>`;
};

module.exports = youtubeShortcode;
