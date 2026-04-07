'use client'

import { motion } from 'framer-motion'
import SectionDecorator from '@/components/features/common/SectionDecorator'
import SectionHeader from '@/components/features/common/SectionHeader'
import useAnimation from '@/hooks/useAnimation'

const LPConcept = () => {
  const animate = useAnimation()

  return (
    <section id='concept' className='bg-primary-pink py-20'>
      <div className='flex justify-center xl:justify-between xl:px-[140px]'>
        <SectionDecorator label='Concept' />
        <div className='mx-auto w-full max-w-5xl px-4'>
          <motion.div
            variants={animate.scrollFadeInFromBottom}
            initial={animate.scrollFadeInFromBottom.initial}
            whileInView={animate.scrollFadeInFromBottom.whileInView}
            viewport={animate.scrollFadeInFromBottom.viewport}
          >
            <SectionHeader en='Concept' ja='コンセプト' />
          </motion.div>

          <motion.div
            variants={animate.scrollFadeInFromBottom}
            initial={animate.scrollFadeInFromBottom.initial}
            whileInView={animate.scrollFadeInFromBottom.whileInView}
            viewport={animate.scrollFadeInFromBottom.viewport}
            className='mt-10 max-w-2xl text-left'
          >
            <p className='text-sm italic leading-relaxed tracking-wide text-gray-400'>
              &ldquo;Nurtured by the mineral water of Kumamoto,
              <br />
              crafted with care for your daily wellness.&rdquo;
            </p>
            <p className='mt-8 text-base leading-[2] text-gray-600'>
              熊本の豊かなミネラル水を使い、ひとつひとつ丁寧に手作りする醗酵ドリンク。
              化学添加物を一切使わず、自然の素材だけで育てるこのドリンクは、
              飲む方の体の内側から、健康と美しさをサポートします。
            </p>
            <p className='mt-6 text-base leading-[2] text-gray-600'>
              少人数制の料理教室でご自身の手で作っていただくことで、
              食と向き合い、毎日の暮らしをより豊かにする体験をお届けします。
            </p>
          </motion.div>
        </div>
        <SectionDecorator label='Concept' />
      </div>
    </section>
  )
}

export default LPConcept
