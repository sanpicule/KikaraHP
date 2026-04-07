import Body from '@/components/layouts/Body'

export const metadata = {
  title: 'Kikara | ミネラル醗酵ドリンク',
  description:
    '熊本発・ミネラル水で育てる手作り醗酵ドリンク。健康と美容のための自然素材ドリンクを料理教室でご体験いただけます。',
}

const adobeFontsKitId = process.env.NEXT_PUBLIC_ADOBE_FONTS_KIT_ID

export default function RootLayout({ children }) {
  return (
    <>
      <html lang='ja'>
        <head>
          {adobeFontsKitId ? <link rel='stylesheet' href={`https://use.typekit.net/${adobeFontsKitId}.css`} /> : null}
        </head>
        <Body>{children}</Body>
      </html>
    </>
  )
}
