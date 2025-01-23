<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:atom="http://www.w3.org/2005/Atom" exclude-result-prefixes="atom">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml" lang="en" dir="ltr">
      <head>
        <title><xsl:value-of select="atom:feed/atom:title"/> RSS feed</title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <style>
          body {
            display: grid;
            gap: 1.875rem;
            grid-template-columns: 1fr;
            max-inline-size: 45rem;
            padding: 1.5rem;
            margin-inline: auto;
            color: #fff;
            background-color: #2a2536;
            font-family: system-ui, sans-serif;
            line-height: 1.4;
          }
          @media screen and (min-width: 35rem) {
            body {
              grid-template-columns: 1fr 2fr;
            }
          }
          a {
            color: #00fa17;
          }
          p {
            margin-block-start: 0;
          }
          aside {
            padding: 1.25rem;
            background-color: #3d364f;
          }
        </style>
      </head>
      <body>
        <aside>
          <p>This is an RSS feed. An ancient and mysterious piece of technology that allows you to use an <a href="https://en.wikipedia.org/wiki/Comparison_of_feed_aggregators">feed aggregator</a> to access the content of <a href="https://beeps.website/blog/">my blog</a>.</p>
          <p>Copy the URL of this page into your aggregator to add it.</p>
        </aside>
        <section>
          <h1>Recent posts</h1>
          <xsl:for-each select="atom:feed/atom:entry">
            <article>
              <h2>
                <a hreflang="en" target="_blank">
                  <xsl:attribute name="href">
                    <xsl:value-of select="atom:link"/>
                  </xsl:attribute>
                  <xsl:value-of select="atom:title"/>
                </a>
              </h2>
              <footer>
                <xsl:value-of select="atom:updated"/>
              </footer>
            </article>
          </xsl:for-each>
        </section>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>