export default class Fauxvertisements {
  $module;
  $image;
  index = 0;

  constructor($module) {
    this.$module = $module;
    this.index = Math.floor(Fauxvertisements.choices.length * Math.random());

    this.buildHtml();
    this.populateImage();

    setInterval(() => {
      this.incrementIndex();
      this.populateImage();
    }, 60000); // 1 minute
  }

  buildHtml() {
    const $image = document.createElement("img");
    $image.setAttribute("loading", "lazy");
    $image.setAttribute("decoding", "async");

    this.$image = $image;

    this.populateImage();

    this.$module.insertAdjacentElement("afterbegin", this.$image);
    this.$module.removeAttribute("hidden");
  }

  populateImage() {
    const { file, alt } = Fauxvertisements.choices[this.index];

    this.$image.src = `/assets/images/fauxvertisements/${file}`;
    this.$image.alt = alt;
  }

  incrementIndex() {
    this.index =
      this.index + 1 > Fauxvertisements.choices.length - 1 ? 0 : this.index + 1;
  }

  static choices = [
    {
      file: "foot-gun.gif",
      alt: "Fake advertisement for something called 'Foot Gun', with the tagline 'Never get caught unarmed again!'. It features a person's foot that has been photoshopped to have a sniper barrel and sight.",
    },
    {
      file: "jamie-oliver.gif",
      alt: "Fake advertisement featuring a picture of the devil alongside Jamie Oliver. It first reads 'Learn the truth about the Naked Chef', followed by a title reading 'The Jamie Oliver Phenomena'.",
    },
    {
      file: "microsoft-dating.gif",
      alt: "Fake advertisement for Microsoft Dating, with a picture of a young Bill Gates. Text reads 'The love of your life could be just one link away. Click to find singles in your area.'",
    },
    {
      file: "ukar.gif",
      alt: "Fake advertisement with basic black Times New Roman text on a white background. It advertises a 'Cubemobile' for £01,45.99. A 'Fuord Lovely' (a heavily graffiti'd car) for '$599 only'. And a stretch limousine being driven by Chell and travelling through portals from the video game Portal, advertised as 'V.I.Pkar from contemporarry videogame Por Taltoo.' it costs 3999 only.",
    },
    {
      file: "mozilla-aircrab.gif",
      alt: "Fake advertisement with a giant crab looming over the silhouette of a factory. Animated grungy text says 'join the revolution', 'Mozilla Aircrab', and 'Download now'.",
    },
    {
      file: "keiths-star-trek-resource.gif",
      alt: "Fake advertisement with a blurry starry background. Low quality headshots of James Kirk, Jean-Luc Picard, Benjamin Sisko and Katherine Janeway appear one by one, followed by the text 'Keith's Star Trek Resource'.",
    },
    {
      file: "char-siew-online.gif",
      alt: "Fake advertisement for CharSiewOnline.net, which promises 'authentic BBQ pork delivered by e-mail'. It has two pictures of char siew pork, with an animated cursor.",
    },
    {
      file: "claude-codes-4-u.gif",
      alt: "Fake advertisement of a cloudy clear sky, upon which sits a grumpy looking man at an old computer. Animated text fades in reading 'Say hello to Claude, your new code assistant' with the fictional URL ClaudCodes4U.com.",
    },
    {
      file: "durian.gif",
      alt: "Fake advertisement featuring an illustration of a durian in rainbow stripes, akin to 90s and early 2000s Apple branding. It's advertising the Durian dFone, which appears to be a transparent plastic landline phone. It has the tagline 'Stink different.'",
    },
    {
      file: "for-dumdus.gif",
      alt: "Fake advertisement featuring a large collage of wood-related terms in a word cloud-like layout. They quickly fade out with the text 'Struggle to make sense of it all?' appearing on top. It then changes to 'Get your free guide today!' with a book cover titled 'Wood for Dumdus' and an animated, embossed 'click here' button.",
    },
    {
      file: "visit-second-severn-crossing.gif",
      alt: "Fake advertisement featuring a panoramic photo of the Second Severn Crossing, a large cable-stayed bridge over the Severn Estuary. Written on it is 'Visit scenic Severn Second Crossing. Find us between England and Wales.'",
    },
  ];
}
