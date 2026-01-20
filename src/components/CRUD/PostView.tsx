import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import type { Post } from '../../types/crud'
import './crud.css'
import API_URL from './api'

const PostView = () => {
  const [editing, setEditing] = useState(false)
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const [post, setPost] = useState<Post | null>(null)
  const [content, setContent] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(API_URL + id)
        if (!response.ok) {
          throw new Error('Ошибка загрузки поста')
        }
        const data = await response.json()
        setPost(data.post)
        setContent(data.post.content)
      } catch (err) {
        setError((err as Error).message)
      } finally {
        setLoading(false)
      }
    }

    fetchPost()
  }, [id])

  const handleDelete = async () => {
    await fetch(API_URL + id, {
      method: 'DELETE',
    })
    navigate(-1)
  }

  const handleSave = async () => {
    setLoading(true)
    setError(null)
    try {
      await fetch(API_URL + id, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: Number(id), content }),
      })

      setPost({ ...post!, content })
      setEditing(false)
    } catch (err) {
      setError((err as Error).message)
    } finally {
      setLoading(false)
    }
  }

  if (loading) return <p>Загрузка...</p>
  if (error || !post) return <p className="error">Пост не найден</p>

  return (
    <section>
      {!editing ? (
        <>
          <h1>Просмотр поста</h1>
          <div className="post-list__item">
            <p>{post.content}</p>
            <small>{new Date(post.created).toLocaleString()}</small>
          </div>

          <div className="post-view__buttons">
            <button onClick={() => setEditing(true)}>Редактировать</button>
            <button onClick={handleDelete}>Удалить</button>
            <button onClick={() => navigate(-1)}>Назад</button>
          </div>
        </>
      ) : (
        <>
          <h1>Редактирование поста</h1>
          <div className="post-list__item">
            <textarea
              className="post-new__textarea"
              value={content}
              onChange={(event) => setContent(event.target.value)}
            />

            <div className="post-view__buttons">
              <button onClick={handleSave}>Сохранить</button>
              <button onClick={() => setEditing(false)}>Отмена</button>
            </div>
          </div>
        </>
      )}
    </section>
  )
}

export default PostView
