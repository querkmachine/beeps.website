---
tag: ul
name: Unordered List
category: Lists
spec: https://html.spec.whatwg.org/multipage/grouping-content.html#the-ul-element
---

Surrounds a list of {{ eeTag("li") }} where the order of the items is irrelevant, that is, where changing the order of the items wouldn't alter how they're understood. A shopping list, for example.

<!-- prettier-ignore-start -->
```html
<ul>
  <li>Sally Ride</li>
  <li>Nancy Grace Roman</li>
  <li>Margaret Hamilton</li>
  <li>Mae Jameson</li>
</ul>
```
<!-- prettier-ignore-end -->

For lists of items where the order is important to the meaning, use {{ eeTag("ol") }}. For lists of key-value pairs, use {{ eeTag("dl") }}. For lists of controls, use {{ eeTag("menu") }}.
