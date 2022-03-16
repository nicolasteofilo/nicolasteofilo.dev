import type { AppProps } from 'next/app'
import Head from 'next/head'

import { GlobalStyles } from 'styles/global'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Nicolas Teófilo</title>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#06092b" />
        <meta
          name="description"
          content="Olá, sou Nicolas, sou desenvolvedor Front-end, apaixonado por tecnologia e muito mais."
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}
