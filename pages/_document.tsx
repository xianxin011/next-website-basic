import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document';

class CommonDocument extends Document {
  render() {
    return (
      <Html lang="zh">
        <Head>
          <meta name="theme-color"/>
        </Head>
        <body>
        <Main/>
        <NextScript/>
        </body>
      </Html>
    );
  }
}

CommonDocument.getInitialProps = async (ctx: DocumentContext) => {
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      // useful for wrapping the whole react tree
      enhanceApp: (App) => App,
      // useful for wrapping in a per-page basis
      enhanceComponent: (Component) => Component,
    });

  // Run the parent `getInitialProps`, it now includes the custom `renderPage`
  return await Document.getInitialProps(ctx);
};

export default CommonDocument;