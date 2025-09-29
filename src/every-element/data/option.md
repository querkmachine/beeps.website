---
tag: option
name: Option
category: Forms
spec: https://html.spec.whatwg.org/multipage/form-elements.html#the-option-element
---

Represents a distinct option with a [`select`](#select) or [`datalist`](#datalist) element.

If used within a `select` element, the `selected` attribute can be provided to determine a default choice, otherwise it will default to the first option provided.

If a `value` attribute is not provided, then the value is implied to be the same as the option's text label.

<!-- prettier-ignore-start -->
```html
<label for="shuttles">Select your favourite shuttle</label>
<select id="shuttles">
  <option>Atlantis</option>
  <option>Challenger</option>
  <option>Columbia</option>
  <option selected>Discovery</option>
  <option>Endeavour</option>
  <option>Enterprise</option>
  <option value="none">I prefer rockets</option>
</select>
```
<!-- prettier-ignore-end -->
