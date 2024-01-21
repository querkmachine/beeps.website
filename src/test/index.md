---
title: Markdown and Nunjucks shortcode examples
layout: generic.njk
metadata:
  noRobots: true
---

A page for testing markdown styles, plugins and custom shortcodes.

## Markdown

This is a paragraph. Nostrud incididunt mollit qui Lorem id ad deserunt duis sint ad amet sunt. Non veniam labore proident laboris dolor ut veniam enim. Proident excepteur nisi reprehenderit culpa nulla duis occaecat qui tempor. Exercitation excepteur consequat non sunt cillum eiusmod irure mollit quis. Dolor nostrud do eu nostrud ullamco duis aliqua. Nostrud incididunt ipsum tempor velit officia.

This is a sentence broken
over multiple lines.
(There should be line breaks, hopefully.)

### Typography replacements

- Apostrope: Ex'ample
- Double quotes: "Example"
- Single quotes: 'Example'
- Copyright symbol: (C) (c)
- Trademark symbol: (TM) (tm)
- Registered trademark symbol: (R) (r)
- Ellipsis: ...
- En dash: --
- Em dash ---
- Plus-minus: +-
- Remove excessive punctuation: ??????? !!!!!!! ,,

### Inline styles

**Bold**
_italic_
**_bold and italic_**
~~deleted~~
[link](#)
`inline code`
<hi@berly.kim>

### Lists

1. list item 1
2. list item 2
3. list item 3

- list item 1
- list item 2
- list item 3

### Blockquotes

> blockquote

> blockquote with
>
> multiple _paragraphs_

> > nested blockquote

### Horizontal rule

---

### Code blocks

```
<p class="example">code block with no language set</p>
```

```html
<p class="example">Syntax highlighted HTML code.</p>
```

```html
<header class="kimMasthead">
  <div class="kimWrapper kimMasthead_inner">
    <a class="kimMasthead_logo kimLink-plain" href="/">
      <span class="kim-!-sr">Back to home</span>
      <span aria-hidden="true">beeps</span>
    </a>
  </div>
</header>
```

### Table

| Planet  | Diameter (km) |      Population       |
| :------ | ------------: | :-------------------: |
| Mercury |         2,440 |           0           |
| Venus   |         6,052 |           0           |
| Earth   |         6,371 | Over 8 billion humans |
| Mars    |         3,390 |           0           |
| Jupiter |        69,911 |           0           |
| Saturn  |        58,232 |           0           |
| Uranus  |        25,362 |           0           |
| Neptune |        24,622 |           0           |

## Shortcodes

### Callout

{% callout %}
This is some text in a callout.

**Bold** _italics_ [link](#). Markdown!
{% endcallout %}

### Character - Ash

{% character character="ash", variant="alarmed" %}
Eeek! An alien!
{% endcharacter %}

{% character character="ash", variant="happy" %}
Oh wait, that's just me.
{% endcharacter %}

{% character character="ash", variant="love" %}
And I love being an alien critter!
{% endcharacter %}

{% character character="ash", variant="pensive" %}
Society may not be so much of a fan...
{% endcharacter %}

{% character character="ash", variant="sleepy" %}
...but they're a bunch of boring losers.
{% endcharacter %}

{% character character="ash", variant="thinking" %}
Maybe I should bite them all?
{% endcharacter %}

{% character character="ash", variant="tongue" %}
Hmmm, nah, I like being fairly unique.
{% endcharacter %}

### Character - Emy

{% character variant="alarmed" %}
Waoh, character callouts! These better work.

**Bold** _italics_ [link](#). Markdown!
{% endcharacter %}

{% character variant="angry" %}
I'll be super mad if they don't.
{% endcharacter %}

{% character variant="broken" %}
I couldn't stand them being broken.
{% endcharacter %}

{% character variant="dab" %}
Dab on the broken code.
{% endcharacter %}

{% character variant="gun" %}
Actually, I _really_ won't put up with them bring broken.
{% endcharacter %}

{% character variant="happy" %}
But it seems like they work!
{% endcharacter %}

{% character variant="innards" %}
They're not that complicated really. Maybe I'll write about how it works.
{% endcharacter %}

{% character variant="flying" %}
Wheeeeeeeeee!
{% endcharacter %}

{% character variant="love" %}
I love how these work!
{% endcharacter %}

{% character variant="point" %}
Look at that one working!
{% endcharacter %}

{% character variant="point-down" %}
And look at that one working!
{% endcharacter %}

{% character variant="point-up" %}
And that one working!
{% endcharacter %}

{% character variant="wave" %}
OK that's about it for now. Bye!
{% endcharacter %}

### Responsive image

{% responsiveImage "./src/images/emy-by-integration.png", "A warmly lit room. The sun is setting outside of the window. Emy, a white, green and black, anthropomorphic robot bat, sits at a workbench. One wing has been detached and is laying in parts on the bench, whilst she uses the other to repair the parts of the disassembled wing." %}

### Figure

{% figure %}
{% responsiveImage "./src/images/emy-by-integration.png", "A warmly lit room. The sun is setting outside of the window. Emy, a white, green and black, anthropomorphic robot bat, sits at a workbench. One wing has been detached and is laying in parts on the bench, whilst she uses the other to repair the parts of the disassembled wing." %}
{% endfigure %}

{% figure caption="A caption for this figure, waoh." %}
{% responsiveImage "./src/images/emy-by-integration.png", "A warmly lit room. The sun is setting outside of the window. Emy, a white, green and black, anthropomorphic robot bat, sits at a workbench. One wing has been detached and is laying in parts on the bench, whilst she uses the other to repair the parts of the disassembled wing." %}
{% endfigure %}

{% figure caption="Figure floated left.", float="left" %}
{% responsiveImage "./src/images/emy-by-integration.png", "A warmly lit room. The sun is setting outside of the window. Emy, a white, green and black, anthropomorphic robot bat, sits at a workbench. One wing has been detached and is laying in parts on the bench, whilst she uses the other to repair the parts of the disassembled wing." %}
{% endfigure %}

{% figure caption="Figure floated right.", float="right" %}
{% responsiveImage "./src/images/emy-by-integration.png", "A warmly lit room. The sun is setting outside of the window. Emy, a white, green and black, anthropomorphic robot bat, sits at a workbench. One wing has been detached and is laying in parts on the bench, whilst she uses the other to repair the parts of the disassembled wing." %}
{% endfigure %}

<br clear="both">

## Embeds

### YouTube

{% youtube "fYJdr7mp9SE" %}
{% youtube "Z54wvKb5aig", { aspectRatio: 1 } %}
{% youtube "2J5tjfqbWkA", { aspectRatio: "4/3" } %}

### Twitter "embed"

{% twitter username="batbeeps", number="1462180413548421121", date="2021-11-20T22:05:51.000Z" %}
Why is these so little actual consistency here aaaugghhhh

{% responsiveImage "./src/images/emy-by-integration.png", "A warmly lit room. The sun is setting outside of the window. Emy, a white, green and black, anthropomorphic robot bat, sits at a workbench. One wing has been detached and is laying in parts on the bench, whilst she uses the other to repair the parts of the disassembled wing." %}
{% endtwitter %}

{% mastodon host="chitter.xyz", username="batbeeps", number="111773929720283664", date="2024-01-17T23:40:16.287Z" %}
I don't actually touch type in the 'correct' way—by the time school bothered to teach it I'd already used computers enough to make up my own method.

As a result, I'm very right paw dominant when I type, about two thirds of the keyboard is used with my right paw, so I doubt I could go much faster than that.
{% endmastodon %}
