import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700;800;900&family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <meta name="description" content="21 sistemas de IA prontos para copiar, colar e aplicar hoje na sua empresa. Sem programar. Por apenas R$97." />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
