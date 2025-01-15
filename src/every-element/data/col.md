---
tag: col
name: Table Column
category: Tables
spec: https://html.spec.whatwg.org/multipage/tables.html#the-col-element
---

A mechanism for passing HTML attributes to the columns in a [`table`](#table) without having to repeat them for each table cell. Cols can only be used within a [`colgroup`](#colgroup).

<!-- prettier-ignore-start -->
```html
<table>
  <colgroup>
    <col class="first-column">
    <col span="2" class="other-columns">
  </colgroup>
  <thead>
    <tr>
      <th>Rocket</th>
      <th>Liftoff thrust</th>
      <th>Mass to LEO</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Saturn V</th>
      <td>34,500 kN</td>
      <td>140 tonnes</td>
    </tr>
  </tbody>
</table>
```
<!-- prettier-ignore-end -->
