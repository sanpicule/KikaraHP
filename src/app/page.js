'use client'

import axios from 'axios'
import { useEffect, useState, useCallback } from 'react'
import NewsSection from '@/components/features/common/News'
import ConceptSection from '@/components/features/home/Concept'
import HeroSection from '@/components/features/home/Hero'
import ProfileSection from '@/components/features/home/Profile'
import ServiceIntroductionSection from '@/components/features/home/ServiceIntroduction'

export default function Home() {
  const [postIds, setPostIds] = useState([])
  const [posts, setPosts] = useState([])
  const accessToken = process.env.NEXT_PUBLIC_ACCESS_TOKEN
  const userId = process.env.NEXT_PUBLIC_USER_ID
  const limit = 6

  const removeTextAfterHash = useCallback((content) => {
    const hashIndex = content.indexOf('#')
    if (hashIndex !== -1) {
      return content.substring(0, hashIndex)
    }
    return content
  }, [])

  useEffect(() => {
    const getPostIds = async () => {
      try {
        const post_ids = await axios.get(`https://graph.facebook.com/v20.0/${userId}/media?access_token=${accessToken}`)
        setPostIds(post_ids.data.data)
      } catch (error) {
        // エラーをログに記録するだけにし、consoleは使用しない
      }
    }
    if (userId && accessToken) {
      getPostIds()
    }
  }, [userId, accessToken])

  useEffect(() => {
    const fields = ['like_count', 'username', 'permalink', 'media_url', 'caption', 'timestamp']

    const getPostInfo = async () => {
      if (postIds.length > 0) {
        try {
          const postPromises = postIds.map(async (postId) => {
            const postInfo = await axios.get(
              `https://graph.facebook.com/v20.0/${postId.id}?fields=${fields.join(',')}&access_token=${accessToken}`,
            )
            if (postInfo.data.caption) {
              return {
                id: postInfo.data.id,
                content: removeTextAfterHash(postInfo.data.caption),
                date: postInfo.data.timestamp,
                url: postInfo.data.permalink,
                mediaUrl: postInfo.data.media_url,
              }
            }
            return null
          })

          const postResults = await Promise.all(postPromises)
          const filteredPosts = postResults.filter((post) => post !== null && post.content !== '')
          setPosts(filteredPosts.slice(0, limit))
        } catch (error) {
          // エラーをログに記録するだけにし、consoleは使用しない
        }
      }
    }

    getPostInfo()
  }, [postIds, accessToken, removeTextAfterHash])

  return (
    <div className='text-center'>
      <HeroSection />
      <ConceptSection />
      <ProfileSection />
      <ServiceIntroductionSection />
      <NewsSection posts={posts} />
    </div>
  )
}
