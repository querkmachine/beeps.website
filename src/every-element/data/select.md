---
tag: select
name: Select
category: Forms
spec: https://html.spec.whatwg.org/multipage/form-elements.html#the-select-element
---

Allows a user to select an [`option`](#option) from a list. By default, a user can only select a single option and one option must always be selected. These options may be grouped into [`optgroup`s](#optgroup).

<!-- prettier-ignore-start -->
```html
<label for="planets">Your one absolutele most favourite planet</label>
<select id="planets">
  <option>Mercury</option>
  <option>Venus</option>
  <option>Earth</option>
  <option>Mars</option>
  <option>Jupiter</option>
  <option>Saturn</option>
  <option>Uranus</option>
  <option>Neptune</option>
</select>
```
<!-- prettier-ignore-end -->

The appearance and functionality of `select` elements differs between browsers and operating systems, but is most commonly displayed as a list below the select or overlaid on the page.

Selects have many usability and accessibility issues, especially if the `multiple` attribute is used. It's better to treat a select as an 'input of last resort' and try to gather input using an alternative method, such as radio [`input`s](#input) instead.
