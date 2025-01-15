---
tag: button
name: Button
category: Forms
spec: https://html.spec.whatwg.org/multipage/form-elements.html#the-button-element
---

An interactive element that, once activated, performs an action.

<!-- prettier-ignore-start -->
```html
<button type="submit">Launch</button>
<button type="reset">Abort</button>
```
<!-- prettier-ignore-end -->

- For buttons with a `type` of `submit`, the default behaviour is to submit the [`form`](#form) the button is contained within. If there is no form element, this does nothing.
- For buttons with a `type` of `reset`, the default behaviour is to revert the `form` to the state it was when the page was originally loaded.
- For buttons with a `type` of `button`, there is no default behaviour. Functionality must be added using JavaScript or other HTML attributes.

If not specified, a button's default type is `submit`.
