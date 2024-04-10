import MineralHero from '@/components/features/mineral/layout/Hero'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function MineralLayout({ children }) {
  return (
    <>
      <main>
        <MineralHero />
        <div>{children}</div>
      </main>
    </>
  )
}