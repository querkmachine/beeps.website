import EleventyFetch from "@11ty/eleventy-fetch";
import { formatDate } from "../../config/utils.js";

const fetchConfig = {
  duration: "1d",
  type: "json",
};

const formatFeedItem = function (item = {}) {
  return `<li>
    ${item.image ? `<img src="${item.image}" alt="">` : ""}
    <div>
      <strong>${item.title}</strong>
      ${item.subtitle}
    </div>
    <time datetime="${formatDate(item.timestamp, "isoWithTime")}">${formatDate(
    item.timestamp,
    "humanWithTime"
  )}</time>
  </li>`;
};

const getLastfmData = async function () {
  return EleventyFetch(
    `http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=robomilk&api_key=${process.env.LAST_FM_API_KEY}&format=json`,
    fetchConfig
  );
};

const lastfmFeed = async function () {
  let data = await getLastfmData();
  data = data.recenttracks.track.slice(0, 10);

  const listItems = [];

  data.forEach((item) => {
    // Timestamps need some wrangling as they're Unix time in seconds (not
    // milliseconds, like JS uses). Additionally, 'now playing' tracks don't
    // include a timestamp at all.
    const timestamp = new Date(item.date.uts * 1000) ?? new Date();

    listItems.push(
      formatFeedItem({
        title: item.name,
        subtitle: item.artist["#text"],
        image: item.image[1]["#text"] ?? null,
        timestamp,
      })
    );
  });

  return `<ol class="page-api-feed">${listItems.join("")}</ol>`;
};

const getTraktData = async function () {
  const headers = {
    ...fetchConfig,
    fetchOptions: {
      headers: {
        "Content-type": "application/json",
        "trakt-api-version": 2,
        "trakt-api-key": process.env.TRAKT_TV_API_KEY,
      },
    },
  };

  return EleventyFetch("https://api.trakt.tv/users/batbeeps/history", headers);
};

const traktFeed = async function () {
  const data = await getTraktData();

  const listItems = [];

  data.forEach((item) => {
    const timestamp = new Date(item.watched_at);

    if (item.type === "episode") {
      listItems.push(
        formatFeedItem({
          title: `${item.episode.season}&times;${item.episode.number} &ldquo;${item.episode.title}&rdquo;`,
          subtitle: item.show.title,
          timestamp,
        })
      );
    } else if (item.type === "movie") {
      listItems.push(
        formatFeedItem({
          title: `${item.movie.title}`,
          subtitle: item.movie.year,
          timestamp,
        })
      );
    }
  });

  return `<ol class="page-api-feed">${listItems.join("")}</ol>`;
};

export default {
  lastfmFeed: await lastfmFeed(),
  traktFeed: await traktFeed(),
};
