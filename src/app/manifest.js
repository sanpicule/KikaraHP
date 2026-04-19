export default function manifest() {
  return {
    name: 'Kikara | ミネラル醗酵ドリンク',
    short_name: 'Kikara',
    description: '熊本発・ミネラル水で育てる手作り醗酵ドリンク。健康と美容のための自然素材ドリンクを料理教室でご体験いただけます。',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#6b3f1c',
    orientation: 'portrait',
    icons: [
      {
        src: '/icons/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any maskable',
      },
      {
        src: '/icons/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any maskable',
      },
    ],
  }
}
