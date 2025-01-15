---
tag: fieldset
name: Field Set
category: Forms
spec: https://html.spec.whatwg.org/multipage/form-elements.html#the-fieldset-element
---

Used to group together multiple related inputs within a [`form`](#form), usually accompanied by a [`legend`](#legend).

This is particularly common with checkboxes and radio buttons, but may apply to any group of several inputs, such as when asking for an address.

<!-- prettier-ignore-start -->
```html
<fieldset>
  <legend>Select your favourite <i>Star Trek</i> captain</legend>
  <input type="radio" name="captain" id="kirk"> <label for="kirk">James T. Kirk</label>
  <input type="radio" name="captain" id="picard"> <label for="picard">Jean Luc Picard</label>
</fieldset>
```
<!-- prettier-ignore-end -->

Avoid nesting multiple `fieldset` elements, as screen readers can struggle to announce these correctly.
