import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import API_URL from './api'

const PostNew = () => {
  const [error, setError] = useState<string | null>(null)
  const [content, setContent] = useState('')
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()

  const handlePublish = async () => {
    setLoading(true)
    setError(null)

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: 0, content }),
      })

      if (!response.ok) {
        throw new Error('Ошибка при создании поста')
      }

      navigate(-1)
    } catch (err) {
      setError((err as Error).message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section>
      <h1>Создать новый пост</h1>
      {error && <p className="error">{error}</p>}

      <textarea
        className="post-new__textarea"
        disabled={loading}
        value={content}
        onChange={(event) => setContent(event.target.value)}
        placeholder="Введите текст поста"
      />

      <div className="post-new__buttons">
        <button disabled={loading} onClick={handlePublish}>
          {loading ? 'Сохранение...' : 'Опубликовать'}
        </button>
        <button disabled={loading} onClick={() => navigate(-1)}>
          Отмена
        </button>
      </div>
    </section>
  )
}

export default PostNew
