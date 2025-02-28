import { motion } from 'framer-motion'
import Lottie from 'lottie-react'
import animationData from '@/public/animation.json'

const PageAnimation = ({ isTopPage }) => {
  return (
    <div>
      {/* 全ページ共通アニメーション */}
      <motion.div
        animate={{
          opacity: [1, 0.75, 0],
          transitionEnd: { display: 'none' },
        }}
        transition={{ duration: 2.2 }}
        className='fixed inset-0 left-0 top-0 z-50 h-screen overflow-hidden bg-secondary-brown [&>div]:-ml-[50vw] [&>div]:-mt-[30vh] [&>div]:h-[160vh] [&>div]:w-[200vw] xl:[&>div]:-mt-[10vh] xl:[&>div]:ml-0 xl:[&>div]:w-auto [&_svg]:object-cover'
      >
        <Lottie animationData={animationData} loop={false} rendererSettings={{ preserveAspectRatio: 'none' }} />
      </motion.div>

      {/* トップページ専用アニメーション */}
      {isTopPage && (
        <motion.div
          className='fixed left-0 top-0 z-40 h-svh w-full bg-kikara-white'
          animate={{ opacity: [1, 0.95, 0], transitionEnd: { display: 'none' } }}
          transition={{ duration: 2.8, times: [0, 0.95, 1] }}
        >
          <motion.div
            className='absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center'
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.95, 0] }}
            transition={{ duration: 2.8, times: [0, 0.95, 1] }}
          >
            <p className='text-xs md:text-md'>くらし・ととのう・さろん</p>
            <p className='text-4xl tracking-wide md:text-[4rem]'>Kikara</p>
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}

export default PageAnimation
