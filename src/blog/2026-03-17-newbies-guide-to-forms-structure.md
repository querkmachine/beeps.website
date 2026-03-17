---
title: A newbie's guide to designing good web forms
tags: [web development, design]
date: 2026-03-17
cssComponents:
  - character
interactions:
  host: social.beeps.gay
  username: beeps
  id: "116246116569207163"
---

Forms have existed since 1677, when the outlaw Jonathan Formsby decided to extort money by leaving blank spaces on a piece of parchment and coercing the landed gentry into writing illicit personal details into the spaces at blunderbuss-point.

In the 350 years hence, no one has created a better way of acquiring information from others, voluntarily or not.

An awful lot of the world wide web involves forms. Indeed, they're practically the only means of explicitly acquiring information from a user that isn't duplicitously tracking their online behaviour so you can extort money from them (a practice more commonly known as 'digital marketing').

But a lot of online forms are also kind of... bad. They so often seek to reproduce paper forms, where materials is money and you need to cram as many fields onto a page as possible. The web is _not_ paper! We can make things so much better here!

So I'm gonna drop some of the wisdom I've gained in designing forms across my career, be it for marketing, for membership organisations, for government, and for events.

This is (hopefully) going to be a series of blog posts covering the design and development of good online forms, starting with **what you ask for in the first place**.

{% character character='ash', variant='paw' %}
There's inevitably going to be situations where one or more of my points isn't going to stand up as a universal truth. Still, I think these are solid enough for the vast majority of form design situations.

I'm also going to shout out [Adam Silver](https://adamsilver.io/) here—and his book _[Form Design Patterns](https://formdesignpatterns.com/)_—who I consider to basically be the foremost authority on this kind of thing.
{% endcharacter %}

## Strip away the cruft

My absolute first principle of form design is to remember is that **nobody wants to be filling out a form**. A form is a barrier that prevents people from reaching the information they're trying to get or the outcome they're trying to achieve.

It may be a necessary evil, but it's still an evil. Forms are therefore the ideal place to trim as much cruft as you possibly can.

If you don't need a piece of information, don't ask for it. If you don't need it right now, ask for it later in the user journey or as part of a supplementary flow separate from collecting the things you need to know _immediately_.

In the case of time-sensitive forms (say for example, a popular concert with limited availability), you could provide users with the ability to create an account and fill out their personal information ahead of time, with the actual ticket sale only requiring them to log in and confirm the quantity-limited tickets and addons they want.

## Ask questions

Imagine that you're at an office to renew a passport for a relative. You walk up to the reception desk and, without letting you say anything or even looking up at you, the person behind the desk just says 'Name.'

That's a little rude, isn't it? And what do they even mean? Your first name or full name? The name the office might have on their records? The name on your passport? The name you go by, if that's different? Your name at birth, if that's different too? Do they even want _your_ name, or do they actually want the name of the person whose passport you're renewing?

If the same person asked 'What's the name on the passport to be renewed?', it would both be more pleasant and easier to understand what information they need from you. Humans don't talk like that to one another, so why should an interface talk like that to a human?

This conversational style of asking questions reduces cognitive burden and helps to avoid jargon. 'What is your date of birth?' is a more readily understandable question than asking for a 'DOB', for example, as is asking 'What is the card's security code?' instead of just asking for a 'CVV'.

## Accept answers

Questions asked specifically enough will often only have a single answer. There are some questions, however, where no amount of specificity will guarantee you the exact same response.

If a _person_ asks you 'What is your date of birth?', these are all valid answers:

- 11/08/1991
- 11/8/91
- 1991-08-11
- 11.08.1991
- 8/11/91 (confusing!)
- 11th August 1991
- August 11, 1991
- 11 Aug '91
- Sunday, 11 August 1991

If the answer is correct, why would you return an error saying it's wrong? Why shouldn't a digital form permit a similar level of flexibility?

You could try to design around the problem, such as adding hint text specifying 'DD/MM/YYYY' format or similar, but that doesn't mean that someone has answered incorrectly just because they wrote it as '11 8 1991' instead.

On GOV.UK, even though [the date input component](https://design-system.service.gov.uk/components/date-input/) is built to encourage a 'DD MM YYYY' formatted answer, we encourage developers to accept a variety of variations for that format, allowing the names and abbreviations of months and not requiring leading zeroes.

As much as possible, be flexible with what format an answer can be given in. If an answer is 'good enough' to be unambiguously understood, then accept it. Doing so reduces the likelihood that a user encounters an unnecessary validation error, lowering a barriers to completion.

## Mark what's optional, not required

Don't do the whole 'required fields are marked with a <abbr title="asterisk">\*</abbr>' thing. That entire practice is a relic of paper forms, where space is limited by physical dimensions and the questions are unable to adapt to known information.

On the web nearly every question in a form should be required, as a natural consequence of stripping away cruft.

If you're unsure, you can often determine what questions need to be asked based on previously provided answers or a simple 'gate' question. You don't need to present a user with a whole address form of optional fields if you ask 'Do you want the thing posted to you?' first!

If something is truly not required, you have virtually unlimited space to include the word 'optional'.

The asterisk approach adds an extra, utterly unnecessary, step to a user understanding a form and what it wants from them. Don't do it.

---

That's it for this one. If you have any questions, you're welcome to [drop me a line]({{ '/contact/' | url }}) and I might answer them in a future post.
