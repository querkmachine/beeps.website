---
title: Test blog
date: 9999-01-01
tags: [random]
draft: true
---

A page for testing markdown styles and custom shortcodes.

## Markdown

This is a paragraph. Nostrud incididunt mollit qui Lorem id ad deserunt duis sint ad amet sunt. Non veniam labore proident laboris dolor ut veniam enim. Proident excepteur nisi reprehenderit culpa nulla duis occaecat qui tempor. Exercitation excepteur consequat non sunt cillum eiusmod irure mollit quis. Dolor nostrud do eu nostrud ullamco duis aliqua. Nostrud incididunt ipsum tempor velit officia.

This is a sentence broken
over multiple lines.
(There should be line breaks.)

**Bold**
_italic_
**_bold and italic_**
~~deleted~~
[link](#)
`inline code`
<hi@berly.kim>

1. list item 1
2. list item 2
3. list item 3

- list item 1
- list item 2
- list item 3

> blockquote

> blockquote with
>
> multiple _paragraphs_

> > nested blockquote

---

```
code block
```

```html
<p class="example">Syntax highlighted code block.</p>
```

## Shortcodes

### Callout

{% callout %}
This is some text in a callout.

**Bold** _italics_ [link](#). Markdown!
{% endcallout %}

### Character

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

{% character variant="point-down" %}
Look at that one working!
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
