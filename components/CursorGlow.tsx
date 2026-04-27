'use client'

import { useEffect, useRef } from 'react'

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null)
  const pos = useRef({ x: -400, y: -400 })
  const raf = useRef<number>(0)

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY }
    }
    window.addEventListener('mousemove', onMove, { passive: true })

    const loop = () => {
      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${pos.current.x - 300}px, ${pos.current.y - 300}px)`
      }
      raf.current = requestAnimationFrame(loop)
    }
    raf.current = requestAnimationFrame(loop)

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf.current)
    }
  }, [])

  return (
    <div
      ref={glowRef}
      className="fixed top-0 left-0 pointer-events-none z-[9998] will-change-transform"
      style={{
        width: 600,
        height: 600,
        background: 'radial-gradient(circle, rgba(230,57,70,0.055) 0%, transparent 65%)',
        borderRadius: '50%',
      }}
    />
  )
}
