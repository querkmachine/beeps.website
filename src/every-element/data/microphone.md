---
tag: microphone
name: Microphone
category: Interactive elements
mdn: null
spec: https://github.com/w3c/mediacapture-extensions/blob/main/media-capture-elements-explainer.md
experimental: true
---

Displays a button that prompts the user to share access to their device's microphone, as a replacement for requesting it using `navigator.getUserMedia` in JavaScript, though it still requires JavaScript to be useful.

A sister element to [`camera`](#camera), which requests camera permissions, and [`usermedia`](#usermedia), which requests access to both the camera and microphone.

This button's text and appearance is defined by the browser with limited customisation. It's intended to increase trust for user media requests, so that the user doesn't unwittingly grant access to their microphone (e.g. via clickjacking).

```html
<audio></audio>
<microphone></microphone>

<script>
  const $microphone = document.querySelector("microphone");
  const $audio = document.querySelector("audio");

  $microphone.addEventListener("track", () => {
    $audio.srcObject = new MediaStream([$microphone.track]);
  });
</script>
```

It comes with a new HTML attribute, `autostart`, that will attempt to begin streaming when the page loads, if the user has previously given permission.

Content inside of the element is used as a fallback in case the browser doesn't support the `microphone` element. This can be used to display a button falling back to `navigator.getUserMedia`.
