import Footer from '../components/layouts/Footer'
import Header from '../components/layouts/Header'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'くらし・ととのう・サロン Kikara',
  description: 'くらし・ととのう・サロンKikaraの公式サイト',
}

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="ja">
        <body className="font-sans">
          <Header />
            <main className='pt-[85px]'>{children}</main>
          <Footer />
        </body>
      </html>
    </>
  )
}

