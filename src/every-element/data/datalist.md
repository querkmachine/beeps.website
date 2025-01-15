---
tag: datalist
name: Data List
category: Forms
spec: https://html.spec.whatwg.org/multipage/form-elements.html#the-datalist-element
---

Container for a list of [`option`](#option) elements, representing suggested data for use with other form inputs.

Datalists must have an `id` attribute. Form inputs can then reference the data list using the `list` attribute.

<!-- prettier-ignore-start -->
```html
<input type="time" list="launch-times">
<datalist id="launch-times">
  <option value="9:00">
  <option value="11:00">
  <option value="13:00">
  <option value="22:00">
</datalist>
```
<!-- prettier-ignore-end -->

Currently, only certain `type`s of [`input`](#input) support data lists, and each one presents the suggestions differently. See [the `datalist` examples on MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/datalist#examples).

Data lists don't require the user to use a suggested value. If the user's options should be restricted, use `radio` [`input`](#input) elements or the [`select`](#select) element.
