import { writeFile, mkdir } from "node:fs/promises";
import path from "node:path";
import EleventyFetch from "@11ty/eleventy-fetch";
import { DateTime } from "luxon";
import sanitizeHtml from "sanitize-html";

async function cacheFediverseAvatar(avatarUrl, avatarFilename) {
  const folder = path.join("_site", ".avatar-cache");
  await mkdir(folder, { recursive: true });

  try {
    const avatar = await EleventyFetch(avatarUrl, { type: "buffer" });
    await writeFile(path.join(folder, avatarFilename), avatar);
  } catch (err) {
    // Suppress errors, I don't really care if this fails
  }
}

export default {
  layout: "blog-post.njk",
  tags: ["blog"],
  isBlogPost: true,
  mastheadSection: {
    href: "/blog/",
    text: "Blog",
  },
  eleventyComputed: {
    stats: async (data) => {
      // Skip if there's no usable metadata on this post
      if (!data.interactions) return null;

      const metadata = await EleventyFetch(
        `https://${data.interactions.host}/api/v1/statuses/${data.interactions.id}`,
        {
          duration:
            DateTime.fromISO(data.page.date) < DateTime.now().minus({ days: 7 })
              ? "1d"
              : "7d",
          type: "json",
        }
      );

      return {
        comments: metadata.replies_count,
        shares: metadata.reblogs_count,
        favourites: metadata.favourites_count,
      };
    },
    favourites: async (data) => {
      // Skip if there's no usable metadata on this post
      if (!data.interactions) return null;

      const favourites = await EleventyFetch(
        `https://${data.interactions.host}/api/v1/statuses/${data.interactions.id}/favourited_by`,
        {
          duration:
            DateTime.fromISO(data.page.date) < DateTime.now().minus({ days: 7 })
              ? "1d"
              : "7d",
          type: "json",
        }
      );

      return await favourites.map((item) => {
        const avatarFilename = item.avatar
          ? item.avatar.split("/").at(-1)
          : null;
        cacheFediverseAvatar(item.avatar, avatarFilename);

        return {
          url: item.url,
          acct: item.acct,
          avatar: avatarFilename,
        };
      });
    },
    shares: async (data) => {
      // Skip if there's no usable metadata on this post
      if (!data.interactions) return null;

      const shares = await EleventyFetch(
        `https://${data.interactions.host}/api/v1/statuses/${data.interactions.id}/reblogged_by`,
        {
          duration:
            DateTime.fromISO(data.page.date) < DateTime.now().minus({ days: 7 })
              ? "1d"
              : "7d",
          type: "json",
        }
      );

      return await shares.map((item) => {
        const avatarFilename = item.avatar
          ? item.avatar.split("/").at(-1)
          : null;
        cacheFediverseAvatar(item.avatar, avatarFilename);

        return {
          url: item.url,
          acct: item.acct,
          avatar: avatarFilename,
        };
      });
    },
    comments: async (data) => {
      // Skip if there's no usable metadata on this post
      if (!data.interactions) return null;

      let comments = await EleventyFetch(
        `https://${data.interactions.host}/api/v1/statuses/${data.interactions.id}/context`,
        {
          duration:
            DateTime.fromISO(data.page.date) < DateTime.now().minus({ days: 7 })
              ? "1d"
              : "7d",
          type: "json",
        }
      );

      comments = comments.descendants.map((item) => {
        // Mastodon API (rather annoyingly) doesn't show full usernames for users
        // on the 'local' instance, so manually fix that
        if (!item.account.acct.includes("@")) {
          item.account.acct = `${item.account.acct}@${data.interactions.host}`;
        }

        // Sanitise the HTML to remove any script tags or other dodgy stuff
        item.content = sanitizeHtml(item.content);

        // Locally download and cache avatar
        const avatarFilename = item.account.avatar
          ? item.account.avatar.split("/").at(-1)
          : null;
        cacheFediverseAvatar(item.account.avatar, avatarFilename);
        item.account.avatar = avatarFilename;

        return item;
      });

      return comments.sort((a, b) => {
        return new Date(a.created_at) - new Date(b.created_at);
      });
    },
  },
};
