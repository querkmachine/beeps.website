---
preTitle: Components
title: Blockquote
---

{% from "src/_includes/example.njk" import kimExample %}

The blockquote component displays a quoted run of text that is visually separated from surrounding content.

{{ kimExample("blockquote", "Blockquote") }}

Paragraphs contained within a blockquote will automatically be prefixed with opening quotation marks. The last paragraph will also have closing quotation marks.

The blockquote component doesn't have a way of displaying a citation. Use it in conjunction with a [figure]({{ '/design-system/figure/' | url }}) to do this.

## Usage

Use when:

- Displaying a large, direct quotation.

Don't use when:

- Displaying a quotation inline with other text.
- Not displaying a quotation.
