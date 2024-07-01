import { DateTime } from "luxon";

const urlizeOpenGraphImage = function (url) {
  return `https://v1.screenshot.11ty.dev/${encodeURIComponent(
    url
  )}/opengraph/_${DateTime.local().toFormat("X")}/`;
};

export { urlizeOpenGraphImage };
