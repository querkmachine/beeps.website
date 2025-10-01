---
tag: script
name: Script
category: Scripting
spec: https://html.spec.whatwg.org/multipage/scripting.html#the-script-element
---

Allows for the addition of behavioural scripts to the page, practically always JavaScript. `script` is typically used in one of two ways: with a `src` attribute, or inline.

The `src` attribute references a separate file to the current page. The browser will begin loading this file when the renderer first encounters it, and will execute it immediately once loaded.

<!-- prettier-ignore-start -->
```html
<body>
  [...]
  <script src="starry-cursor-trail-code.js"></script>
</body>
```
<!-- prettier-ignore-end -->

JavaScript code can also be written inline, directly inside of the `script` element.

<!-- prettier-ignore-start -->
```html
<body>
  [...]
  <script>
    const launchButton = document.getElementById("launch-button")
    launchButton.addEventListener("click", () => {
      alert("Launch button is broken. Sorry!")
    })
  </script>
</body>
```
<!-- prettier-ignore-end -->

Script elements cannot contain both inline code and a `src` attribute. If you need a mixture of both, use multiple `script` elements.

The `script` element is 'render blocking', meaning the browser stops and waits for scripts it encounters to load and run before continuing to render the rest of the page, making pages seem to load slower. You usually want to put `script` elements as one of the last things inside of your [`body`](#body) element so that everything else loads before it, or you can use the `defer` attribute to delay loading instead.
