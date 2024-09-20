const buttonsBeeps = require("./buttons/beeps.js");
const buttonsFriendsites = require("./buttons/friends.js");
const buttonsRandom = require("./buttons/random.js");

const sortEntries = (buttons) => {
  return buttons.sort((a, b) => a.alt.localeCompare(b.alt));
};

const buttonsOnly = (buttons) => {
  return buttons.filter((i) => typeof i.src === "string");
};

const textLinksOnly = (buttons) => {
  return buttons.filter((i) => typeof i.src === "undefined");
};

module.exports = function () {
  return {
    beeps: buttonsBeeps,
    friendsitesButtons: buttonsOnly(sortEntries(buttonsFriendsites)),
    friendsites: textLinksOnly(sortEntries(buttonsFriendsites)),
    random: buttonsRandom,
    homepage: buttonsRandom.filter((i) => i.showOnHomepage),
  };
};
