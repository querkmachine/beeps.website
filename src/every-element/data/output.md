---
tag: output
name: Output
category: Forms
spec: https://html.spec.whatwg.org/multipage/form-elements.html#the-output-element
---

Contains the outcome of a user action, such as changing the value of form controls. The contents are typically changed dynamically using JavaScript.

The `for` attribute contains a space-separated list of input `id`s that affect the final output.

<!-- prettier-ignore-start -->
```html
<label for="name">Enter your name</label>
<input type="text" id="name" value="John">

<label for="town">Enter the name of your town or city</label>
<input type="text" id="town" value="Columbus">

<output for="name town">Hello John from Columbus!</output>
```
<!-- prettier-ignore-end -->

Many assistive technologies will announce the content of `output` automatically when it's changed, without requiring users to move focus to the element.

Only intended for the actual outputs of an operation. For examples of outputs, use [`samp`](#samp).
