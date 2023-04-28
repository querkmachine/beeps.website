---
layout: brand.njk
title: beeps’ brand
description: Style guide for my personal projects, including this website.
---

{% macro _swatch(mainColorName, mainColorHex, complementaryColorName) %}

  <div class="page-swatch kim-!-margin-bottom-1" style="color: var(--brand-color-{{ complementaryColorName }}); background-color: var(--brand-color-{{ mainColorName }})">
    <span>{{ mainColorName }}</span>
    <code>{{ mainColorHex }}</code>
  </div>
{% endmacro %}

{% macro _comboSwatch(textColorName, backgroundColorName) %}

  <div class="page-swatch kim-!-margin-bottom-1" style="color: var(--brand-color-{{ textColorName }}); background-color: var(--brand-color-{{ backgroundColorName }})">
    <span>{{ textColorName }} text <br>on {{ backgroundColorName }}</span>
  </div>
{% endmacro %}

A lot of famous individuals are well known for [always wearing the same clothes](https://edition.cnn.com/2015/10/09/world/gallery/decision-fatigue-same-clothes/index.html). Usually they credit this to reducing "decision fatigue"—not having to choose how to dress every day leaves time to mull over the more important decisions.

I don't wear exactly the same clothes every day, but when it comes to building random pages and side projects, I usually spend more time thinking about how it looks than how it works. Consequentially, since late-2021, I've tried to cut down on decision fatigue by making my personal projects follow the same set of basic design rules.

---

## Colours

I maintain a pretty limited palette of base colours. Shades and tints of each are allowed.

### Neutrals

{{ _swatch("black", "#334139", "white") }}
{{ _swatch("white", "#FFFFFF", "black") }}

### Dark mode

{{ _swatch("mustard", "#FFD447", "black") }}
{{ _swatch("ketchup", "#DD6031", "white") }}

### Light mode

{{ _swatch("kimberly", "#786999", "white") }}
{{ _swatch("emy", "#B3FFB3", "black") }}

### Combining colours

Always aim to achieve at least a 4.5:1 contrast ratio between text and background colours, in accordance with [the WCAG Level AA criterion](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html).

These combinations are known to be meet the minimum contrast ratio.

{{ _comboSwatch("white", "black") }}
{{ _comboSwatch("mustard", "black") }}
{{ _comboSwatch("emy", "black") }}
{{ _comboSwatch("black", "white") }}
{{ _comboSwatch("kimberly", "white") }}
{{ _comboSwatch("ketchup", "white") }}

---

## Typography

[Space Mono](https://fonts.google.com/specimen/Space+Mono) is used for headings, code snippets, and as a stylistic alternative for small amounts of text. It's used in bold (700) and regular (400) weights.

> <div style="font-family:'Space Mono'"><span style="font-weight:700">Many years ago the great British explorer George Mallory, who was to die on Mount Everest, was asked why did he want to climb it. He said, "Because it is there." </span><span style="font-weight:400">Well, space is there, and we're going to climb it, and the moon and the planets are there, and new hopes for knowledge and peace are there.</span></div>

[Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk) is used for prose and other text. As a variable font, it's available in all widths from bold (700) to thin (300).

> <div style="font-family:'Space Grotesk'"><span style="font-weight:700">We choose to go to the Moon. </span> <span style="font-weight:600">We choose to go to the Moon... </span><span style="font-weight:500">We choose to go to the Moon in this decade and do the other things, not because they are easy, but because they are hard; </span><span style="font-weight:400">because that goal will serve to organize and measure the best of our energies and skills,</span> <span style="font-weight:300">because that challenge is one that we are willing to accept, one we are unwilling to postpone, and one we intend to win, and the others, too.</span></div>

---

## Robat icon

This isn't used a whole lot, but in places where a logo or icon is needed—and the space is either too small or a dabbing robot bat would be inappropriate—there's an icon.

This is a very recent addition, so will probably be tweaked and refined a bit before it settles down.

<div style="max-width:320px;background-color:white" class="kim-!-margin-bottom-6 kim-!-padding-6">
  <img src="{{ '/safari-pinned-tab.svg' | url }}" alt="Robot bat icon" class="kim-!-margin-0">
</div>

{#

{% macro _combo(textColor, backgroundColor, text) %}

  <li>
    <div class="page-combo" aria-hidden="true" style="color: var(--demo-color-{{ textColor }});border-color: var(--demo-color-{{ textColor }});background-color:var(--demo-color-{{ backgroundColor }})">
      {{ text }}
    </div>
    <p class="kimBody">{{ textColor }} and {{ backgroundColor }}</p>
  </li>
{% endmacro %}

{% block main %}

<div class="kim-!-margin-top-9 kim-!-margin-bottom-9">
  <div class="kimWrapper">
  
    <h1 class="kimHeading-xl">My brand</h1>
    <p class="kimBody-l">A lot of famous individuals are well known for <a href="https://edition.cnn.com/2015/10/09/world/gallery/decision-fatigue-same-clothes/index.html">always wearing the same clothes</a>. Usually they credit this to reducing &ldquo;decision fatigue&rdquo; &ndash; not having to choose how to dress every day leaves time to mull over the more important decisions.</p>
    <p class="kimBody">I don&rsquo;t wear exactly the same clothes every day, but when it comes to building random pages and side projects, I usually spend more time thinking about how it looks than how it works. Consequentially, since late-2021, I&rsquo;ve tried to cut down on decision fatigue by making my personal projects follow the same set of basic design rules.</p>
    
    <section class="kim-!-margin-top-9">
      <h2 class="kimHeading-l" id="typography">Typography</h2>
      <div class="page-row">
        <div class="page-typerun" aria-hidden="true" style="font-family: 'IBM Plex Mono'">
          <div style="font-weight: 700">
            And on the pedestal, these words appear:
          </div>
          <div style="font-weight: 500">
            My name is Ozymandias, King of Kings;
          </div>
          <div style="font-weight: 400">
            Look on my Works, ye Mighty, and despair!
          </div>
        </div>
        <p class="kimBody">
          <a href="https://fonts.google.com/specimen/IBM+Plex+Mono">IBM Plex Mono</a> is used for headings, code snippets, and as a stylistic alternative for small amounts of text.
        </p>
      </div>
      <div class="page-row">
        <div class="page-typerun" aria-hidden="true" style="font-family: 'IBM Plex Sans'">
          <div style="font-weight: 700">
            Of that colossal Wreck, boundless and bare
          </div>
          <div style="font-weight: 400">
            The lone and level sands stretch far away.
          </div>
        </div>
        <p class="kimBody">
          <a href="https://fonts.google.com/specimen/IBM+Plex+Sans">IBM Plex Sans</a> is used for prose and other text.
        </p>
      </div>
    </section>
    
    <section class="kim-!-margin-top-9">
      <h2 class="kimHeading-l" id="colours">Colours</h2>
      <div class="page-row">
        <p class="kimBody">Six colours. Shades and tints allowed but not provided.</p>
        <ul class="kimList kimList-columns">
          {{ _swatch("kimberly", "#786999") }}
          {{ _swatch("emy", "#B3FFB3") }}
          {{ _swatch("ketchup", "#DD6031") }}
          {{ _swatch("mustard", "#FFD447") }}
          {{ _swatch("black", "#334139") }}
          {{ _swatch("white", "#FFFFFF") }}
        </ul>
      </div>
    </section>
    
    <section class="kim-!-margin-top-9">
      <h2 class="kimHeading-l" id="#colour-combinations">Colour combinations</h2>
      <div class="page-row">
        <p class="kimBody">There are no hard and fast rules around how colours are used together, but these combinations tend to work well together (and are accessible!).</p>
        <ul class="kimList kimList-columns">
          {{ _combo("black", "white", "bats!") }}
          {{ _combo("kimberly", "white", "bats!") }}
          {{ _combo("ketchup", "white", "bats!") }}
          {{ _combo("emy", "black", "bats!") }}
          {{ _combo("mustard", "black", "bats!") }}
          {{ _combo("white", "black", "bats!") }}
        </ul>
      </div>
    </section>
    
    <section class="kim-!-margin-top-9">
      <h2 class="kimHeading-l" id="logo">Logo?</h2>
      <div class="page-row">
        
      </div>
    </section>
    
  </div>
</div>
{% endblock %}

#}
