// The actual Last.fm API interactions are hosted elsewhere.
// This script just pulls down the stored data and outputs it in HTML.

export default class LastFm {
  constructor($module) {
    if (!$module) {
      return;
    }

    this.$module = $module;

    this.injectHtml();
  }

  async fetchData() {
    const response = await fetch(`https://lastfm.beeps.gay/cache/data.json`);

    if (!response.ok) {
      console.error(`Last.fm data response status: ${response.status}`);
    }

    const data = await response.json();
    return data["recenttracks"]["track"][0];
  }

  async injectHtml() {
    const data = await this.fetchData();
    console.log({ data });
    if (!data) return;

    // Create heading
    const $heading = document.createElement("h2");
    $heading.className = "kimHeading-xs";
    $heading.innerText = data?.["@attr"]?.["nowplaying"]
      ? "Now listening"
      : "Recently listened";

    // Create data container
    const $container = document.createElement("a");
    $container.href = data.url;

    // Create album artwork
    const $artwork = document.createElement("img");
    $artwork.src =
      data.image[0]["#text"] ??
      "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
    $artwork.alt = "";

    // Create text wrap
    const $p = document.createElement("p");
    $p.className = "kimBody-s";
    $p.innerHTML = `<b>${data.name}</b><br>by ${data.artist["#text"]}`;

    // Assemble it all
    $container.insertAdjacentElement("beforeend", $artwork);
    $container.insertAdjacentElement("beforeend", $p);

    this.$module.insertAdjacentElement("beforeend", $heading);
    this.$module.insertAdjacentElement("beforeend", $container);
  }
}
