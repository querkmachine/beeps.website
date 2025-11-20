---
layout: generic.njk
title: Colophon
updated: 2025-09-24
metadata:
  description: Giving credit to the people and tools that made this website possible.
cssComponents:
  - character
---

A colophon is a short section you can find at the back of some books, giving some details about the creation of the book. I quite like making these for some of my websites, as a little exercise in being thankful and giving some link love to the open source projects and individual contributors that helped make it happen.

## Code

This website was built by me, beeps. The code for this site is [open source and available on GitHub](https://github.com/querkmachine/beeps.website).

I use the static site generator [Eleventy](http://11ty.dev) with the following plugins:

- [eleventy-img](https://github.com/11ty/eleventy-img)
- [eleventy-plugin-directory-output](https://github.com/11ty/eleventy-plugin-directory-output)
- [eleventy-plugin-rss](https://github.com/11ty/eleventy-plugin-rss)
- [eleventy-plugin-toc](https://github.com/jdsteinbach/eleventy-plugin-toc)

Markdown content is parsed by [markdown-it](https://github.com/markdown-it/markdown-it) with the [markdown-it-anchor](https://github.com/valeriangalliat/markdown-it-anchor) plugin.

Code is highlighted using [highlight.js](https://highlightjs.org/) using a custom theme.

The [Eleventy screenshot service](https://www.11ty.dev/docs/services/screenshots/) is used to generate OpenGraph images.

Certain aspects of the code, in particular the CSS architectural style, is cribbed from [GOV.UK Frontend](https://github.com/alphagov/govuk-frontend)—a project I now work on!—which itself is a modified version of [ITCSS](https://itcss.io). Spacing and type scales were generated using [Utopia](https://utopia.fyi). [Sass](https://sass-lang.com/) and [PostCSS](https://postcss.org) are used for CSS generation.

[Prettier](https://prettier.io/) is used to keep the code beautiful.

Hat tips to the following folks for contributing something that currently exists in the site's code: [Brian Mitchell](https://brianm.me/posts/eleventy-redirect-from/), [Juneum](https://juneum.com/articles/eleventy-drafts/), [Rob Hudson](https://rob.cogit8.org/posts/2020-10-28-simple-11ty-cache-busting/), [Una Kravets](https://una.im/scroll-target-group) and [Zach Leatherman](https://www.zachleat.com/web/automatic-opengraph/).

## Design

Type is set in the open source [Hubot Sans](https://github.com/github/hubot-sans) typeface released by GitHub.

## Tools and services

I use Panic's [Nova](http://nova.app) as my code editor of choice, accompanied by [iTerm](https://iterm2.com/), [Oh My Zsh](https://ohmyz.sh/) and the [Powerlevel10k theme](https://github.com/romkatv/powerlevel10k).

This website is hosted by [Opalstack](http://opalstack.com/), who have obscenely good customer support.

Domain names (of which I have too many) are managed by [Namecheap](https://www.namecheap.com/) and [Glauca Digital](https://glauca.digital/).

## Content

Words and images are my own, unless otherwise specified.

This website implements [button schema](https://codeberg.org/LunarEclipse/well-known-button) and [fursona schema](https://github.com/theHedgehog0/fursona-schema), just in case it wasn't furry enough.

## Artwork

{% character character="ash", variant="happy" %}
Ash the amphimorpho is [an original character]({{ '/about/furry/' | url }}) based on the [amphimorpho species](https://amphimorpho.carrd.co/) created by my friend, [TuxedoDragon](https://tuxedodragon.art/).

Illustrations on the homepage and 404 page, in the footer, and on OpenGraph images are also illustrated by [TuxedoDragon](https://tuxedodragon.art/).

Ash's headshots were illustrated by [Caius Nocturne](https://nocturne.works/).
{% endcharacter %}

{% character character="yinglet", variant="happy" %}
Ash's yinglet form is depicted using customised [Yingmotes](https://github.com/mynotaurus/yingmotes), created by my friend, [Myno](https://zatzhing.me/)!

Za yinglet species was created by [Valsalia](https://www.valsalia.com/).
{% endcharacter %}

{% character character="emy", variant="wave" %}
Emy the robot bat is an original character, designed by me with help from my friend [Samael](https://samaelbretondragon.carrd.co/).

Illustrations of Emy are, unless otherwise stated, illustrated by **me** and are based on the art style of the game _[Super Animal Royale](https://animalroyale.com)_ by [Pixile Studios](https://pixilestudios.com), which is really fun.
{% endcharacter %}
