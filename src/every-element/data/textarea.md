---
tag: textarea
name: Textarea
category: Forms
spec: https://html.spec.whatwg.org/multipage/form-elements.html#the-textarea-element
---

An interactive control that can accept multiple lines of input from a user and send it to a server.

The `cols` and `rows` attributes may be used to define the textarea's size, but the element's dimensions are best defined in CSS these days.

<!-- prettier-ignore-start -->
```html
<label for="application">Why do you want to be an astronaut?</label>
<textarea id="application" name="reason" rows="10" cols="120"></textarea>
```
<!-- prettier-ignore-end -->

Compare to the [`input`](#input) element's `text` type, which only accept a single line of input.
