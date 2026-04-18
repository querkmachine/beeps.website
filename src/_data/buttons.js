import buttonsBeeps from "./buttons/beeps.js";
import buttonsFriendsites from "./buttons/friends.js";
import buttonsRandom from "./buttons/random.js";

const sortEntries = (buttons) => {
  return buttons.sort((a, b) => a.alt.localeCompare(b.alt));
};

const buttonsOnly = (buttons) => {
  return buttons.filter((i) => typeof i.src === "string");
};

const textLinksOnly = (buttons) => {
  return buttons.filter((i) => typeof i.src === "undefined");
};

const addFavicons = (buttons) => {
  return buttons.map((i) => {
    const domain = new URL(`http://${i.url}`)?.host;

    return {
      ...i,
      icon: `https://www.google.com/s2/favicons?domain=${domain}&sz=32`,
    };
  });
};

export default function () {
  return {
    beeps: buttonsBeeps,
    friendsitesButtons: buttonsOnly(sortEntries(buttonsFriendsites)),
    friendsites: addFavicons(textLinksOnly(sortEntries(buttonsFriendsites))),
    random: buttonsRandom,
    homepage: buttonsRandom.filter((i) => i.showOnHomepage),
  };
}
