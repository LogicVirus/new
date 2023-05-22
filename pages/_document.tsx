import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  const script = `
    (function() {
      const theme = localStorage.getItem('theme') || 'light';
      document.querySelector('body').className = theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-700';
    })()
  `;

  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="robots" content="follow, index" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <script dangerouslySetInnerHTML={{ __html: script }}/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
