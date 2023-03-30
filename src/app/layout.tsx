import { Header } from 'components/Header'
import { type Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

export const metadata: Metadata = {
  title: 'Nicolas Teófilo',
  authors: [
    {
      name: 'Nicolas Teófilo',
      url: 'https://nicolasteofilo.dev'
    }
  ]
}

const inter = Inter({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin']
})

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`bg-main color text-white px-16 sm:px-8 xl:w-1078px xl:px-0 m-auto ${inter.className}`}
      >
        <Header />
        {children}
      </body>
    </html>
  )
}
