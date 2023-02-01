const youtubeShortcode = function (videoId) {
  return `<div class="kimEmbed"><iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/${videoId}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>`;
};

module.exports = youtubeShortcode;
