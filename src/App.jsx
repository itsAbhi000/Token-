import { useEffect, useState } from 'react'

function App() {
  const [token, setToken] = useState('')
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const path = window.location.pathname.slice(1).replace(/^\/+|\/+$/g, '')
    setToken(path || '—')
    // tiny delay for animation
    setTimeout(() => setLoaded(true), 100)
  }, [])

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(145deg, #0a001a, #1c0038, #2e005c)',
        padding: '2rem',
        fontFamily: '"Inter", system-ui, -apple-system, sans-serif',
      }}
    >
      <div
        style={{
          background: 'rgba(30, 30, 60, 0.25)',
          backdropFilter: 'blur(28px)',
          WebkitBackdropFilter: 'blur(28px)',
          border: '1px solid rgba(200, 180, 255, 0.12)',
          borderRadius: '32px',
          padding: '3.5rem 5rem',
          maxWidth: '94vw',
          boxShadow: '0 20px 60px rgba(0,0,0,0.6)',
          transition: 'all 1.2s cubic-bezier(0.34, 1.56, 0.64, 1)',
          opacity: loaded ? 1 : 0,
          transform: loaded ? 'scale(1)' : 'scale(0.92)',
        }}
      >
        <div
          style={{
            fontSize: 'clamp(4rem, 14vw, 16rem)',
            fontWeight: 900,
            letterSpacing: '-0.07em',
            textAlign: 'center',
            color: '#f0f4ff',
            wordBreak: 'break-all',
            lineHeight: 0.88,
            textShadow: '0 0 70px rgba(160, 140, 255, 0.45)',
          }}
        >
          {token}
        </div>
      </div>
    </div>
  )
}

export default App
