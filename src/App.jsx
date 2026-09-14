import { useLayoutEffect } from 'react'
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Projects from './pages/Projects'

function ScrollManager() {
  const { pathname, hash } = useLocation()

  useLayoutEffect(() => {
    if (hash) {
      const id = hash.replace('#', '')
      const frame = window.requestAnimationFrame(() => {
        const el = document.getElementById(id)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      })
      return () => window.cancelAnimationFrame(frame)
    }
    window.scrollTo(0, 0)
    return undefined
  }, [pathname, hash])

  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollManager />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
