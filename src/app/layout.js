import Body from '@/components/layouts/Body'

export const metadata = {
  title: 'Kikara | ミネラル醗酵ドリンク',
  description:
    '熊本発・ミネラル水で育てる手作り醗酵ドリンク。健康と美容のための自然素材ドリンクを料理教室でご体験いただけます。',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Kikara',
  },
  formatDetection: {
    telephone: false,
  },
}

const adobeFontsKitId = process.env.NEXT_PUBLIC_ADOBE_FONTS_KIT_ID

export default function RootLayout({ children }) {
  return (
    <>
      <html lang='ja'>
        <head>
          {adobeFontsKitId ? <link rel='stylesheet' href={`https://use.typekit.net/${adobeFontsKitId}.css`} /> : null}
          <meta name='theme-color' content='#6b3f1c' />
          <link rel='apple-touch-icon' href='/icons/icon-180x180.png' />
        </head>
        <Body>{children}</Body>
      </html>
    </>
  )
}
