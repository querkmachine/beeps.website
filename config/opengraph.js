import { DateTime } from "luxon";

const urlizeOpenGraphImage = function (url) {
  return `https://v1.screenshot.11ty.dev/${encodeURIComponent(
    url,
  )}/opengraph/_${DateTime.local().toFormat("X")}/`;
};

const getSectionNameFromPath = function (path) {
  const parentSlug = path.split("/").filter(Boolean)[0];

  switch (parentSlug) {
    case "about":
      return "About beeps";
    case "accessibility-for-furries":
      return "Accessibility for furries";
    case "blog":
      return "Blog";
    case "every-element":
      return "Every HTML element";
    case "stash":
      return "Stash";
    default:
      return null;
  }
};

const collectionToOpenGraphJson = function (collection) {
  const data = {};

  collection.map((item) => {
    if (item.url) {
      data[item.url] = {
        title: item.data.title,
        date: item.data.date,
        section: getSectionNameFromPath(item.url),
      };
    }
  });

  return data;
};

export { urlizeOpenGraphImage, collectionToOpenGraphJson };
