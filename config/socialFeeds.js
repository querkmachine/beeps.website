const EleventyFetch = require("@11ty/eleventy-fetch");

const fetchConfig = {
  duration: "1d",
  type: "json",
  directory: ".cache",
};

const mastodonFeed = async function () {
  return EleventyFetch(
    "https://chitter.xyz/api/v1/accounts/109596274633188476/statuses?exclude_replies=true&exclude_reblogs=true",
    fetchConfig
  );
};

const traktTvFeed = async function () {
  const traktHeaders = {
    fetchOptions: {
      headers: {
        // lol
        "Content-type": "application/json",
        "trakt-api-key":
          "5e5ab054834ab0df3bc26df456029b84ed5a016956ad56fa3255f1375721e08d",
        "trakt-api-version": 2,
      },
    },
  };

  return EleventyFetch("https://api.trakt.tv/users/batbeeps/history/shows", {
    ...fetchConfig,
    ...traktHeaders,
  });
};

const lastFmFeed = async function () {
  return EleventyFetch(
    "http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=robomilk&api_key=dd24866424e5f65a22bca989229d3ed5&format=json",
    fetchConfig
  );
};

module.exports = {
  mastodonFeed,
  traktTvFeed,
  lastFmFeed,
};
