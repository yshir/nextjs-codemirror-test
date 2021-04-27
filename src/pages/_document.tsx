import NextDocument, { Head, Html, Main, NextScript } from 'next/document';
import { ReactElement } from 'react';

class Document extends NextDocument {
  render(): ReactElement {
    return (
      <Html lang="ja">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
