---
tag: article
name: Article
category: Sections of a page
spec: https://html.spec.whatwg.org/multipage/sections.html#the-article-element
---

An independent, self-contained section of content, such that it could be separated from the surrounding context and still make sense. Common examples include articles, blog posts, forum posts and comments.

Articles may contain their own [`header`](#header) and [`footer`](#footer) elements, which will be scoped to the article. For example, to contain the title, publish date and other metadata about the article.

<!-- prettier-ignore-start -->
```html
<article>
  <header>
    <h1>Vogon poetry</h1>
    <time datetime="1979-10-12">12 October 1979</time>
  </header>
  <p>
    Oh freddled gruntbuggly,<br>
    Thy micturitions are to me,<br>
    As plurdled gabbleblotchits,<br>
    On a lurgid bee,<br>
    That mordiously hath blurted out,<br>
    Its earted jurtles, grumbling<br>
    Into a rancid festering confectious organ squealer.<br>
  </p>
  <footer>
    <p>Written by Prostetnic Vogon Jeltz</p>
  </footer>
</article>
```
<!-- prettier-ignore-end -->
