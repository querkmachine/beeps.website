---
title: "Frontend Forum #1: The basics and getting started"
date: 2024-04-29
tags: [web development, frontend forum]
metadata:
  description: My thoughts on how to get started learning web development.
interactions:
  host: chitter.xyz
  username: batbeeps
  id: "112356621485493294"
---

Frontend website development has been my full-time job for about a decade now, and I've been doing it as a hobby for [over two decades]({{ '/blog/2023-07-25-20-years/' | url }}).

In all that time, however, I've very rarely _actually_ written about doing frontend development. That's not for lack of wanting, but the frontend blogging space is filled with a lot of big names and authoritative voices. Learning websites and tutorials are widespread and extremely easy to find.

Generally, it's hard to think of something to say that hasn't already been said faster and better by somebody else.

But the times they are a-changin'. Many of my generation have turned sour to using algorithmically-dictated social media, and a small renaissance of personal websites has sprung up in the aftermath.

Lots of people with moderate, little, or zero prior experience of frontend website development are now taking the time to develop website frontends. I can help with that, right?

So I've collected up a bunch of questions, and I'm gonna try and answer them in a series of hopefully quite short, hopefully quite informative blog posts I've haphazardly titled **Frontend Forum**.

First up, [Luna the Deer on Cohost](https://cohost.org/BappyDeerHooves) asked:

> a general "where to start" would be helpful, i think

Okay, this one might not be **that** short...

---

## What even is frontend development?

Frontend development is the process of building the visual part of a website. The part that users actually see, use and navigate around. The user interface. The 'front end', if you will.

This is distinct from building the functionality of a website, such as what happens when a form is submitted, or how you save and load information from databases, which is typically referred to as 'backend development'.

Frontend is also distinct from the physical infrastructure of a website (managing servers and networking infrastructure), as well as—to varying degrees based on who you ask—the tooling around a website, such as automated testing and deployment pipelines.

{% character character="ash", variant="alarmed" %}
I typically group both the pipeline stuff and server management stuff under the nebulous heading of devops (short for 'developer operations'), but I don't think that's wholly correct.
{% endcharacter %}

Frontend development is rooted in three coding languages: HTML, CSS and JavaScript. These are the three languages that web browsers understand. Every website you have ever used in your entire life was built using these three languages.

I'm not going to cover how to actually use them in this post. There are links near the bottom for learning the actual syntaxes of these languages.

Instead, I'm going to discuss the concepts that, I feel, are often brushed over by tutorials and courses, despite still being rather fundamental to understanding the languages.

## What is HTML?

HTML stands for Hypertext Markup Language. It's a markup language for hypertext.

{% character character="ash", variant="happy" %}
'Hypertext' is like the original name for websites, because back then they were basically just text documents that could be connected together by 'hyperlinks'. We don't really use these terms at all in the 21st century, so you don't need to remember this.
{% endcharacter %}

If you've ever sent a message on Discord, edited a page on Wikipedia, or are old enough to have used a forum, then you've used a markup language before; they use [Markdown](https://en.wikipedia.org/wiki/Markdown), [wikitext](https://en.wikipedia.org/wiki/Help:Wikitext), and (in many cases) [BBCode](https://en.wikipedia.org/wiki/BBCode) respectively.

In those cases, you'll probably have used markup to change the visual appearance of your content and maybe insert a link or an image.

HTML is a little bit different as it's a **semantic** markup language—its primary purpose is to describe the page's content, _not_ to alter the visual appearance.

All but two of HTML's 100+ tags have a specific meaning, but these meanings are not always intuitive.

{% character character="ash", variant="thinking" %}
This is only really true of versions of HTML developed since 2008. Earlier versions of HTML did include tags that only existed for altering visual appearance, but these have all been removed from the language since.
{% endcharacter %}

For example, `<em>Italic</em>` and `<i>Italic</i>` both appear identically italic by default, the second tag's name may even make you think it stands for italic, but it doesn't. Not really.

`<em>` represents stress emphasis. If you were to read the text out loud, for example, what words would you say in a different tone of voice to emphasise them to a listener?

```html
Can you <em>please</em> remember stress emphasis?
```

`<i>` represents content that you would style differently when written, but not stress audibly if said aloud. This is a convention most commonly used for the names of creative works like books and albums.

```html
Getting people to know the difference between these things is my white whale,
like in <i>Moby Dick</i>.
```

### Why does this matter?

Does this feel a little contrived? Yes.

Does it matter? Also yes.

HTML is the most fundamental part of any webpage. Hell, it's literally the only part you _need_ to have. You could build a sprawling website using nothing but HTML if you wanted, but it's impossible to build a single page using none at all.

Writing semantic HTML allows browsers to properly render your content, search engines to properly understand its meaning, and accessibility software to properly describe it to someone who may not be able to read it using their own eyes.

Although it may feel daunting to hear about, the good news is that you'll only be using 10% of tags 90% of the time. Many tags are specific to very particular contexts or information types and are hardly ever needed otherwise.

## What is CSS?

HTML exists to describe the content of a webpage. CSS exists to describe the appearance of a webpage.

CSS stands for Cascading StyleSheets. The 'style' part should be obvious, I'll get to the 'cascading' bit in a moment.

Stylesheets are... comfortably more complex than HTML. There's [a running joke](https://bukk.it/css-dammit.gif) that many people find CSS difficult and unpredictable to work with.

Part of this is because the responsibilities that CSS carries have massively increased over the last 15 years. Whereas it once only did simple things like defining fonts and colours, it now includes a plethora of different layout engines, animation capabilities, and the ability to dynamically adapt to different screen sizes, browser settings and languages.

CSS is insanely powerful in experienced hands, but much like HTML, you don't need to learn it all at once, if ever. If all you want is to change some fonts and colours, it's still very simple to do only that.

The two most important concepts to know when starting out with CSS are the cascade (there it is!) and specificity.

### The cascade

Consider this HTML:

```html
<article>
  <h2>My lovely horse</h2>
  <p>Look at her beautiful mane.</p>

  <aside>
    <h2>My horse's hooves</h2>
    <p>They're kinda weird, like one giant finger.</p>
  </aside>

  <h2>My lovely kitty</h2>
  <p>Listen to him purr!</p>
</article>
```

The cascade is simple enough. In the case that there are conflicting style rules, the one that comes last wins—rules that come later 'cascade' over previous rules.

```css
h2 {
  font-family: "Comic Sans";
  color: blue;
}

h2 {
  color: red;
}
```

In this example, all three headings will appear in Comic Sans and all of them will be red. You can't have a heading that's blue and red at the same time, so only one rule can apply, and CSS favours the one that comes last.

Easy, right?

### Specificity

Specificity is a bit more complex. Specificity essentially allows us to override parts of the cascade by providing CSS with more specific selector.

```css
h2 {
  font-family: "Comic Sans";
  color: blue;
}

aside h2 {
  color: red;
}
```

All of our headings will still be in Comic Sans, but now the first and third headings will be blue, whilst the second heading will be red. By specifying `aside h2` (an `h2` inside of an `aside`), we've given it a more specific selector, so that wins over the plain `h2`.

This would happen even if `aside h2` came first in our code order. The more specific selector always wins.

{% character character="ash", variant="sleepy" %}
This is no longer necessarily true thanks to the recent introduction of a feature called Cascade Layers, but you really don't need to know about those right now.
{% endcharacter %}

Different types of selectors have different levels of specificity. I personally visualise this as being a four-digit counter that increments each digit as different types of selectors are used, with the highest number winning.

```css
/* HTML tag names add 1. */
h2 {
  /* = a specificity score of 0001 */
}
aside h2 {
  /* = 0002 */
}

/* Class names add 10. */
.big-heading {
  /* = 0010 */
}
.big-heading.uppercase {
  /* = 0020 */
}
h2.big-heading {
  /* = 0011 */
}

/* Attribute selectors and pseudo-classes also add 10. */
input[type="password"] {
  /* = 0011 */
}
input:focus {
  /* = also 0011 */
}

/* IDs add 100. */
#navigation {
  /* = 0100 */
}
nav#navigation.fancy-nav {
  /* = 0111 */
}

/* !important rules add 1000, but only for the rule it's applied to. */
.important-text {
  color: red !important; /* = 1010 */
  font-weight: bold; /* = still only 0010 */
}
```

Specificity can be a useful tool, but it can also bite you in the ass if left unchecked.

It's often a good idea to rely primarily on HTML tag names and class selectors, keeping your specificity 'flat', and to use IDs and `!important` minimally. Doing otherwise often leads to needing some complex and ultimately difficult-to-maintain CSS.

## What is JavaScript?

HTML exists to describe the content of a webpage. CSS exists to describe the appearance of a webpage. JavaScript completes the trio by describing the behaviour of a webpage.

JavaScript is a whole different kettle of fish. Compared to HTML and CSS, JavaScript is magnitudes more complex, and I don't particularly want to start going into it here.

{% character character="ash", variant="thinking" %}
Fun fact: Despite the name, JavaScript is pretty much unrelated to the programming language Java. Blame tech executives from the mid-90s for that confusion.
{% endcharacter %}

The good news is that you probably don't need JavaScript at all! It's entirely possible to build perfectly cromulent websites using no JavaScript whatsoever.

I pretty much always advise not learning JavaScript until after you've gotten comfortable with HTML and CSS.

## What about frameworks?

Many modern web development boot camps will quickly push you towards learning a JavaScript framework like React, Angular and Vue; using libraries like Tailwind and Bootstrap, or writing languages like TypeScript and Sass.

These courses are often aimed at getting people into the industry quickly, so they tend to push people into learning the tools that are in high demand and popular at the time, as that's most likely to secure those people an easy junior developer position.

You don't need them.

At the end of the day, _all_ of these things are just HTML, CSS and JavaScript with layers of abstraction added on top of them. Those tools will eventually fade from popularity, but HTML, CSS and JavaScript are _the_ languages of the web for now and the foreseeable future.

Learn the fundamentals first, learn them until you are absolutely comfortable with them, and then—only then—should you consider building more complex applications.

## Getting started

My main piece of advice is just to build stuff. Build yourself a personal website, throw together an about page or a custom link tree or whatever. Having something that **you** want to make is a much greater motivator than some random, impersonal school project. Just build _something_.

Create a text file. Save it with a filename ending in `.html`. Drag it into your web browser of choice. Go.

Learning to code is best done by writing actual, living, breathing code. It doesn't matter if it looks shit and it doesn't matter if it looks different in different browsers. [Sucking at something is the first step to being sorta good at something.](https://www.youtube.com/watch?v=Gu8YiTeU9XU) Sharing it with others is the first step to getting feedback on how to make it better.

Don't be ashamed for looking things up or asking for help. Everyone of every skill level does it.

Use your browser's developer tools, not just to inspect your own code, but to look at the code of other websites too. If you see something neat on another website, just right-click it and inspect it, dig into how it works, try to copy it and change it.

Exploit the fact that every single website on the entire internet is the same HTML and CSS you could be writing. It's everywhere, free to copy and free to learn from.

Keep iterating, improving and changing as you learn. Don't be afraid to tear things down and start over.

## Resources

As previously mentioned, I learned these languages a long time ago, principally through Just Doing It rather than using courses. Your mileage doing the same thing may vary.

This also means I'm not totally clued up on what the best resources for beginners might be in 2024, so I encourage you to shop around.

- If you'd prefer a more guided approach, the Odin Project has [a free course on foundational frontend development](https://www.theodinproject.com/paths/foundations/courses/foundations). Be aware that it includes some topics I don't think are _totally_ necessary for a beginner, like git version control.
- Using a dedicated code editor like [VSCode](https://code.visualstudio.com/) will usually make things easier and can help highlight issues for you.
- The Mozilla Developer Network (MDN) is probably the best resource on the entire web for learning about frontend web development topics, including guides and tutorials oriented at beginners.
  - [MDN's HTML guide](https://developer.mozilla.org/en-US/docs/Web/HTML)
  - [MDN's list of HTML elements and their semantic meanings](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)
  - [MDN's CSS guide](https://developer.mozilla.org/en-US/docs/Web/CSS)
  - [MDN's JavaScript guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [Codepen](https://codepen.io/) and [JSFiddle](https://jsfiddle.net/) are small online code editors and previewers that are useful for small experiments and for sharing snippets of code with others.
- [Neocities](https://neocities.org/) provides beginner-friendly hosting, with a particular emphasis on personal websites.
