---
title: A newbie's guide to designing and building good web forms
tags: [web development, design]
cssComponents:
  - character
---

Forms have existed since 1677, when the outlaw Jonathan Formsby decided to extort money by leaving blank spaces on a piece of parchment and coercing the landed gentry into writing illicit personal details into the spaces at blunderbuss-point.

In the 350 years hence, no one has created a better way of acquiring information from others, voluntarily or not.

An awful lot of the world wide web involves forms. Indeed, they're practically the only means of explicitly acquiring information from a user that isn't duplicitously tracking their online behaviour so you can extort money from them (a practice more commonly known as "digital marketing").

But a lot of online forms are also kind of... bad. They so often seek to reproduce paper forms, where materials is money and you need to cram as many fields onto a page as possible. The web is _not_ paper! We can do things so much better here.

So, as I'm about to start volunteering on [a rather high volume, form-heavy project](https://social.beeps.gay/@beeps/115826205534620761), I feel like I should share some of the wisdom I've gained in building forms that are actually nice.

{% character character="ash", variant="paw" %}
I'm calling these guidelines in my head, because there's inevitably going to be situations where one or more of my points isn't going to stand up as a universal truth. Still, I think these are solid enough for the vast majority of form design situations.

I'm also going to shout out [Adam Silver](https://adamsilver.io/) here—and his book _[Form Design Patterns](https://formdesignpatterns.com/)_—who I consider to basically be the foremost authority on this kind of thing.
{% endcharacter %}

## Keep it stupid simple

The absolute first principle of form design is to know that **nobody wants to be filling out a form**. A form is a barrier that's preventing them from reaching the information they're trying to get or the outcome they're trying to achieve.

It may be a necessary evil, but it's still an evil. Forms are the ideal place to trim as much cruft as you possibly can.

If you don't need a piece of information, don't ask for it. If you don't need it right now, ask for it later in the user journey or as part of a supplementary flow seperate from collecting the things you need to know _immediately_.

In the case of time-sensitive forms (say for example, an event registration system), you could provide users the ability to create an account and prefill information ahead of time, with the actual 'registration' only requiring them to log in and select the quantity-limited options like tickets and addons.

## Ask questions

Imagine that you're at a bank, local government office, or doing some other kind of dreary in-person task. You walk up to the reception desk and without even looking up at you, the person behind the desk just says "Name."

That's a little rude, isn't it? And what do they even mean? Your first name or full name? The name you go by, if that's different? The name this organisation might have on their records? The name on your identity documents, or your name at birth? Do they even want your name, or do they need the name of someone you're acting on behalf of?

If the same person asked "What's your full name, as it appears on your licence?" it would both be more pleasant and more immediately understandable as to what information they need from you.

This style of questioning also helps to avoid jargon. "What is your date of birth?" is more readily understandable than "DOB". Likewise "What is your postal address?" more understandable than the frankly awful "Address line 1"/"Address line 2" combo. Humans don't talk like that to one another, so why should an interface talk to a human like that?

## Accept answers

Questions, asked specifically enough like the name example above, can only have a single answer. That's easy enough. There are others, however, where no amount of specificity will guarantee the same result.

"What is your date of birth?" Well, these are all valid answers:

- 11/08/1991
- 11/8/91
- 1991-08-11
- 11.08.1991
- 8/11/91 (confusing!)
- 11th August 1991
- August 11, 1991
- 11 Aug '91
- Sunday, 11 August 1991

You could try and design around the problem, such as adding hint text specifying "DD/MM/YYYY" format or similar, but that doesn't mean that someone has answered incorrectly just because they wrote it as "22 9 1991" instead.

As much as possible, be flexible with what formats users can use. This lowers the barriers

## Use the right input type for the answer

## Avoid validating values when the user is still providing them

## Required/optional

## Replay everything for review and amendment

## Input, label, ID
