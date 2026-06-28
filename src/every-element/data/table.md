---
tag: table
name: Table
category: Tables
spec: https://html.spec.whatwg.org/multipage/tables.html#the-table-element
---

Element that wraps around tabular data—content that's being presented as a set of rows and columns.

<!-- prettier-ignore-start -->
```html
<table>
  <caption>The inner planets of the Sol system</caption>
  <colgroup>
    <col class="name">
    <col span="2" class="align-right">
  </colgroup>
  <thead>
    <tr>
      <th scope="col">Planet name</th>
      <th scope="col">Distance from sun (AU)</th>
      <th scope="col">Radius (km)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Mercury</th>
      <td>0.450</td>
      <td>2,439.7</td>
    </tr>
    <tr>
      <th scope="row">Venus</th>
      <td>0.725</td>
      <td>6,051.8</td>
    </tr>
    <tr>
      <th scope="row">Earth</th>
      <td>1.000</td>
      <td>6,371.0</td>
    </tr>
    <tr>
      <th scope="row">Mars</th>
      <td>1.525</td>
      <td>3,389.5</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th scope="row">Average</th>
      <td>0.9275</td>
      <td>4,563.0</td>
    </tr>
  </tfoot>
</table>
```
<!-- prettier-ignore-end -->

Tables have several unique elements used for defining their content:

- [`tr`](#tr) wraps around each row.
- [`th`](#th) contains column and row headings.
- [`td`](#td) contains tabular data.
- [`thead`](#thead), [`tbody`](#tbody), and [`tfoot`](#tfoot) separates the table's header and footer rows from the main content.
- [`caption`](#caption) provides an overview of the table contents.
- [`colgroup`](#colgroup) and [`col`](#col) help to make styling columns easier.

Don't use tables for laying out content. That's not what they're for and it can mess up assistive technology users.
