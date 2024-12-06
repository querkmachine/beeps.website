import EleventyFetch from "@11ty/eleventy-fetch";
import { JSDOM } from "jsdom";
import sanitizeHtml from "sanitize-html";

const getLinkDetails = async function (url) {
  const pageHtml = await EleventyFetch(url, { type: "text", duration: "*" });

  const dom = new JSDOM(pageHtml);
  const doc = dom.window.document;

  return {
    title:
      doc.querySelector("meta[property='og:title']")?.getAttribute("content") ??
      doc.querySelector("title").textContent,
    site_name:
      doc
        .querySelector("meta[property='og:site_name']")
        ?.getAttribute("content") ?? null,
    description:
      doc
        .querySelector("meta[property='og:description']")
        ?.getAttribute("content") ??
      doc.querySelector("meta[name='description']")?.getAttribute("content") ??
      null,
    author:
      doc.querySelector("meta[property='author']")?.getAttribute("content") ??
      null,
    image:
      doc
        .querySelector("meta[property='og:image:secure_url']")
        ?.getAttribute("content") ??
      doc
        .querySelector("meta[property='og:image:url']")
        ?.getAttribute("content") ??
      doc.querySelector("meta[property='og:image']")?.getAttribute("content") ??
      doc
        .querySelector("meta[property='og:image:url']")
        ?.getAttribute("content") ??
      doc.querySelector("link[rel='apple-touch-icon']")?.getAttribute("href") ??
      null,
  };
};

const linkShortcode = async function (url) {
  const details = await getLinkDetails(url);
  const metadata = [details.author, details.site_name].filter(
    (val) => val !== null,
  );

  let returnHtml = `<div class="kimLinkEmbed">`;
  if (details.image) {
    returnHtml += `<img class="kimLinkEmbed_image" alt="" src="${details.image}">`;
  }
  returnHtml += `<a class="kimLink kimLinkEmbed_title" href="${url}">${details.title}</a>`;
  if (details.description) {
    returnHtml += `<p class="kimLinkEmbed_description">${sanitizeHtml(details.description)}</p>`;
  }
  if (metadata) {
    returnHtml += `<div class="kimLinkEmbed_metadata">${metadata.join(" &middot; ")}</div>`;
  }
  returnHtml += `</div>`;

  return returnHtml;
};

export default linkShortcode;
