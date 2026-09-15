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

  static placeholderImage =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAACClBMVEUlITQlITU0KldGNX9TPZ1gRbxtTdlzUeh4U/J8VvwrJUJGNYFeRLd0UetlSMcpIz0rJUMmITY+MG5hRr56VfhRPJpJN4YmIjdFNX9vTt04LF9iRsE9MGtvTt4oIzt5VPUvJ0pfRLlcQrE/MW9fRbpBMnV3U+9CM3dYQKpCMnYnIjlXQKcqJEByUOQsJURoSs5mSMloSs9MOY5OOpJxT+IzKVNoSs1wT+F7VfppS9FWP6ZENHtdQ7VXQKh4VPMmIjZ2Uu4uJ0l3U/BhRb05LWMvJ0tHNoJTPZ49MGx8VvsuJkh1UuxINoVrTNUvJ0x6VfdVPqIqJEFGNYBDM3ljR8QyKVM+MGxDM3puTdszKlU+MG0nIjh7Vfk3LF1eRLhYQKlJN4d5VPZuTt02K1tmSco2K1o7LmZrTNY2LFwyKVIoIzo3LF41K1hxT+NBMnQwKE5jR8JINoRpSs8pJD5XP6dVPqNPO5RSPJxOOpE8L2kwKE1UPqF5VPRcQ7NFNX5ZQaw4LWFTPZ9yUOU1K1l0UeowJ0w4LWBzUOdpStAuJklWP6U+MW4xKE9WP6RUPqAmITVnSctsTNgrJUFqS9ItJkZbQrF0UelENHx2Uu8tJkVIN4ZUPZ9kR8VwT+BgRbteRLZVP6NLOIxuTdxNOY83LFxMOY0yKVFHNoNAMXJ3U/FFNH1aQa5vTt8/MXA8V0IzAAAEl0lEQVR4AezYg5cj2R8F8NtI0retTP/iHiUzlbTNtJG0xrZt27b1W++O/sg9zdKremt/gjr8nnPr+eE/fz8pqWnpDqcrg8xwOR3paakp+BUys7JzaJCLvHz8IgWFRcU0c2NWcVFhAX6ukv95KOSFj6QnrQQ/iz9AsZyCYIjjAn78dKWzaWUO5nLKvFL8RPPDtBTBAk4LL8RPoURprTiGMqqiCqTKK2ijEqnUqiqHRKmHdqpRQx1PqaReLW3VoZ56tbYVywO01YDMRhoEymFJaaK9ZrTQpEmBlSgl/GilWRsszKdEuxLvoMB8CHV2UaIbPRTp6oXIPMr0oZ9CUQgMUGYwAScFkkMFMCvwUGYYIzQbHVsEZXEcRkso5UYfTZYuA5YHuAIGKU5KedFNg5XLgVVLSTpToLeaUjkFSjt1wtVrsGhsLUk2roPeekrNgZ9ajRvKUbIxSZLO6gT0YptoY3N0aOHCoS1opsbWbcD2HSQ7ojsB7NoNrSxaK9qDKXuLOG3ffuCAg2w8GFGA2KHDzIJWN60kVwNHIkfntR6LHAFWJzmu/XgQeSdC3HwyARScag2R7IZGPEwLDaex6MxZTgidWYTTDeTguQRSzru6LlwEUHfpMid0xaG6QgtXr+H6Dc64cR3Xcm5eB65X5bYEJ6POuAJVHy2shvcsNc56cSsFiTNqVFUfVLcp5kC+izqufCh3vADuusuodw8qH8X2oI3jwvf3778f5rg2PADy0h4O0sgH1SMKefA4RJJPngLA0yckGXqMi8/aKfAIqucUiuIFSb58hQmvXpLkC0Qp5IIqg0KvcZQk72PKG5KMYohCGVBRbD8ck48p+0nSgf0U+ykFs80Fs20KyiMfI8k3usjH5JF/h0Z5RIFQ68XpblMOAOVPSHJTJjZT6JFtxx58mBYDHkx37Df79795OdWx11HMZzP0ytx3AXjvKKKh56DYPaj69FFPFQCJk2cSSEmYJ4fVtNAnnr4OH4oBwZa3FeOT1M2rI7jo4gzXRYzk0MIVqOJdnOC6VAfg4oUu1/kUJOYMku9OY9FYiBM2jS3CtXe00BU3LgGh2YXx8aibGTqRh+Dxdo7LWQ4cibT9/4svI0eA5VdppRtaWZNRlcjBRtJxANjfwGmOmSx7HLSWBa3duwDsjHaQ3LEd2LaVGguwbWj+iq/avqaNTTHoJb5xkmRyYxzlG9ZSay7mUGo99L5tJMnisUUo+S5MnVCwIIdShaLN0tJVwPKV5hHgpZQzBQYrGFgOfL+UJrPgptQKGBUsVrBobJRmIximjCcOs4IfkhRwIjFImfcQuE+hfvRR5iBESj9QpAfdlPjQC6GPFOiIK+2UeAELn2jWCj8lPv2sw2MLmmlBfnhE+WcaNGaigbY+l/+sA3g96mhJfgAHej3UqUE17Xh6IVFeRa1UVNLG4fKfec1ShlgxrUUV/BSRsGZujdDSj3NSZyASuKoQU7bOc2UgHnisIVS2rgkjcbgvSBJf2SrJLU76gORaYRHsZauI8FpBBrKAAD8DH0YnV9FNgMJBXXfgoG4Np8gMk4ms7qBB3SEHRgEA3VcsVMexrJgAAAAASUVORK5CYII=";
}
