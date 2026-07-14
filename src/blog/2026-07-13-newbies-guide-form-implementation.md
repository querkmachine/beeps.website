---
title: "A newbie's guide to designing good web forms: the technical bits"
tags: [web development, design]
date: 2026-07-13
cssComponents:
  - character
  - code
interactions:
  host: social.beeps.gay
  username: beeps
  id: "116913668563079749"
---

The somewhat belated third (and probably final part) in my mini series about web form design.

See [part one, which focused on the kinds of questions you ask]({{ '/blog/2026-03-17-newbies-guide-to-forms-structure/' | url }}) and [part two, about visual design]({{ '/blog/2026-03-30-newbies-guide-form-design/' | url }}) if you haven't already.

This post is going to cover **technical implementation details** from the frontend perspective.

## Inputs, labels, IDs

Every single one of your `<input>`, `<select>` and `<textarea>` elements should have a `<label>` element associated with it. _Always._

{% character character="ash", variant="thinking" %}
Well... actually there are a lot of exceptions where you don't need to include a label, but if you don't already know what those exceptions are, you should probably be using `<label>`s.
{% endcharacter %}

This is a one-to-one relationship. One label to one input. _Always._

{% character character="ash", variant="tongue" %}
No exceptions. That one is actually _always_.
{% endcharacter %}

The most flexible way of associating labels to elements is by using `for` and `id` attributes. `for` goes on the `<label>`, `id` on the input.

```html
<label for="your-cool-name">What's your rad-as-hell name?</label>
<input type="text" id="your-cool-name" />
```

The same holds true for radio buttons and checkboxes. Each of them should have their own, individual `<label>` elements.

```html
<fieldset>
  <legend>What's your favourite colour?</legend>
  <input type="radio" name="colour" id="colour-red" />
  <label for="colour-red">Red</label>
  <input type="radio" name="colour" id="colour-blue" />
  <label for="colour-blue">Blue</label>
  <input type="radio" name="colour" id="colour-yellow" />
  <label for="colour-yellow">Yellow</label>
</fieldset>
```

Using labels ensures that inputs always have an explanation of what the input is for programmatically associated with it.

That association, plus it being a separate element, lets you play around with layout more, maybe do something like a grid with labels on the left and inputs on the right, or insert other helpful text between the two of them.

Wait, that's a good idea!

## Hints and error messages

Other text that relates to the input, but which isn't the label, should also be programmatically associated with the input.

The approach to this is similar to what we do with labels, but instead we put our IDs in an `aria-describedby` attribute on the input.

```html
<label for="fave-trek">What's your favourite <i>Star Trek</i> series?</label>
<div id="fave-trek-hint">New or old, I don't judge.</div>
<div id="fave-trek-error">Don't be a smartarse &gt;:(</div>
<input
  type="text"
  id="fave-trek"
  aria-describedby="fave-trek-hint fave-trek-error"
  value="Star Wars"
/>
```

On GOV.UK, we place both hints and error messages between the `<label>` and input, rather than following the trend of placing them beneath the input (yet another quirk popularised by Google's Material Design and which has spread _too far_).

This is so that there's a logical reading order to the information:

1. the label – the question being asked
2. the hint – further information about how to answer the question
3. the error – context about why the answer given isn't suitable
4. the input – an opportunity to fix the answer

This benefits users of assistive technology who may be navigating through the page sequentially and would otherwise have to reverse direction and go back on themselves in order to fix errors.

## Choose the right input (and input aids) for the job

HTML comes with a variety of input elements and types, each one coming with its own in-built capabilities and soft validation rules.

Inputs can have their functionality 'extended' with the help of some optional attributes.

The `inputmode` attribute lets you specify the most appropriate keyboard for devices with virtual keyboards, making it clearer what kind of answer you're expecting and faster for the user to provide it.

The `autocomplete` attribute provides a veritable smörgåsbord of guidance for browser autofill and password management software.

Creating the bestest, most optimal input can often be a case of using input type, `inputmode` and `autocomplete` in combination.

Asking for an email address? Use the `email` input type.

Asking for the user's first name? Use the `text` input type with the `given-name` autocomplete hint.

Asking for a payment card's security code? Use the `text` input type, `numeric` input mode, `cc-csc` autocomplete hint, and [style the input to fit 3 or 4 characters]({{ '/blog/2026-03-30-newbies-guide-form-design/' | url }}#size-inputs-according-to-their-expected-answers).

Using these things together allows credential managers to fill things out automatically, mobile devices to display context-specific keyboards, and users to intuit what kind of information they need to provide based on the amount of space provided. Unsurprisingly, that makes filling out forms faster!

The list of possible options for `autocomplete` and `inputmode` are extensive, so I'm gonna be cheap and just tell you to look at MDN's documentation on [autocompletion](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/autocomplete) and [input modes](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/inputmode).

## Selects vs. radio buttons. Fight!

When showing a list of options a user can pick from it can be tempting to reach for `<select>`. It's compact and can fit a bunch of options, why wouldn't you use it?

In short, because generally, it performs quite poorly with less tech-literate users. There aren't a lot of form inputs where clicking on it pops open a huge, scrolling list of text, and users can struggle to navigate that list comfortably or effectively.

Still, it has its uses, and the introduction of [customisable select elements](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Customizable_select) mitigates some of their downsides (whilst also introducing exciting new issues).

Generally, my advice is to use `<input type="radio">` if:

- the options have long names
- the options have to be categorised into groups
- a user is likely to want to 'browse' the list to find the appropriate option
- you want to provide hint text with each option
- you want to style options in a unique way
- you want options to be searchable using the browser's find-in-page tool

Use `<select>` if:

- you are truly constrained on space
- a user is likely to know the answer to the question without needing to browse
- it's possible to list the options in a manner that makes it easy to find the correct option (e.g. alphabetically using known terms)

The TL;DR being that you probably want to use `<input type="radio">` most of the time.

## Don't limit the length of inputs (on the client side)

A simple one, perhaps. Text inputs come with a `maxlength` attribute that allows you to limit how many characters a user can type into it. Once that limit is hit, it stops accepting any more input. Sounds like a handy piece of soft validation, right?

Yeah nah, don't use it. It sucks.

The way it works isn't great for users of basically any stripe, accessibility needs or not.

A user copying and pasting from elsewhere won't get told if the end of what they pasted gets cut off.

A screen reader user typing into the box won't get told that their input is no longer being accepted.

A voice control user or someone using other speech-to-text transcription tools may not notice that they've been cut off mid-sentence.

It's universally a better experience to do this kind of validation when the form is submitted, not when the user is still providing their answer— OH DAMN WAIT...

## Avoid validating values when the user is still providing them

A lot of forms frameworks will provide the ability to validate what a user is typing into a field, either whilst typing or after they move on to a different field.

Yeah, don't do that.

When users fill out a paper form they do so in two phases: providing and reviewing. First, they will fill out every field. Then they will check to make sure that they've filled out everything they need to and that the information is correct. Only when confident of those two things will they hand over the form.

It works much the same way on web forms, with distinct providing and reviewing phases. Performing validation in the middle of the providing phase forces users to pivot into the reviewing phase and then back into the providing phase.

This validation can be visually distracting—as new information is appearing on the screen, potentially shifting the locations of other content—and audibly distracting—as validation messaging interrupts users of screen reader software (assuming it informs these users of an error in the first place).

Live validation can create a false sense of security. If there are no errors being shown then the information must be good, right? This assumption can actually lead to an increase in erroneous inputs.

Instead, online forms should **perform validation at the point the user tries to submit the form**. This keeps the providing and reviewing phases distinct and separate from one another, with the user only having to switch between them at defined points of the process.

{% character character='ash', variant='thinking' %}
You should generally be performing form validation on the server anyway, that's just good security practice. If you really want to do things on the client, you may want to utilise HTML's validation attributes and enhance them with a library like [Vanilla Validation](https://www.npmjs.com/package/@querkmachine/vanilla-validation) (plug, plug, shameless plug).
{% endcharacter %}

---

And that's all I've got to say on designing and developing forms, or all I've remembered whilst writing these blog posts, anyway.

I might do a fourth entry with any leftover scraps or answering any questions people have. Ask me them on [the fediverse](https://social.beeps.gay/@beeps) or on [Bluesky](https://bsky.app/profile/beeps.gay) and I'll answer them there or in a blog post (or both!)
