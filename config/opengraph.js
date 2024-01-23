const urlizeOpenGraphImage = function (url) {
  return `https://v1.screenshot.11ty.dev/${encodeURIComponent(url)}/opengraph/`;
};

export { urlizeOpenGraphImage };
