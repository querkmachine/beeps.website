---
layout: generic.njk
title: Every HTML element
updated: 2026-10-12
metadata:
  description: A guide to every element that's ever existed in HTML and how to use it.
cssComponents:
  - code
  - tag
  - meta
---

{%- macro _filterElementList(category) %}
  <dl class="pageElementList">
    {%- for element in collections['every-element'] | filterEveryElementList("category", category) | sort(false, false, "data.tag") %}
      <div class="pageElementList_item">
        <dt class="pageElementList_tag">{{ eeTagHtml(element) | safe }}</dt>
        <dd class="pageElementList_name">{{ element.data.name }}</dd>
        {%- if element.data.experimental %}
          <dd class="pageElementList_status"><span class="kimTag kimTag-accent">Experimental</span></dd>
        {%- elif element.data.obsolete %}
          <dd class="pageElementList_status"><span class="kimTag">Obsolete</span></dd>
        {%- endif %}
      </div>
    {%- endfor %}
  </dl>
{%- endmacro %}

HTML is a semantic language. Nearly every element provides a specific meaning to its contents or function. This is a quick reference for what those meanings are.

Well-written HTML will use the most appropriate element for the job, but you don't need to know every single element from memory!

If you prefer, you can view [every element on a single page](/every-element/one-page/).

## Metadata

Elements that describe the contents of a page.

{{ _filterElementList("Metadata") }}

## Sections of a page

Elements that make up the main regions of a page.

{{ _filterElementList("Sections of a page") }}

## Content

### Grouping content

Elements that describe a relationship between other elements.

{{ _filterElementList("Grouping content") }}

### Text semantics

Elements that describe the text content of a page.

{{ _filterElementList("Text semantics") }}

### Lists

Elements that annotate lists.

{{ _filterElementList("Lists") }}

### Tables

Elements for constructing data tables.

{{ _filterElementList("Tables") }}

### Ruby text

Elements that annotate text content of a page. Typically used with Japanese and Chinese text.

{{ _filterElementList("Ruby text") }}

## Interactivity

### Forms

Elements that allow a page to accept user input.

{{ _filterElementList("Forms") }}

### Interactive elements

Elements that include behavioural functionality.

{{ _filterElementList("Interactive elements") }}

### Scripting

Elements that interact with JavaScript functionality, requiring it to work.

{{ _filterElementList("Scripting") }}

## Multimedia

### Media

Elements that embed non-text content into a page.

{{ _filterElementList("Media") }}

### Embedded content

Elements that embed non-HTML documents inside of HTML.

{{ _filterElementList("Embedded content") }}

### Image maps

Elements that create images with multiple interactive regions.

{{ _filterElementList("Image maps") }}

## Frames

Elements that created frame sets, a now-obsolete method of building pages by combining multiple HTML documents.

{{ _filterElementList("Frames") }}

## Styling

Elements that control the appearance of a page.

{{ _filterElementList("Styling") }}

{% css %}
.pageElementList_item {
display: flex;
flex-direction: column;
padding-block: var(--space-1);
border-block-end: var(--border-hairline) solid var(--color-furniture);
}

.pageElementList_name,
.pageElementList_status {
margin-inline-start: 0;
}

@container (min-width: 600px) {
.pageElementList_item {
flex-direction: row;
}

.pageElementList_tag {
flex: 11em 0 0;
}

.pageElementList_name {
flex-grow: 1;
margin-inline-start: var(--space-5);
}

.pageElementList_status {
flex-basis: 9em;
padding-inline: var(--space-1);
text-align: end;
}
}
{% endcss %}
