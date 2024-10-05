import EleventyFetch from "@11ty/eleventy-fetch";
import { DateTime } from "luxon";
import sanitizeHtml from "sanitize-html";

export default {
  layout: "blog-post.njk",
  tags: ["blog"],
  isBlogPost: true,
  mastheadSection: {
    href: "/blog/",
    text: "Blog",
  },
  eleventyComputed: {
    favourites: async (data) => {
      // Skip if there's no usable metadata on this post
      if (!data.interactions) return null;

      return await EleventyFetch(
        `https://${data.interactions.host}/api/v1/statuses/${data.interactions.id}/favourited_by`,
        {
          duration:
            DateTime.fromISO(data.page.date) < DateTime.now().minus({ days: 7 })
              ? "1d"
              : "7d",
          type: "json",
        }
      );
    },
    shares: async (data) => {
      // Skip if there's no usable metadata on this post
      if (!data.interactions) return null;

      return await EleventyFetch(
        `https://${data.interactions.host}/api/v1/statuses/${data.interactions.id}/reblogged_by`,
        {
          duration:
            DateTime.fromISO(data.page.date) < DateTime.now().minus({ days: 7 })
              ? "1d"
              : "7d",
          type: "json",
        }
      );
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

        return item;
      });

      return comments.sort((a, b) => {
        return new Date(a.created_at) - new Date(b.created_at);
      });
    },
  },
};
