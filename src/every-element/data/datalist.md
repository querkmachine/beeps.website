---
tag: datalist
name: Data List
category: Forms
spec: https://html.spec.whatwg.org/multipage/form-elements.html#the-datalist-element
---

Container for a list of [`option`](#option) elements, representing suggested data for use with other form inputs. Currently, only certain `type`s of [`input`](#input) support datalist.

Datalists must have an `id` attribute. Form inputs can then reference the datalist using the `list` attribute.

<!-- prettier-ignore-start -->
```html
<input list="neptunian-moons">
<datalist id="neptunian-moons">
  <option value="Despina">
  <option value="Galatea">
  <option value="Halimede">
  <option value="Hippocamp">
  <option value="Laomedeia">
  <option value="Larissa">
  <option value="Naiad">
  <option value="Nereid">
  <option value="Neso">
  <option value="Proteus">
  <option value="Psamathe">
  <option value="Sao">
  <option value="Thalassa">
  <option value="Triton">
</datalist>
```
<!-- prettier-ignore-end -->
