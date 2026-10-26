---
tag: menu
name: Menu
category: Lists
spec: https://html.spec.whatwg.org/multipage/grouping-content.html#the-menu-element
---

Contains one or more {{ eeTag("li") }} elements representing a list of command options, as part of a user interface.

<!-- prettier-ignore-start -->
```html
<menu>
  <li><button id="bold">Bold</button></li>
  <li><button id="italics">Italics</button></li>
  <li><button id="underline">Underline</button></li>
</menu>
```
<!-- prettier-ignore-end -->

`menu` is only intended to contain commands that a user can perform, such as a toolbar, menu system, or a list of {{ eeTag("button") }}s. For any other type of list, use {{ eeTag("ol") }} or {{ eeTag("ul") }}.
