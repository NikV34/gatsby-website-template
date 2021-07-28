import React from 'react';

const TITLE = 'Title';
const DESCRIPTION = 'Description';

export default function HTML({
  body,
  htmlAttributes,
  headComponents,
  bodyAttributes,
  preBodyComponents,
  postBodyComponents,
}) {
  return (
    <html lang="en" {...htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <title>{TITLE}</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta content={DESCRIPTION} name="description" />
        <meta content="website" property="og:type" />
        <meta content={TITLE} property="og:title" />
        <meta content={DESCRIPTION} property="og:description" />
        <meta content="url" property="og:image" />
        <meta content={TITLE} property="twitter:title" />
        <meta content={DESCRIPTION} property="twitter:description" />
        <meta content="url" property="twitter:image" />
        <meta content="summary_large_image" name="twitter:card" />
        <link rel="icon" href="/images/favicon/favicon-32.png" sizes="32x32" />
        <link rel="icon" href="/images/favicon/favicon-57.png" sizes="57x57" />
        <link rel="icon" href="/images/favicon/favicon-76.png" sizes="76x76" />
        <link rel="icon" href="/images/favicon/favicon-96.png" sizes="96x96" />
        <link rel="icon" href="/images/favicon/favicon-128.png" sizes="128x128" />
        <link rel="icon" href="/images/favicon/favicon-192.png" sizes="192x192" />
        <link rel="icon" href="/images/favicon/favicon-228.png" sizes="228x228" />
        <link rel="shortcut icon" href="/images/favicon/favicon-196.png" sizes="196x196" />
        <link rel="apple-touch-icon" href="/images//faviconfavicon-120.png" sizes="120x120" />
        <link rel="apple-touch-icon" href="/images/favicon/favicon-152.png" sizes="152x152" />
        <link rel="apple-touch-icon" href="/images/favicon/favicon-180.png" sizes="180x180" />
        <link rel="mask-icon" href="/images/favicon/safari-pinned-tab.svg" color="#5bbad5" />
        <link rel="shortcut icon" href="/images/favicon/favicon-48.ico" />
        <meta name="msapplication-TileColor" content="#FFFFFF" />
        <meta name="msapplication-TileImage" content="/images/favicon/favicon-144.png" />
        <meta name="msapplication-config" content="/images/favicon/browserconfig.xml" />
        {headComponents}
      </head>
      <body {...bodyAttributes}>
        {preBodyComponents}
        <div
          key="body"
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: body }}
        />
        {postBodyComponents}
      </body>
    </html>
  );
}
