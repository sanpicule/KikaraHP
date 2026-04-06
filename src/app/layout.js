import Body from '@/components/layouts/Body'

export const metadata = {
  title: 'Kikara | ミネラル醗酵ドリンク',
  description:
    '熊本発・ミネラル水で育てる手作り醗酵ドリンク。健康と美容のための自然素材ドリンクを料理教室でご体験いただけます。',
}

export default function RootLayout({ children }) {
  return (
    <>
      <html lang='ja'>
        {/* Adobe Fonts (futura-pt) — Replace YOUR_KIT_ID with your Typekit kit ID */}
        <head>
          <link rel='stylesheet' href='https://use.typekit.net/YOUR_KIT_ID.css' />
        </head>
        <Body>{children}</Body>
      </html>
    </>
  )
}
