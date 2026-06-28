---
tag: form
name: Form
category: Forms
spec: https://html.spec.whatwg.org/multipage/forms.html#the-form-element
---

Container element for form inputs. The `form` element typically dictates a form's behaviour and where the form's content should be sent when the form is submitted.

<!-- prettier-ignore-start -->
```html
<form action="submit.php" method="POST">
  <label for="countdown">Seconds to launch</label>
  <input type="number" name="seconds" id="countdown">
  <button type="submit">Start countdown</button>
</table>
```
<!-- prettier-ignore-end -->
