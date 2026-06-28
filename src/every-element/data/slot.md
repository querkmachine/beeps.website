---
tag: slot
name: Web Component Slot
category: Scripting
spec: https://html.spec.whatwg.org/multipage/scripting.html#the-slot-element
---

`slot`, along with [`template`](#template), is part of the [Web Components suite of technologies](https://developer.mozilla.org/en-US/docs/Web/API/Web_components). They represent an area where content can be injected into a web component, based on a given `name` attribute.

Content inside of the `slot` element is displayed as a fallback if no content has been injected into it.

<!-- prettier-ignore-start -->
```html
<template id="planet-details">
  <p>The planet <slot name="name">Noname</slot> is <slot name="diameter">0 kilometers</slot> in diameter and home to <slot name="population">no</slot> humans.</p>
</template>

[...]

<planet-details>
  <strong slot="name">Earth</strong>
  <span slot="diameter">approximately 12,756 kilometres</span>
  <span slot="population">roughly 8 billion</span>
</planet-details>
```
<!-- prettier-ignore-end -->
