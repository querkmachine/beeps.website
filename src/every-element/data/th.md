---
tag: th
name: Table Heading
category: Tables
spec: https://html.spec.whatwg.org/multipage/tables.html#the-th-element
---

A cell, containing text that acts as a title to the current column or row of data, contained within a {{ eeTag("table") }}. Must be the child element of a {{ eeTag("tr") }}.

Which axis the `th` relates to should be specified using the `scope` attribute.

If the text is not a heading to the adjacent data, use the {{ eeTag("td") }} element instead. If it's acting as a heading for the entire table, use {{ eeTag("caption") }}.
