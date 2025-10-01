---
tag: progress
name: Progress Indicator
category: Forms
spec: https://html.spec.whatwg.org/multipage/form-elements.html#the-progress-element
---

Provides a visual representation of how complete a task is.

The upper bound is provided by the `max` attribute, with the lower bound being fixed at 0. The current value is provided using the `value` attribute, but may be omitted if there is an indeterminate amount of progress remaining, such as uploading a file when you don't know how large the file is.

Text inside of the `progress` element is announced by screen readers and shown as a fallback for browsers that cannot display the element. As it's technically a form control, `progress` should have an accompanying [`label`](#label) element.

<!-- prettier-ignore-start -->
```html
<label for="altitude-to-orbit">Distance to orbit</label>
<progress id="altitude-to-orbit" max="370" value="226">61.1% of the way to orbit</progress>
```
<!-- prettier-ignore-end -->

`progress` is only intended to show progression when there is a distinct start and end point. To show a visual representation of other values, use [`meter`](#meter). To accept user input using a visual range, use [`input`](#input) with the `range` type.
