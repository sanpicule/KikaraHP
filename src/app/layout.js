import Body from '@/components/layouts/Body'

export const metadata = {
  title: 'Kikara',
  description: 'Kikaraの公式サイト',
}

export default function RootLayout({ children }) {
  return (
    <>
      <html lang='ja'>
        <Body>{children}</Body>
      </html>
    </>
  )
}
