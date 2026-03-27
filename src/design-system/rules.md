---
preTitle: Objects
title: Rules
---

{% from "src/_includes/example.njk" import kimExample %}

Rules are used to visually break up regions of a page. They're all based on the [established border widths]({{ '/design-system/spacing/#borders' | url }}).

## Plain rules

A pretty plain border with some spacing around it. Used to separate sections of a page in a way that's not meant to stand out much.

{{ kimExample("rules", "Horizontal rules") }}

## _Fancy_ rules

A variation of the rule that has a **SQUARE** in the middle.

Used when separating different sections of content, where having a slightly different visual is handy for making it clear that this isn't the end and there's still more content to come.

{{ kimExample("rules-fancy", "Fancy horizontal rules") }}
