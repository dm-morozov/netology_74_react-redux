import { useEffect, useState } from 'react'
import type { Post } from '../../types/crud'
import { Link } from 'react-router-dom'
import './crud.css'
import API_URL from './api'

const PostList = () => {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(API_URL)
        if (!response.ok) {
          throw new Error('Ошибка загрузки постов')
        }

        const data: Post[] = await response.json()
        setPosts(data)
      } catch (err) {
        setError((err as Error).message)
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [])

  if (loading) {
    return <p>Загрузка...</p>
  }

  if (error) {
    return <p className="error">{error}</p>
  }

  return (
    <section>
      <h1>Список постов</h1>

      <Link to="posts/new">
        <button>Создать пост</button>
      </Link>

      {posts.length === 0 ? (
        <p>Постов пока нет, нажмите "Создать пост"</p>
      ) : (
        <ul className="post-list">
          {posts.map((post) => (
            <li key={post.id} className="post-list__item">
              <Link to={'posts/' + post.id}>
                <p>{post.content}</p>
                <small>{new Date(post.created).toLocaleString()}</small>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}

export default PostList
