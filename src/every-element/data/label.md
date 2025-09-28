---
tag: label
name: Label
category: Forms
spec: https://html.spec.whatwg.org/multipage/forms.html#the-label-element
---

Represents the label for a form control, such as [`input`](#input), [`select`](#select), or [`textarea`](#textarea).

`label` elements are typically associated to the form control using a `for` attribute that matches the `id` of the associated element. The control may also be wrapped in the `label` element, though this tends to limit styling options.

A `label` should only be associated to a single form control, and every control should have a label.

<!-- prettier-ignore-start -->
```html
<label for="name-suggestion">Suggest a name for the star</label>
<input type="text" id="name-suggestion">
```
<!-- prettier-ignore-end -->

To provide a 'label' for a group of inputs, such as checkboxes or radio buttons, use a [`fieldset`](#fieldset) and [`legend`](#legend).
