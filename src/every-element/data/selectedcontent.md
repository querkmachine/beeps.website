---
tag: selectedcontent
name: Selected Option Display
category: Forms
experimental: true
spec: https://html.spec.whatwg.org/multipage/form-elements.html#the-selectedcontent-element
---

Contains the content of the currently selected [`option`](#option) within a [`select`](#select), _if_ [customised selects](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Customizable_select) are being used.

<!-- prettier-ignore-start -->
```html
<!-- Note that this style is what enables customised selects. Doesn't work without it. -->
<style>
  select { appearance: base-select; }
</style>

<label for="fave">What's your favourite nebula?</label>
<select id="fave">
  <button>
    <selectedcontent></selectedcontent>
  </button>
  <option value="crab">
    <img alt="" src="https://assets.science.nasa.gov/dynamicimage/assets/science/missions/hubble/releases/2026/03/STScI-01KJQWS2TX2REXHGQ32X7EJ7V1.jpg?fit=clip&crop=faces%2Cfocalpoint&w=300">
    Crab Nebula
  </option>
  <option value="eagle">
    <img alt="" src="https://assets.science.nasa.gov/dynamicimage/assets/science/missions/hubble/nebulae/emission/STScI-01EVT1KKAFJAP21ZQTE56GWAXS.png?fit=clip&crop=faces%2Cfocalpoint&w=300">
    Eagle Nebula
  </option>
  <option value="egg">
    <img alt="" src="https://assets.science.nasa.gov/dynamicimage/assets/science/missions/hubble/releases/2026/02/STScI-01KAEVP71560HQNPJMT2ZC0GA6.jpg?fit=clip&crop=faces%2Cfocalpoint&w=300">
    Egg Nebula
  </option>
</select>
```
<!-- prettier-ignore-end -->
