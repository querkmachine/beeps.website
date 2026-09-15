export default class Lastfm {
  constructor($module) {
    this.$module = $module;

    this.buildHtml();

    this.populateHtml();
  }

  async getData() {
    // I already got a thing that queries the Last.fm API and does some cache
    //  management so might as well reuse that, yeah??
    const response = await fetch("https://lastfm.beeps.gay/cache/data.json");
    const data = await response.json();

    const track = data.recenttracks.track[0];

    return {
      track: track.name,
      artist: track.artist["#text"],
      album: track.album["#text"] ?? null,
      artwork: track.image[2]["#text"] ? track.image[2]["#text"] : null,
      nowListening: track?.["@attr"]?.nowplaying ? true : false,
    };
  }

  async populateHtml() {
    const { track, artist, artwork, nowListening } = await this.getData();

    this.$module.dataset.nowListening = nowListening;
    this.$artwork.setAttribute("src", artwork ?? Lastfm.placeholderImage);
    this.$track.innerText = track;
    this.$artist.innerText = artist;

    if (nowListening) {
      this.$artwork.setAttribute("title", "Listening now");
    } else {
      this.$artwork.removeAttribute("title");
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

    this.$module.insertAdjacentElement("beforeend", $artworkWrapper);
    this.$module.insertAdjacentElement("beforeend", this.$track);
    this.$module.insertAdjacentElement("beforeend", this.$artist);

    this.$module.removeAttribute("hidden");
  }

  static placeholderImage = `/assets/images/cd.svg`;
}
