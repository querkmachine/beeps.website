---
tag: ol
name: Ordered List
category: Lists
spec: https://html.spec.whatwg.org/multipage/grouping-content.html#the-ol-element
---

Surrounds a list of [`li`](#li) where the order of the items is significant to the content, that is, where changing the order of the items would alter their meaning. For example, the steps in a recipe or a list of comments that are replies to one another.

<!-- prettier-ignore-start -->
```html
<ol>
  <li>Build the rocket</li>
  <li>Fuel up the rocket</li>
  <li>Launch the rocket</li>
</ol>
```
<!-- prettier-ignore-end -->

Use the `start` attribute to define a starting point other than 1. Use the `reversed` boolean attribute to display numbers in descending order.

For lists of items where the order is not significant, use [`ul`](#ul). For lists of key-value pairs, use [[`dl`](#dl). For lists of controls, use [`menu`](#menu).
