---
tag: optgroup
name: Option Group
category: Forms
spec: https://html.spec.whatwg.org/multipage/form-elements.html#the-optgroup-element
---

Creates a group of [`option`s](#option) within a [`select`](#select) element. A name can be given to the group using the `label` attribute.

<!-- prettier-ignore-start -->
```html
<label for="probes">Select a space probe</label>
<select id="probes">
  <optgroup label="Jovian">
    <option value="galileo">Galileo</option>
    <option value="voyager1">Voyager I</option>
    <option value="voyager2">Voyager II</option>
  </optgroup>
  <optgroup label="Saturnian">
    <option value="cassini">Cassini</option>
  </optgroup>
  <optgroup label="Plutonian">
    <option value="new-horizons">New Horizons</option>
  </optgroup>
</select>
```
<!-- prettier-ignore-end -->
