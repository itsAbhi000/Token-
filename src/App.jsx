
import { useParams } from 'react-router-dom'

function App() {
  // This works automatically on Vercel/Netlify because of the rewrite rule
  const { token = '' } = useParams()

  const displayText = token || "—no token—"

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #0f0f1a, #1a1a3a)',
        color: 'white',
        fontFamily: 'system-ui, sans-serif',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          fontSize: 'clamp(2rem, 12vw, 12rem)',
          fontWeight: 'bold',
          letterSpacing: '-0.05em',
          textAlign: 'center',
          padding: '0 5vw',
          wordBreak: 'break-all',
          textShadow: '0 0 40px rgba(100,200,255,0.4)',
        }}
      >
        {displayText}
      </div>
    </div>
  )
}

// For GitHub readme & quick testing without router
// But on Vercel we use the rewrite trick below
export default App
