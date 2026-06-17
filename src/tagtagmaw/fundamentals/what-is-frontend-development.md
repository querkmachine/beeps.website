---
title: What is frontend development?
metadata:
  description: What is frontend development? We just don't know.
cssComponents:
  - character
---

Website development is typically split into two major areas: the 'front' and the 'back'.

A **frontend** developer is mainly concerned with:

- The design and appearance of the website.
- Writing code in HTML, CSS and JavaScript for user interactions.
- Accessibility: how the website can be used by people with disabilities.
- Semantics: how the website is understood by browsers, search engines and assistive technology.

A **backend** developer is mainly concerned with:

- The functionality of the website.
- Writing code in a backend language, such as PHP, C#, Python, among many others.
- Data management: how information is stored, processed and retrieved.
- Security: how to ensure information isn't exposed or compromised.

The two areas require fairly different skillsets and can appeal to very different people based on the sensibilities involved. Someone who does both is a 'full stack' developer. (Though in my experience, anyone who claims to do full stack is rarely very good at both.)

{% character character="ash", variant="blushing" %}
Although I've done some of both before, personally I've always preferred the frontend. You get the instant gratification of being able to see your work come together, and it's a lot easier to point at it and go 'I made that!'
{% endcharacter %}

These distinctions are, in my opinion, somewhat antiquated. The line between them is very blurry nowadays, as they are other roles like design and devops (developer operations, things tangential to writing code that aren't writing code). Speaking of which...

## The front of the front, the back of the front

Traditionally, websites were built quite simply. Clicking a link on a website would take you to a new page, and the content of that page would remain mostly the same over time.

Today, web-based applications that do lots of things without reloading the page (aka, single-page applications or <abbr>SPA</abbr>s) are increasingly common.

Similarly, the build tooling for websites has become more complicated. Websites with no backend elements may still need to be compiled, and abstractions of CSS and JavaScript may need to be transformed to simpler versions before they can be used.

This has led to another splitting of terms, creating the 'front of the frontend' and the 'back of the frontend'.

The **front of the frontend** is mostly concerned with the same things as before: design, accessibility, semantics.

The **back of the frontend** blends more features of the backend developer and devops roles. Think writing code that processes and stores data, but doing so in JavaScript rather than using a traditional backend language, and writing build and testing pipelines to ensure everything's rendering hunky-dory.

In short, **frontend development is about building the parts of a website that users see and use**. It can involve doing design work. It can involve writing complex logic. It can involve writing gritty, boring test suites. There's a lot of variety to frontend!
