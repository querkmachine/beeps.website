---
layout: generic.njk
title: ConFuzzled registration accessibility audit
metadata:
  noRobots: true
cssComponents:
  - code
  - table
---

This is a brief overview of accessibility issues that I identified on reg.confuzzled.org.uk on 8th September 2026.

This covers the process from after logging in, up until the ‘review and submit’ page. It doesn't include the process of creating or logging into an account, the post-registration dashboard, or edit profile journey.

## About this report

Issues were identified using a combination of automated and manual tests using common web browsers and assistive technologies (AT).

The audit is not intended to be completely thorough or authoritative. It is here as a starter guide to issues that exist and improvements that could be made.

The issues listed are mapped to [version 2.2 of the Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/TR/WCAG22/), a set of accessibility criteria curated by the Web Accessibility Initiative (WAI) at the W3C. WCAG criteria are split into three ‘levels’ of compliance:

- Level A: Considered to be the bare minimum necessary for accessibility compliance.
- Level AA: An ‘acceptable’ level of compliance. This level is specifically referenced by various governments (including those of the US and UK) as their baseline for compliance with equality legislation.
- Level AAA: Maximum compliance. This is generally only considered necessary for services that explicitly cater to disabled and special needs individuals, though some aspects of Level AAA are fairly easy to achieve and provide wider benefits.

Today, I primarily checked for compliance against levels A and AA. This doesn’t mean that the website wouldn’t benefit from also incorporating aspects of level AAA, just that I did not consider the majority of level AAA criteria in the audit process.

It’s important to note that WCAG is a set of guidelines. There may be situations where technical limitations or the nature of how something is intended to work makes it impossible to make accessible. In these situations, you should to list these as known issues in an accessibility statement.

If you’re unable to rectify any of the below issues in the immediate future, they should also be included as known issues within your accessibility statement.

Finally, I ask that you please take this report in the constructive manner it’s intended in. I’m not attempting to discredit the website or yourself. Websites of all scales and resources can do things wrong sometimes. I also don’t expect anything to be fixed in any sort of timeframe, so don’t worry about it.

If you have any further comments or questions about the content of this report, feel free to [contact me](https://beeps.website/contact/) through whatever means you prefer. I’m happy to try and help rectify any of the issues identified here.

## Recommendations to meet WCAG

I consider each of these issues to be a failure of one or more of the WCAG Level A and Level AA criteria.

### Heading hierarchy is incorrect

The hierarchy of headings on a page does not descend correctly on the dashboard page.

Conventions listed under ‘Open for registration’ (a H2) also have their names marked up as H2 elements, when they should be H3 elements.

Having the correct hierarchy is necessary for assistive software users, particularly screen readers, to understand the structure of the page’s content and provide bespoke means of navigating that content (such as headers mode in some screen readers).

This is a failure of [SC 1.3.1 Info and Relationships (Level A)](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships).

### Elements lack a focus state style

Some elements do not have a visible focus state style.

- ‘Sign out’ button

The presence of a visible focus state is necessary for people who don’t use cursor-based navigation methods (e.g. keyboard navigation) to help them track what is currently focused and orient themselves on a page.

This affects users who have motor disorders that can prevent the dextrous use of a mouse or touch screen.

This is a failure of [SC 2.4.7 Focus Visible (Level AA)](https://www.w3.org/WAI/WCAG22/Understanding/focus-visible).

### Focus state style provides insufficient contrast

There are multiple places in which the focus style provides insufficient contrast against the background colour.

| Elements     | Foreground colour | Background colour | Contrast ratio |
| :----------- | ----------------: | ----------------: | -------------: |
| Buttons      |           #d2d1e2 |           #ffffff |          1.5:1 |
| Form inputs  |           #d2d1e2 |           #ffffff |          1.5:1 |
| Footer links |           #d0cee1 |           #fcfcfe |          1.5:1 |

The contrast ratio between the focus ring colour and the background should be 3:1 at a minimum. This ensures that the focus ring is visible to users with poor vision, and may also benefit users with poor quality screens or in bright sunlight, where low-contrast colour changes may not be easy to see.

This is a failure of [SC 1.4.11 Non-text Contrast (Level AA)](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast).

### Interactive element borders provide insufficient contrast

Same again, but for the borders of interactive elements, such as borders and form inputs, this time.

These all use #dddde5 on #ffffff, giving them a contrast ratio of 1.35:1.

| Elements    | Foreground colour | Background colour | Contrast ratio |
| :---------- | ----------------: | ----------------: | -------------: |
| Form inputs |           #dddde5 |           #ffffff |         1.35:1 |

As before, this should be 3:1 at a minimum.

This is a failure of [SC 1.4.11 Non-text Contrast (Level AA)](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast).

### Form inputs lack `autocomplete` attributes

The following form inputs do not have `autocomplete` attributes where they would be useful to a user.

Although the heuristics in browsers can often paper over this issue and present autofill options regardless, it would be beneficial to provide these explicitly.

| Field label      | Field `id`     | Suggested `autocomplete` value |
| :--------------- | :------------- | :----------------------------- |
| Chosen name      | `chosenName`   | `nickname`                     |
| Legal first name | `legalFirst`   | `given-name`                   |
| Legal last name  | `legalLast`    | `family-name`                  |
| Date of birth    | `dob`          | `bday`                         |
| Address line 2   | `addressLine2` | `address-line2`                |
| Town / city      | `town`         | `address-level2`               |
| County / state   | `county`       | `address-level1`               |
| Postcode / ZIP   | `postcode`     | `postal-code`                  |
| Country          | `country`      | `country`                      |

Being able to autofill form information is beneficial for many kinds of users, including:

- Those who have difficulty providing information accurately, such as people with dyslexia or other learning disorders.
- Those who have difficulty typing quickly, such as people with motor issues.
- Those who are unable to type at all, such as people who have lost limbs or are reliant on speech-to-text inputs.

This is a failure of [SC 1.3.5 Identify Input Purpose (level AA)](https://www.w3.org/WAI/WCAG22/Understanding/identify-input-purpose).

### Form inputs attempt to disable autofill

The following form inputs attempt to disable autofilling details. That’s bad for much the same reasons as the above.

| Field label    | Field `id`     | Suggested `autocomplete` value |
| :------------- | :------------- | :----------------------------- |
| Address line 1 | `addressLine1` | `address-line1`                |

Browser heuristics often ignore and override attempts to disable autofill, so there’s not really any point in trying.

This is a failure of [SC 1.3.5 Identify Input Purpose (level AA)](https://www.w3.org/WAI/WCAG22/Understanding/identify-input-purpose).

### Related form inputs are not contained in a fieldset

The following groups of form inputs are not grouped within a fieldset HTML element.

- ‘Home address’
- ‘Registration type’
- ‘Upgrades’
- ‘A few more questions’
- ‘Your room-type preferences, most preferred first’
- ‘Not interested in’

Grouping these elements together helps browsers and assistive software understand that the fields are related to one another, essentially asking for one answer in multiple parts.

Some of these headings are expressed as a paragraph, underrepresenting its importance to the page hierarchy. Some are incorrectly marked up as `<label>` elements.

I suggest using an HTML structure similar to this to group the controls together:

```html
<fieldset>
  <legend>
    <h3>Home address</h3>
  </legend>
  [address form controls]
</fieldset>
```

This is a failure of [SC 1.3.1 Info and Relationships (Level A)](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships).

### Checkboxes with expanding supplementary content do not announce that content

When selected, the ‘Accessibility needs’ and ‘Hilton Honors’ checkboxes expand to show a secondary form field asking for more information.

The toggling of these fields is not described in code, preventing assistive software from announcing their presence to users.

Use the `aria-expanded`, `aria-controls` and `aria-controlledby` attributes to link the states of these elements together, toggling `aria-expanded` depending on the visibility of the additional information field.

```html
<button
  id="accessibilityNeeds"
  aria-expanded="false"
  aria-controls="accessibilityNeeds-info"
  ...
></button>

<div id="accessibilityNeeds-info" aria-controlledby="accessibilityNeeds"></div>
```

This is a failure of [SC 1.3.1 Info and Relationships (Level A)](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships).

### The terms and conditions area isn’t scrollable without a cursor

The registration terms and conditions are held within a scrollable container.

This container is not focusable with a keyboard or other cursorless navigation medium, so it isn’t possible to scroll or read the full terms and conditions.

Add `tabindex="0"` to it and job outta be a good-un.

This is a failure of [SC 2.1.1 Keyboard (Level A)](https://www.w3.org/WAI/WCAG22/Understanding/keyboard).

## Other recommendations for improvements

These are recommendations based on my own professional experience designing and building forms for a wide audience. Most of them still relate to accessibility or usability, but do not strictly breach any WCAG criteria.

### Elements are generally just not marked up as the things they are

[The first rule of ARIA](https://w3c.github.io/using-aria/#rule1) is to use native HTML elements wherever possible.

[The second rule of ARIA](https://w3c.github.io/using-aria/#second) is to never override the `role` of an element that already has an implicit role.

These rules exist because you are never, ever going to write enough whizzy JavaScript to accurately recreate the interactivity and feedback that a native control provides to a user, in a way that works consistently across all circumstances, _especially_ when it comes to assistive technologies.

Instances I noticed follow.

#### Form submit buttons use `type="button"` rather than `type="submit"`.

Although this is relatively minor, it did cause my screen reader test to fail to recognise any submission button. It also prevented a minor piece of native browser behaviour from working: being able to press the Enter key on an input to continue form submission.

#### Checkboxes use buttons with `role="checkbox"` instead of `type="checkbox"`, radios use buttons with `role="radio"` instead of `type="radio"`

This presented some unusual behaviour in my screen reader testing. Screen reader focus (what the screen reader is currently announcing) was able to become detached from keyboard focus (what element will be interacted with). This meant that I could be hearing one option, but using the keyboard combination to check the input would instead select a different option.

For the checkboxes on the Interests page specifically, the use of an `aria-label` on the `<button>` elements followed by a `<span>` with the visible label caused the text of each option to be announced twice. This doesn’t happen with native checkboxes or radios, as the input and their label have programmatic association already. Other checkboxes didn’t repeat this pattern.

#### Text lists are marked up as paragraphs rather than lists

Relatively minor, but the order summary and list of selected interests on the review page contain lists of information. However, they are marked up as paragraphs or `div` elements.

This prevents some bits of otherwise useful information to not be exposed to assistive technology.

In the case of the order summary, it means that there isn’t a programmatic association between each item and the cost associated with it. This could be marked up as a definition list instead.

```html
<dl>
  <div>
    <dt>Standard</dt>
    <dd>£145.0.0</dd>
  </div>
  <div>
    <dt>Twin room (est. 4 nights)</dt>
    <dd>£350.00</dd>
  </div>
</dl>
```

---

I’ve put it into recommendations as I’m not sure that this is strictly a WCAG failure, but it was a mildly degraded experience with the things I have to test with. There may be more significant issues in other assistive technology.

Ideally, I recommend using the appropriate HTML element where possible.

### Draggable controls lack detail in labelling

The list of accommodation types include a drag handle on the left and an ‘Add’ or ‘Remove’ button on the right.

In both cases, the text announced when these buttons are focused by a screen reader fails to uniquely describe which item is being interacted with.

Drag handles only list the room type, but not the hotel it’s located in. For example, both the Hilton and Holiday Inn options are announced as ‘Reorder Twin Room’.

The add and remove buttons do not include the hotel or room type at all, making it harder for users of screen readers to understand what is being interacted with, and making it harder for users of voice control software to interact with specific buttons.

In all cases, the `aria-label` should be amended to include both the hotel name and room type.

This isn’t a WCAG failure at Level A and AA, as the buttons exist within unique contexts (i.e. the user can find the required distinction nearby to the control). It is a failure of [SC 2.4.9 Link Purpose (Link Context) (Level AAA)](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-link-only) but it’s an easy enough fix that it’s worth doing anyway, IMO.

### Incorrect use of ARIA attributes

The following form elements use an ARIA attribute in an incorrect manner.

| Field label | Incorrect ARIA usage                             |
| :---------- | :----------------------------------------------- |
| Country     | `aria-required` is not valid on button elements. |

This isn’t strictly a WCAG failure, to my understanding, but it has the potential to provide incorrect or conflicting information to an assistive software user.

### Consider providing supplementary text and styles for error messages

Error messages are currently _predominantly_ identified by their colour.

I’ve not marked this as a failure because there are other factors involved, but this feels really close to a failure of [SC 1.4.1 Use of Color (Level A)](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color).

I recommend providing some other visual differentiation to separate errors from labels and hint text, such as using bold type, so that there is less reliance on colour to convey the error state.

Error messages arguably have this already due to using a slightly larger font size than hint text, intentionally or not.

I also recommend adding visually hidden text reading ‘Error:’ to the front of error messages. This is to help non-visual users (such as screen readers) understand that the text about to be announced is an error message.

### ‘Real time’ form validation is so awful, plz don’t do it

Form validation currently happens in ‘real time’, attempting to validate input whilst the user is typing and at the point that the user leaves a form input.

This sucks in many, many ways:

- It can confuse users who have been told that their answer is wrong when they haven’t finished giving it, or haven’t even tried to give it yet.
- It causes elements on the page to move around as the user is navigating.
- When validating during typing, it causes screen reader software to interrupt users who are currently typing with messages that what they’re typing is wrong.
- When validating upon removing focus from the input, it doesn’t necessarily inform non-sighted users that an error has occurred, because they’re no longer focused on the input the error is tied to.

All users, including those without disabilities, tend to fill out forms in two phases: first answering the questions, then reviewing their answers.

Live validation interrupts these phases, forcing the user to backtrack to review and correct prior information when they’ve already mentally moved on to answering the next question. This introduces subtle mental fatigue, which isn’t ideal.

I strongly recommend only performing validation when the user attempts to submit the page. Doing so resolves many of the issues described above and allows for more accessible error handling patterns more generally.

Speaking of which...

### Avoid disabling submit buttons

Currently, ‘continue’ buttons on each page are disabled until the user has provided valid information for each field, as per the above issue.

This isn’t ideal, as [it often isn’t obvious to a user why the button is disabled](https://axesslab.com/disabled-buttons-suck/).

Even if they are conscious that there must be an error or missing information, users who are dependent upon assistive software or hardware can find it difficult and time consuming to navigate back up the page to try and locate the missing or incorrect information.

Disabled buttons also usually lack contrast for users with vision problems.

Rather than disabling the button, I suggest having it be enabled. If clicked when the form is in an invalid state, programatically move focus to either a summary of all errors on the page, or to the first input that’s invalid.

This helps users of all kinds to quickly jump to what is preventing their progression and correct it.

### Avoid using placeholder text in fields

The ‘Allergies’ and ‘Medical notes’ fields use placeholder text. The former does so to provide an example of an allergy, the latter to provide hint text.

Generally, it’s best practice to avoid using placeholder text entirely, as it can cause users to think that a field has already been provided with a value.

Placeholder text is also not consistently announced by assistive software, which renders users unable to see or hear it.

In both cases, the text of the placeholders should be in the accompanying hint text instead.

### Consider laying out form fields in a single-column layout

The first page of registration lays out groups of fields in a two-column layout.

This isn’t ideal for users of screen magnification software, who often work by finding the start of the page’s main content (the top-left in typical English-language contexts) and moving down the page vertically, giving the potential to not notice some fields.

In combination with the above two issues regarding validation and submit buttons being disabled, it’s liable to create additional frustration for these users as they have to navigate back to the top of the page and manually locate the missed fields.

Single-column forms are usually easier for users to understand and navigate as well, particularly those who have trouble with information overload and visual noise, such as some people with ADHD.

### Consider sizing form inputs according to their expected values

Sizing form fields according to their expected values, where known, is a great visual shorthand for letting a more experienced user know what needs to be entered into that field.

For example the ‘Postcode / ZIP’ field is only likely to need to accommodate about 10 characters, so it can be made only 10 characters wide (with some leeway) to provide a visual shorthand for it.

Not really an accessibility thing, just more of a design best practices thing.

### Consider only marking required OR optional fields

Currently, all required fields are marked with a red asterisk, and all optional fields with the supplementary text ‘(optional)’.

Whilst doing either successfully meets [SC 3.3.2 Labels or Instructions (Level A)](https://www.w3.org/WAI/WCAG22/Understanding/labels-or-instructions), doing both is a bit overkill.

As the majority of fields in the registration process are required, I suggest only marking the optional ones. The use of a full label, rather than a shorthand, is [more readily understandable anyway](https://adamsilver.io/blog/how-to-highlight-required-and-optional-form-fields/).

As a note, I saw that most fields placed the ‘optional’ text in the label, whilst the ‘Medical notes’ field put it in the hint text. I recommend keeping them all in the label (though the medical info page is entirely optional to begin with).

### Consider increasing the font size

Body type, form inputs and hints currently use a computed 14px font size, and hints use 12px.

These are all rather small, smaller than the WCAG criteria reasonably expect a page to use. Many of the criteria around contrast and appearance use 16px as a baseline, so it could be argued that although it otherwise meets minimum contrast, the size of the text is harming its readability.

By means of comparison, I plugged the same colours into the APCA contrast algorithm, which is considered more accurate than the algorithm currently used by WCAG and incorporates font size and weight into its calculations. It gave back these:

| Text              | Text colour | Background colour | Current font size | Minimum font size for APCA contrast |
| :---------------- | ----------: | ----------------: | ----------------: | ----------------------------------: |
| Page descriptions |     #62626e |           #fcfcfe |              14px |       17.5px (regular), 14px (bold) |
| Card descriptions |     #62626e |           #ffffff |              14px |      17.25px (regular), 14px (bold) |
| Label text        |     #0b0a13 |           #ffffff |              14px |       14.5px (regular), 12px (bold) |
| Hint text         |     #62626e |           #ffffff |              12px |      17.25px (regular), 14px (bold) |
| Error messages    |     #e7000a |           #ffffff |              14px |     19.5px (regular), 14.5px (bold) |

There are places where the background colour is darker, such as the expanding checkboxes on the ‘Interests’ page, where the font size would need to be even larger to adequately compensate.

This is not itself a WCAG failure, as WCAG currently uses a lightness based algorithm and not APCA. APCA has been considered for inclusion in a future version of the WCAG specification, however.

Regarding the form input text size specifically, Safari on iOS considers this too small to be accessible, and will forcibly zoom in the user’s browser when a form input is focused for the first time, which can be frustrating and cause supplementary text to be cropped off screen.
