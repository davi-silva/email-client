import Document, { Head, Main, NextScript, Html } from 'next/document';
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html lang='en-ca'>
        <Head>
          {process.env.NODE_ENV !== 'production' && (
            <link
              rel='stylesheet'
              type='text/css'
              href={`/_next/static/css/styles.chunk.css?v=${Date.now()}`}
            />
          )}
          <link
            href='https://fonts.googleapis.com/css?family=Montserrat&display=swap'
            rel='stylesheet'
          />
          <script
            async
            src='https://www.googletagmanager.com/gtag/js?id=UA-179966128-1'
          />
          <meta
            name='copyright'
            content={`© ${new Date().getFullYear()} Canada Cannabyss`}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}