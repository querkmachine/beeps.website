---
tag: geolocation
name: Geolocation
category: Interactive elements
mdn: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/geolocation
spec: https://w3c.github.io/geolocation/
experimental: true
---

Displays a button that prompts the user to share their geolocation information, as a replacement for requesting location using `navigator.geolocation` in JavaScript, though it still requires JavaScript to be useful.

This button's text and appearance is defined by the browser with limited customisation. It's intended to increase trust for location requests, so that the user doesn't unwittingly share their location (e.g. via clickjacking).

<!-- prettier-ignore-start -->
```html
<geolocation></geolocation>

<script>
  const $geolocation = document.querySelector("geolocation");

  $geolocation.addEventListener("location", () => {
    const coords = $geolocation.position.coords;
    console.log(`Landing coords are ${coords.latitude}, ${coords.longitude}`);
  });
</script>
```
<!-- prettier-ignore-end -->

It comes with three new HTML attributes that influence how the element works:

- `accuracymode` changes how precise the location data should be, accepting 'precise' or 'approximate' as a value
- `autolocate` will automatically retrieve location when the page is loaded, if the user has previously given permission
- `watch` will continuously trigger the `location` event as the user moves around

Content inside of the element is used as a fallback in case the browser doesn't support the `geolocation` element. This can be used to display a button falling back to `navigator.geolocation`.

Along with the [`usermedia`](#usermedia) element, it's a spin-off from the [`<permission>` element](https://github.com/WICG/PEPC/blob/main/explainer.md) that never made it past the concept phase.
