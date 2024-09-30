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

export default function () {
  return {
    beeps: buttonsBeeps,
    friendsitesButtons: buttonsOnly(sortEntries(buttonsFriendsites)),
    friendsites: textLinksOnly(sortEntries(buttonsFriendsites)),
    random: buttonsRandom,
    homepage: buttonsRandom.filter((i) => i.showOnHomepage),
  };
}
