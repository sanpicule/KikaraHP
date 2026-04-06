'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import SectionDecorator from '@/components/features/common/SectionDecorator'
import SectionHeader from '@/components/features/common/SectionHeader'
import useAnimation from '@/hooks/useAnimation'

const steps = [
  {
    number: '01',
    title: 'お問い合わせ・ご予約',
    description: 'お問い合わせフォームまたはSNSのDMから、料理教室の開催日程をご確認の上お申し込みください。',
  },
  {
    number: '02',
    title: '料理教室に参加',
    description:
      '少人数制の料理教室で、ミネラル水を使った醗酵ドリンクの作り方を丁寧にご説明します。材料はすべてご用意します。',
  },
  {
    number: '03',
    title: '自宅で醗酵・育てる',
    description: '教室で作ったドリンクを自宅にお持ち帰りいただき、約3ヶ月間毎日少しお世話しながら醗酵させます。',
  },
  {
    number: '04',
    title: '完成・お楽しみください',
    description: '3ヶ月後に完成したドリンクを毎日の健康・美容ケアにお役立てください。料理の調味料としても使えます。',
  },
]

const HowToBuy = () => {
  const animate = useAnimation()

  return (
    <section id='how-to-buy' className='bg-primary-pink py-20'>
      <div className='flex justify-center xl:justify-between xl:px-[140px]'>
        <SectionDecorator label='How to Join' />
        <div className='mx-auto w-full max-w-5xl px-4'>
          <motion.div
            variants={animate.scrollFadeInFromBottom}
            initial={animate.scrollFadeInFromBottom.initial}
            whileInView={animate.scrollFadeInFromBottom.whileInView}
            viewport={animate.scrollFadeInFromBottom.viewport}
          >
            <SectionHeader en='How to Join' ja='購入・申込方法' />
            <p className='mt-6 text-sm leading-relaxed text-gray-600 md:text-base'>
              4つのステップで、あなただけの醗酵ドリンクが完成します。
            </p>
          </motion.div>

          <div className='mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4'>
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={animate.scrollFadeInFromBottom}
                initial={animate.scrollFadeInFromBottom.initial}
                whileInView={animate.scrollFadeInFromBottom.whileInView}
                viewport={animate.scrollFadeInFromBottom.viewport}
                custom={index}
                className='bg-white p-6 text-left'
              >
                <span className='text-4xl font-thin text-secondary-brown-light'>{step.number}</span>
                <div className='my-3 h-px w-8 bg-secondary-brown-light opacity-40' />
                <h3 className='mt-3 text-base font-medium tracking-wide text-gray-800'>{step.title}</h3>
                <p className='mt-3 text-sm leading-relaxed text-gray-500'>{step.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={animate.scrollFadeInFromBottom}
            initial={animate.scrollFadeInFromBottom.initial}
            whileInView={animate.scrollFadeInFromBottom.whileInView}
            viewport={animate.scrollFadeInFromBottom.viewport}
            className='mt-12 flex justify-center md:justify-start'
          >
            <Link href='/contact'>
              <button className='border border-secondary-brown px-12 py-4 text-sm tracking-widest text-secondary-brown transition duration-300 hover:bg-secondary-brown hover:text-white'>
                お問い合わせ・ご予約はこちら
              </button>
            </Link>
          </motion.div>
        </div>
        <SectionDecorator label='How to Join' />
      </div>
    </section>
  )
}

export default HowToBuy
