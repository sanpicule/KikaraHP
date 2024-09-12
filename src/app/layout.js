import Body from '@/components/layouts/Body'

export const metadata = {
  title: 'くらし・ととのう・サロン Kikara',
  description: 'くらし・ととのう・サロンKikaraの公式サイト',
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
