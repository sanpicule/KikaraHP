import Footer from '../components/layouts/Footer'
import Header from '../components/layouts/Header'
import './globals.css'

export const metadata = {
  title: 'くらし・ととのう・サロン Kikara',
  description: 'くらし・ととのう・サロンKikaraの公式サイト',
}

export default function RootLayout({ children }) {
  return (
    <>
      <html lang='ja'>
        <body className='font-sans'>
          <Header />
          <main className='bg-kikara-white'>{children}</main>
          <Footer />
        </body>
      </html>
    </>
  )
}
