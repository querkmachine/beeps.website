---
tag: th
name: Table Heading
category: Tables
spec: https://html.spec.whatwg.org/multipage/tables.html#the-th-element
---

A cell, containing text that acts as a title to the current column or row of data, contained within a [`table`](#table). Must be the child element of a [`tr`](#tr).

Which axis the `th` relates to should be specified using the `scope` attribute.

If the data is not acting as a title to adjacent data, use the [`td`](#td) element instead. If it's acting as a heading for the entire table, use [`caption`](#caption).
