import { useEffect, useState } from 'react'

function App() {
  const [token, setToken] = useState('')

  useEffect(() => {
    // Get everything after the first /
    const path = window.location.pathname.slice(1)
    // Remove leading/trailing slashes if any
    const clean = path.replace(/^\/+|\/+$/g, '')
    setToken(clean || '—')
  }, [])

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #0a0a15, #1a0033)',
        color: '#e0f0ff',
        fontWeight: 'bold',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          fontSize: 'clamp(3rem, 14vw, 16rem)',
          textAlign: 'center',
          padding: '0 5vw',
          wordBreak: 'break-all',
          lineHeight: '0.9',
          textShadow: '0 0 60px rgba(100, 180, 255, 0.5)',
          letterSpacing: '-0.04em',
        }}
      >
        {token}
      </div>
    </div>
  )
}

export default App
