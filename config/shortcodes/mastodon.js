import { formatISODate } from "../utils.js";

export default function (content, args) {
  // Error if any of these args are missing
  if (!args.host) {
    throw new Error("Mastodon embed is missing instance URL.");
  }
  if (!args.username) {
    throw new Error("Mastodon embed is missing username.");
  }
  if (!args.number) {
    throw new Error("Mastodon embed is missing status ID number.");
  }
  if (!args.date) {
    throw new Error("Mastodon embed is missing date.");
  }

  return `<figure class="kimFigure"><blockquote class="kimBlockquote">
  ${content}
  </blockquote><figcaption class="kimFigure_caption">&mdash; @${
    args.username
  }@${args.host} on the fediverse. <time datetime="${
    args.date
  }">${formatISODate(args.date, "humanWithTime")}.</time>  (<a href="https://${
    args.host
  }/@${args.username}/${
    args.number
  }" rel="noreferrer noopener">original post</a>)</figcaption></figure>`;
}
