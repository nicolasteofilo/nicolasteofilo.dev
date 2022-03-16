import { Head } from 'next/document'
import { Main } from 'components/Main'

export default function Home() {
  return (
    <>
      <Head>
        <title>Nicolas Teófilo</title>
        <meta name="description" content="Nicolas Teófilo" />
        <meta name="keywords" content="Nicolas Teófilo" />
        <meta name="author" content="Nicolas Teófilo" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#000000" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#000000" />
      </Head>
      <Main />
    </>
  )
}
