export default class Lastfm {
  constructor($module) {
    this.$module = $module;

    this.buildHtml();

    this.populateHtml();
  }

  async getData() {
    // I already got a thing that does this with cache management so might as
    // well reuse that, yeah??
    const response = await fetch("https://lastfm.beeps.gay/cache/data.json");
    const data = await response.json();

    const track = data.recenttracks.track[0];

    return {
      track: track.name,
      artist: track.artist["#text"],
      album: track.album["#text"] ?? null,
      artwork: track.image[2]["#text"] ? track.image[2]["#text"] : null,
      nowListening: track["@attr"].nowplaying ? true : false, // TODO
    };
  }

  async populateHtml() {
    const { track, artist, album, artwork, nowListening } =
      await this.getData();

    this.$module.dataset.nowListening = nowListening;
    this.$artwork.setAttribute("src", artwork ?? Lastfm.placeholderImage);
    this.$track.innerText = track;
    this.$artist.innerText = artist;

    if (album) {
      this.$album.innerText = album;
      this.$album.removeAttribute("hidden");
    } else {
      this.$album.setAttribute("hidden", "hidden");
    }
  }

  buildHtml() {
    // Album artwork wrapper
    const $artworkWrapper = document.createElement("div");
    $artworkWrapper.className = "kimLastfm_artwork";

    // Album artwork
    const $artwork = document.createElement("img");
    $artwork.setAttribute("alt", "");
    $artwork.setAttribute("loading", "lazy");
    $artwork.setAttribute("decoding", "async");
    $artwork.setAttribute("src", Lastfm.placeholderImage);
    this.$artwork = $artwork;

    $artworkWrapper.insertAdjacentElement("beforeend", this.$artwork);

    // Track name
    const $track = document.createElement("div");
    $track.className = "kimLastfm_track";
    $track.innerHTML = "Loading&hellip;";
    this.$track = $track;

    // Artist name
    const $artist = document.createElement("div");
    $artist.className = "kimLastfm_artist";
    this.$artist = $artist;

    // Album name
    const $album = document.createElement("div");
    $album.className = "kimLastfm_album";
    this.$album = $album;

    this.$module.insertAdjacentElement("beforeend", $artworkWrapper);
    this.$module.insertAdjacentElement("beforeend", this.$track);
    this.$module.insertAdjacentElement("beforeend", this.$artist);
    this.$module.insertAdjacentElement("beforeend", this.$album);

    this.$module.removeAttribute("hidden");
  }

  static placeholderImage =
    "data:image/png;base64,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";
}
