---
tag: input
name: Input
category: Forms
spec: https://html.spec.whatwg.org/multipage/input.html#the-input-element
---

Inserts an interactive control that can accept input from a user and send it to a server. The appearance, functionality, and restrictions of an input are determined by the `type` attribute.

Inputs must be within a [`form`](#form) and have a `name` attribute to send their data to a server. Inputs should have a [`label`](#label) element associated with them that describes what the user is expected to enter or select.

It is one of the most powerful and complex HTML elements.

### The `text` type

The default, `text` allows a user to type a single line of arbitrary content.

You can provide a hint to a browser about how to autofill the value by setting the `autocomplete` attribute to [an accepted autocomplete value](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete#values).

The maximum length of the content can be restricted by setting a `maxlength` attribute.

<!-- prettier-ignore-start -->
```html
<input type="text" name="surname" autocomplete="family-name" value="Shepard">
```
<!-- prettier-ignore-end -->

If values longer than one line are accepted, use the [`textarea`](#textarea) element instead.

### The `password` type

Similar to the `text` type, but the value is visually obscured from the user.

Browsers and password managers will often attempt to automatically fill the value of a password field. You can control this behaviour by setting the `autocomplete` value to either `current-password` (to prompt autofilling), or `new-password` (to prompt generating a new password). For security reasons, most browsers don't allow you to disable this functionality.

<!-- prettier-ignore-start -->
```html
<input type="password" name="launch-code" autocomplete="current-password" value="hunter2">
```
<!-- prettier-ignore-end -->

### The `email`, `tel`, and `url` types

All variants of the `text` type, these appear visually identical to text but show different default keyboards on touchscreen devices, may be autofilled differently, and have different validation rules when browser validation is being used.

### The `number` and `range` types

Allows the user to enter a number. The `number` type presents the user with a text box with up and down arrow buttons for setting a value without typing. The `range` type presents the user with a slider, with the value set by dragging instead.

The lower and upper bounds of the value can be set with the `min` and `max` attributes. The intervals a value may change by can be set with the `step` attribute, and can also be used to allow fractional values.

<!-- prettier-ignore-start -->
```html
<input type="number" name="apollo" min="1" max="17">
```
<!-- prettier-ignore-end -->

### The `date`, `time`, `datetime-local`, and `week` types

Allows the user to enter a calendar date, time, date and time, or week.

Browsers will usually also provide a calendar interface to pick a date and a list of hours and minutes for times, as well as allowing typing.

Browsers adapt the format to match the user's language and locale (for example, rendering as `MM/DD/YYYY` in the United States and `DD/MM/YYYY` in most other English-speaking locales).

Date values sent to the server in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.

- Dates: `YYYY-MM-DD`, for example, `1969-07-16`.
- Times: `hh:mm`, in the 24-hour clock, for example, `13:32`.
- Datetimes: The above formats, with a `T` inserted as a separator. For example, `1969-07-16T13:32`. Note that this doesn't include a timezone, which must be determined separately.
- Weeks: The year followed by `-W` and the week number. for example, `1969-W29`.

The earliest and latest values a user may choose can be set with the `min` and `max` values, using the same ISO 8601 formatting.

<!-- prettier-ignore-start -->
```html
<input type="date" name="launch-date" min="1962-09-12" max="1969-12-31">
```
<!-- prettier-ignore-end -->

### The `color` type

Displays a button filled with a particular colour. Clicking the button displays the browser or operating system's colour picker interface.

Colour inputs usually only support the sRGB colour space and returns values in hexadecimal format,like `#0b3d91`.

### The `checkbox` and `radio` types

Renders selection boxes for a list of options. Checkboxes allow multiple option to be chosen, whereas radio buttons only allow one.

These options should all have the same `name` attribute, individual [`label`s](#label), and be wrapped within a [`fieldset`](#fieldset).

Both checkboxes and radios may be pre-selected by passing the `checked` attribute.

<!-- prettier-ignore-start -->
```html
<fieldset>
  <legend>Which of these was the first woman in space?</legend>
  <div>
    <input type="checkbox" name="answer" id="answer-1" value="jemison">
    <label for="answer-1">Mae Jemison</label>
  </div>
  <div>
    <input type="checkbox" name="answer" id="answer-2" value="ochoa">
    <label for="answer-2">Ellen Ochoa</label>
  </div>
  <div>
    <input type="checkbox" name="answer" id="answer-3" value="ride">
    <label for="answer-3">Sally Ride</label>
  </div>
  <div>
    <input type="checkbox" name="answer" id="answer-4" value="sharman">
    <label for="answer-4">Helen Sharman</label>
  </div>
  <div>
    <input type="checkbox" name="answer" id="answer-5" value="tereshkova">
    <label for="answer-5">Valentina Tereshkova</label>
  </div>
</fieldset>
```
<!-- prettier-ignore-end -->

### The `file` type

Displays a button for a user to select a file from their device.

Adding the `multiple` attribute allows users to select multiple files. The `accept` attribute allows you to define a list of file formats the user can select.

The `capture` attribute alters the behaviour of the input, instead prompting the user to use their device camera to capture a photograph, video or audio recording instead of selecting one.

Unlike other input types, setting `value` does nothing on the `file` type.

<!-- prettier-ignore-start -->
```html
<input type="file" name="photograph" accept="image/jpeg,image/png" multiple>
```
<!-- prettier-ignore-end -->

### The `button`, `submit` and `reset` types

These work identically to the [`button`](#button) element. See that element for information.

An `input` with these types can only show plain text text, whereas the `button` element can display a wide range of HTML elements, usually making it preferable.

### The `image` type

Shows a button with an image in it. This is largely unused in the modern era. Use a [`button`](#button) with CSS or an [`img`](#img) element instead.

If you want a user to upload an image, use the `file` type instead.

### The `hidden` type

An invisible input that holds read-only information to be sent to the server along with other inputs.

Avoid relying on hidden inputs for critical functionality, as tech savvy users can still view and edit the values of hidden inputs.
