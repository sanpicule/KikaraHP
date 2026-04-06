'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import SectionDecorator from '@/components/features/common/SectionDecorator'
import SectionHeader from '@/components/features/common/SectionHeader'
import faqData from '@/data/faq.json'
import useAnimation from '@/hooks/useAnimation'

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className='border-b border-gray-200'>
      <button className='flex w-full items-center justify-between py-5 text-left' onClick={onClick}>
        <span className='md:text-lg pr-4 text-base font-medium text-secondary-brown'>Q. {question}</span>
        <span
          className={`flex-shrink-0 text-2xl text-secondary-brown-light transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}
        >
          +
        </span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-5' : 'max-h-0'}`}>
        <p className='text-left text-sm leading-relaxed text-gray-600 md:text-base'>A. {answer}</p>
      </div>
    </div>
  )
}

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)
  const animate = useAnimation()

  return (
    <section id='faq' className='bg-white py-20'>
      <div className='flex justify-center xl:justify-between xl:px-[140px]'>
        <SectionDecorator label='FAQ' />
        <div className='mx-auto w-full max-w-5xl px-4'>
          <motion.div
            variants={animate.scrollFadeInFromBottom}
            initial={animate.scrollFadeInFromBottom.initial}
            whileInView={animate.scrollFadeInFromBottom.whileInView}
            viewport={animate.scrollFadeInFromBottom.viewport}
          >
            <SectionHeader en='FAQ' ja='よくある質問' />
          </motion.div>

          <motion.div
            variants={animate.scrollFadeInFromBottom}
            initial={animate.scrollFadeInFromBottom.initial}
            whileInView={animate.scrollFadeInFromBottom.whileInView}
            viewport={animate.scrollFadeInFromBottom.viewport}
            className='mt-12'
          >
            {faqData.map((item, index) => (
              <FAQItem
                key={index}
                question={item.question}
                answer={item.answer}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </motion.div>
        </div>
        <SectionDecorator label='FAQ' />
      </div>
    </section>
  )
}

export default FAQ
