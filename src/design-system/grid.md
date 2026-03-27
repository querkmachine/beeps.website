---
preTitle: Objects
title: Grid
---

{% from "src/_includes/example.njk" import kimExample %}

The grid object is used to create grid layouts. That's science, baby.

Grids are intentionally simple, only capable of displaying up to three or four columns, depending on what kinds of columns I put in them.

{{ kimExample("grid", "Grid") }}

## Responsive grids

Grids can be made responsive by prefixing the column class with one of the breakpoint keywords.

- `nx` - 320px and up
- `constitution` - 400px and up
- `galaxy` - 600px and up
- `defiant` - 768px and up
- `intrepid` - 1000px and up

Yes, those _are_ the class names of the hero starships in the first five _Star Trek_ television series, by in-universe chronological order. I'm a nerd. You should be used to this.

These breakpoints use [container queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Containment/Container_queries) and thus activate based on the width of the parent container, **not** the width of the viewport.

{{ kimExample("grid-responsive", "Responsive grid") }}

## Constraining width

The grid does not constrain its width by default, mainly because I often need to constrain the width of non-grid things. The wrapper class does that bit.

On mobile devices, the wrapper also ensures that content doesn't get obscured by hardware features like notches, holepunches and dynamic islands.

{{ kimExample("wrapper", "Wrapper") }}
