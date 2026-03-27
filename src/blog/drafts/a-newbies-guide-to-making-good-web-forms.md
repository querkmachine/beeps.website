---
title: infodump, A newbie's guide to designing and building good web forms
tags: [web development, design]
cssComponents:
  - code
---

## Technical implementation

### Input, label, ID

Something that should be obvious to seasoned frontend developers, but this is a newbie's guide...

This is a much more technical point than the others, but it's shocking how often [when doing accessibility audits]({{ '/accessibility-for-furries/' | url }}) that I find form inputs that don't have labels, or have labels that aren't programmatically associated to the input.

Every `<input>`, `<textarea>` and `<select>` element in a form _needs_ an associated text label, and 99% of the time that's going to be via an `id` attribute and a `<label>` element.

If your basic text input doesn't look something like this, there's probably something wrong with it.

```html
<label for="display-name">What name should we print on your badge?</label>
<input type="text" id="display-name" />
```

This includes radio buttons and checkboxes. Each of them should have their own, individual `<label>` elements.

```html
<fieldset>
  <legend></legend>
  <input type="checkbox" id="" /> <label for=""></label>
  <input type="checkbox" id="" /> <label for=""></label>
  <input type="checkbox" id="" /> <label for=""></label>
</fieldset>
```

Hints and error messages should also have `id` attributes and be associated with inputs using `aria-describedby`.

```html

```

### Use the right input type for the answer

HTML comes with a variety of input elements and types. It also comes with a bunch of [`autocomplete` options for autofill functionality](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/autocomplete), `inputmode` hints for virtual keyboards, and you can further utilise visual cues to hint about what kind of answer a user should give.

Asking for an email address? Use the `email` type.

Asking for user's first name? Use the `given-name` autocomplete hint.

Asking for a payment card's security code? Use the `numberic` input mode, `cc-csc` autocomplete hint, and style the input fit 3 or 4 characters.

Using these things together allows credential managers to fill things out automatically, mobile devices to display context-specific keyboards, and users to intuit what kind of information they need to provide based on the amount of space provided. Unsurprisingly, that makes filling out forms faster!

### Don't limit the length of inputs (on the client side)

### Avoid validating values when the user is still providing them

A lot of forms frameworks will provide the ability to validate what a user is typing into a field, either whilst typing or after they move on to a different field.

Yeah, don't do that.

When users fill out a paper form they do so in two phases: providing and reviewing. First, they will fill out every field. Then they will check to make sure that they've filled out everything they need to and that the information is correct. Only when confident of those two things will they hand over the form.

It works much the same way on web forms, with distinct providing and reviewing phases. Performing validation in the middle of the providing phase forces users to pivot into the reviewing phase and then back into the providing phase.

This validation can be visually distracting—as new information is appearing on the screen, potentially shifting the locations of other content—and audibly distracting—as validation messaging interrupts users of screen reader software (assuming it informs these users of an error in the first place).

Live validation can create a false sense of security. If there's no errors being shown then the information must be good, right? This assumption can actually lead to an increase in erroneous inputs.

Instead, online forms should perform validation at the point the user tries to submit the form. This keeps the providing and reviewing phases distinct and separate from one another, with the user only having to switch between them at defined points of the process.

{% character character='ash', variant='thinking' %}
You should generally be performing form validation on the server anyway, that's just good security practice. If you really want to do things on the client, you may want to utilise HTML's validation attributes and enhance them with a library like [Vanilla Validation](https://www.npmjs.com/package/@querkmachine/vanilla-validation) (plug, plug, shameless plug).
{% endcharacter %}
