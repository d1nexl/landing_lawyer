'use client'

import { useState, useEffect, useCallback } from 'react'
import { Trash2, LogIn, Star, RefreshCw } from 'lucide-react'

interface Review {
  id: number
  name: string
  text: string
  rating: number
  createdAt: string
}

export default function AdminReviews() {
  const [password, setPassword] = useState('')
  const [authed, setAuthed] = useState(false)
  const [authError, setAuthError] = useState(false)
  const [reviews, setReviews] = useState<Review[]>([])
  const [loading, setLoading] = useState(false)
  const [deletingId, setDeletingId] = useState<number | null>(null)

  const fetchReviews = useCallback(async () => {
    setLoading(true)
    try {
      const res = await fetch('/api/reviews')
      setReviews(await res.json())
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    if (authed) fetchReviews()
  }, [authed, fetchReviews])

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // Перевірка пароля через спроб видалення неіснуючого запису
    setAuthed(true)
    setAuthError(false)
  }

  const handleDelete = async (id: number) => {
    if (!confirm('Видалити цей відгук?')) return
    setDeletingId(id)
    try {
      const res = await fetch(`/api/reviews/${id}`, {
        method: 'DELETE',
        headers: { 'x-admin-password': password },
      })
      if (res.status === 401) {
        setAuthError(true)
        setAuthed(false)
        return
      }
      setReviews(prev => prev.filter(r => r.id !== id))
    } finally {
      setDeletingId(null)
    }
  }

  if (!authed) {
    return (
      <div className="min-h-screen bg-[#0A1220] flex items-center justify-center px-4">
        <form
          onSubmit={handleLogin}
          className="w-full max-w-sm bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col gap-4"
        >
          <h1 className="font-serif text-2xl text-white text-center mb-2">Адмін — відгуки</h1>
          {authError && (
            <p className="text-red-400 text-sm text-center">Невірний пароль</p>
          )}
          <input
            type="password"
            required
            placeholder="Пароль"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#C9A96E]/50 transition-all"
          />
          <button
            type="submit"
            className="flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold text-[#0A1220]"
            style={{ background: 'linear-gradient(135deg, #C9A96E, #dfc06d)' }}
          >
            <LogIn size={16} />
            Увійти
          </button>
        </form>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#0A1220] px-4 py-10">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="font-serif text-2xl text-white">
            Відгуки <span className="text-[#C9A96E]">({reviews.length})</span>
          </h1>
          <button
            onClick={fetchReviews}
            disabled={loading}
            className="flex items-center gap-2 px-4 py-2 rounded-xl border border-white/10 text-white/50 hover:text-white text-sm transition-colors"
          >
            <RefreshCw size={14} className={loading ? 'animate-spin' : ''} />
            Оновити
          </button>
        </div>

        {loading && reviews.length === 0 ? (
          <p className="text-white/30 text-center py-20">Завантаження...</p>
        ) : reviews.length === 0 ? (
          <p className="text-white/30 text-center py-20">Відгуків ще немає</p>
        ) : (
          <div className="flex flex-col gap-4">
            {reviews.map(r => (
              <div
                key={r.id}
                className="bg-white/5 border border-white/8 rounded-2xl p-5 flex gap-4 items-start"
              >
                <div className="w-10 h-10 rounded-full bg-[#C9A96E]/20 border border-[#C9A96E]/30 flex items-center justify-center flex-shrink-0">
                  <span className="font-serif text-base text-[#C9A96E]">{r.name[0]?.toUpperCase()}</span>
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <p className="text-white font-semibold text-sm">{r.name}</p>
                    <div className="flex gap-0.5">
                      {[...Array(r.rating)].map((_, i) => (
                        <Star key={i} size={11} className="fill-[#C9A96E] text-[#C9A96E]" />
                      ))}
                    </div>
                  </div>
                  <p className="text-white/60 text-sm leading-relaxed mb-2">{r.text}</p>
                  <p className="text-white/25 text-xs">
                    {new Date(r.createdAt).toLocaleString('uk-UA')}
                  </p>
                </div>

                <button
                  onClick={() => handleDelete(r.id)}
                  disabled={deletingId === r.id}
                  className="flex-shrink-0 p-2 rounded-xl text-white/30 hover:text-red-400 hover:bg-red-400/10 transition-all disabled:opacity-40"
                  title="Видалити"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
