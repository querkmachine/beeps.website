---
tag: meter
name: Meter
category: Forms
spec: https://html.spec.whatwg.org/multipage/form-elements.html#the-meter-element
---

Provides a read-only visual representation of a value within a numerical range.

The lower and upper bounds are provided using the `min` and `max` attributes, respectively. The current value is provided using the `value` attribute.

Any text inside of the `meter` element is used as a fallback, for browsers that cannot display the element. As it's technically a form control, `meter` should have an accompanying [`label`](#label) element.

<!-- prettier-ignore-start -->
```html
<label for="fuel">Liquid oxygen remaining</label>
<meter min="0" max="553358" value="449658">81.26% remaining</meter>
```
<!-- prettier-ignore-end -->

Optional `low` and `high` attributes can be specified to change the default appearance of the meter after certain points, such as appearing in red when the value is less than `low` and green when it's more than `high`.

An optional `optimal` attribute may also be set to indicate the ideal range. If the value of `optimal` is between `min` and `low`, it means that lower values are preferred. If it's between `high` and `max`, higher values are preferred.

Meter is intended for showing a relatively static representation of a value. To show a visual representation of progression, such as though a process or file upload, use [`progress`](#progress). To accept user input using a visual range, use [`input`](#input) with the `range` type.
