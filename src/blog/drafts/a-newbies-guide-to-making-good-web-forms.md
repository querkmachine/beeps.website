---
title: A newbie's guide to designing and building good web forms
tags: [web development, design]
cssComponents:
  - character
  - code
---

Forms have existed since 1677, when the outlaw Jonathan Formsby decided to extort money by leaving blank spaces on a piece of parchment and coercing the landed gentry into writing illicit personal details into the spaces at blunderbuss-point.

In the 350 years hence, no one has created a better way of acquiring information from others, voluntarily or not.

An awful lot of the world wide web involves forms. Indeed, they're practically the only means of explicitly acquiring information from a user that isn't duplicitously tracking their online behaviour so you can extort money from them (a practice more commonly known as 'digital marketing').

But a lot of online forms are also kind of... bad. They so often seek to reproduce paper forms, where materials is money and you need to cram as many fields onto a page as possible. The web is _not_ paper! We can do things so much better here.

{% character character='ash', variant='paw' %}
I'm calling these guidelines in my head, because there's inevitably going to be situations where one or more of my points isn't going to stand up as a universal truth. Still, I think these are solid enough for the vast majority of form design situations.

I'm also going to shout out [Adam Silver](https://adamsilver.io/) here—and his book _[Form Design Patterns](https://formdesignpatterns.com/)_—who I consider to basically be the foremost authority on this kind of thing.
{% endcharacter %}

## Keep it simple

The absolute first principle of form design is to remember is that **nobody wants to be filling out a form**. A form is a barrier that's preventing people from reaching the information they're trying to get or the outcome they're trying to achieve.

It may be a necessary evil, but it's still an evil. Forms are therefore the ideal place to trim as much cruft as you possibly can.

If you don't need a piece of information, don't ask for it. If you don't need it right now, ask for it later in the user journey or as part of a supplementary flow seperate from collecting the things you need to know _immediately_.

In the case of time-sensitive forms (say for example, an event registration system), you could provide users the ability to create an account and prefill information ahead of time, with the actual 'registration' only requiring them to log in and select the quantity-limited options like tickets and addons.

## Ask questions

Imagine that you're at a bank, local government office, or doing some other kind of dreary in-person task. You walk up to the reception desk and without even looking up at you, the person behind the desk just says 'Name.'

That's a little rude, isn't it? And what do they even mean? Your first name or full name? The name you go by, if that's different? The name this organisation might have on their records? The name on your identity documents, or your name at birth? Do they even want your name, or do they need the name of someone you're acting on behalf of?

If the same person asked 'What's your full name, as it appears on your licence?' it would both be more pleasant and more immediately understandable as to what information they need from you.

This style of questioning also helps to avoid jargon. 'What is your date of birth?' is more readily understandable than 'DOB'. Likewise 'What is your postal address?' more understandable than the frankly awful 'Address line 1'/'Address line 2' combo. Humans don't talk like that to one another, so why should an interface talk to a human like that?

## Accept answers

Questions, asked specifically enough like the name example above, can only have a single answer. That's easy enough. There are others, however, where no amount of specificity will guarantee the same result.

'What is your date of birth?' Well, these are all valid answers:

- 11/08/1991
- 11/8/91
- 1991-08-11
- 11.08.1991
- 8/11/91 (confusing!)
- 11th August 1991
- August 11, 1991
- 11 Aug '91
- Sunday, 11 August 1991

You could try and design around the problem, such as adding hint text specifying 'DD/MM/YYYY' format or similar, but that doesn't mean that someone has answered incorrectly just because they wrote it as '22 9 1991' instead.

As much as possible, be flexible with what formats users can use. If an answer is 'good enough' to be unambiguously understood, then accept it. Doing so reduces the likeliness that a user encounters an unnecessary validation error, lowering those barriers I mentioned earlier.

## Use the right input type for the answer

HTML comes with a variety of input elements and types. It also comes with a bunch of [`autocomplete` options for autofill functionality](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/autocomplete), `inputmode` hints for virtual keyboards, and you can further utilise visual cues to hint about what kind of answer a user should give.

Asking for an email address? Use the `email` type.

Asking for user's first name? Use the `given-name` autocomplete hint.

Asking for a payment card's security code? Use the `numberic` input mode, `cc-csc` autocomplete hint, and style the input fit 3 or 4 characters.

Using these things together allows credential managers to fill things out automatically, mobile devices to display context-specific keyboards, and users to intuit what kind of information they need to provide based on the amount of space provided. Unsurprisingly, that makes filling out forms faster!

## Avoid validating values when the user is still providing them

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

## Required or optional?

For the love of god, don't do the whole 'required fields are marked with a <abbr title="asterisk">\*</abbr>' thing. That entire practice is a relic of paper forms, where space is limited by physical dimensions and questions are unable to be reactive to previously given inputs.

On the web nearly every question in a form should be required, as can be determined by previously provided answers, and if it's not required, you have virtually unlimited space to include the word 'optional'.

The asterisk approach adds an extra, utterly unnecessary, step to a user understanding your form. Don't do it.

## Replay everything for review and amendment

If a form is quite long, you probably

## Input, label, ID

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
