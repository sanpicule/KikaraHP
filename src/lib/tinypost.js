// Tinypost API クライアント
// https://github.com/sanpicule/Tinypost の公開APIからお知らせを取得する
const BASE_URL = process.env.NEXT_PUBLIC_TINYPOST_API_URL ?? 'https://tinypost-three.vercel.app/api/tinypost/articles'
const API_KEY = process.env.NEXT_PUBLIC_TINYPOST_API_KEY

const buildHeaders = () => ({
  'Content-Type': 'application/json',
  ...(API_KEY ? { 'x-api-key': API_KEY } : {}),
})

export const fetchArticles = async ({ limit } = {}) => {
  const url = new URL(BASE_URL)
  if (limit !== undefined) url.searchParams.set('limit', String(limit))

  const res = await fetch(url.toString(), {
    method: 'GET',
    headers: buildHeaders(),
    cache: 'no-store',
  })
  if (!res.ok) {
    throw new Error(`Failed to fetch articles: ${res.status}`)
  }
  const json = await res.json()
  return { data: json.data ?? [], count: json.count ?? 0 }
}

export const fetchArticleById = async (id) => {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: 'GET',
    headers: buildHeaders(),
    cache: 'no-store',
  })
  if (res.status === 404) return null
  if (!res.ok) {
    throw new Error(`Failed to fetch article: ${res.status}`)
  }
  const json = await res.json()
  return json.data ?? null
}
