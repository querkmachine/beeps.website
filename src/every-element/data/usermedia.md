---
tag: usermedia
name: User Media
category: Interactive elements
spec: https://github.com/w3c/mediacapture-extensions/blob/main/media-capture-elements-explainer.md
experimental: true
---

Displays a button that prompts the user to share camera and microphone access, as a replacement for requesting these using `navigator.getUserMedia` in JavaScript, though it still requires JavaScript to be useful.

A sister element to [`camera`](#camera) and [`microphone`](#microphone), which requests those permissions individually.

This button's text and appearance is defined by the browser with limited customisation. It's intended to increase trust for user media requests, so that the user doesn't unwittingly grant access to their camera and microphone (e.g. via clickjacking).

```html
<video></video>
<usermedia></usermedia>

<script>
  const $usermedia = document.querySelector("usermedia");
  const $video = document.querySelector("video");

  $usermedia.addEventListener("stream", () => {
    $video.srcObject = $usermedia.stream;
  });
</script>
```

It comes with a new HTML attribute, `autostart`, that will attempt to begin streaming when the page loads, if the user has previously given permission.

Content inside of the element is used as a fallback in case the browser doesn't support the `usermedia` element. This can be used to display a button falling back to `navigator.getUserMedia`.

Along with the [`geolocation`](#geolocation) element, it's a spin-off from the [`<permission>` element](https://github.com/WICG/PEPC/blob/main/explainer.md) that never made it past the concept phase.
