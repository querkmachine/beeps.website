import { formatISODate } from "../utils.js";
import { markdownFilter } from "../markdown.js";

const socialEmbedShortcode = function (content, args) {
  // Error if any of these args are missing
  if (!args.host) {
    throw new Error("Social embed is missing instance URL.");
  }
  if (!args.username) {
    throw new Error("Social embed is missing username.");
  }
  if (!args.number) {
    throw new Error("Social embed is missing status ID number.");
  }
  if (!args.date) {
    throw new Error("Social embed is missing date.");
  }

  // Label
  let userUrl = `https://${args.host}/@${args.username}`;
  let postUrl = `https://${args.host}/@${args.username}/${args.number}`;
  let userDisplayName = `@${args.username}@${args.host}`;
  let serviceLabel = "on the fediverse";
  let showSource = true;

  if (args.host === "twitter.com" || args.host === "x.com") {
    userUrl = `https://${args.host}/${args.username}`;
    postUrl = `https://${args.host}/${args.username}/status/${args.number}`;
    userDisplayName = `@${args.username}`;
    serviceLabel = "on Twitter";
    showSource = false;
  } else if (args.host === "bsky.app") {
    userUrl = `https://${args.host}/profile/${args.username}`;
    postUrl = `https://${args.host}/profile/${args.username}/post/${args.number}`;
    userDisplayName = `@${args.username}`;
    serviceLabel = "on Bluesky";
    showSource = false;
  }

  let html = `<figure class="kimSocialEmbed">`;
  html += `<a class="kimLink-plain kimSocialEmbed_user" href="${userUrl}">`;
  html += `<strong>${userDisplayName}</strong> ${serviceLabel}`;
  html += `</a>`;
  html += `<blockquote class="kimSocialEmbed_body">${markdownFilter(content)}</blockquote>`;
  html += `<figcaption class="kimSocialEmbed_meta">`;
  html += `Posted at `;
  html += `<a href="${postUrl}">`;
  html += `<time datetime="${args.date}">`;
  html += formatISODate(args.date, "humanWithTime");
  html += `</time>`;
  html += `</a>`;
  if (showSource) {
    html += ` on <a href="https://${args.host}">${args.host}</a>`;
  }
  html += `</figcaption>`;
  html += `</figure>`;

  return html;
};

export default socialEmbedShortcode;
