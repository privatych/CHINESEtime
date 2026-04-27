'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, MessageCircle } from 'lucide-react'

/* ─── Particle Canvas ─────────────────────────────────────── */
function ParticleCanvas() {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current!
    const ctx = canvas.getContext('2d')!
    let raf: number

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    const ro = new ResizeObserver(resize)
    ro.observe(canvas)

    const N = 70
    type P = { x: number; y: number; vx: number; vy: number; r: number; o: number }
    const pts: P[] = Array.from({ length: N }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      r: Math.random() * 1.8 + 0.4,
      o: Math.random() * 0.45 + 0.1,
    }))

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      for (const p of pts) {
        p.x = (p.x + p.vx + canvas.width) % canvas.width
        p.y = (p.y + p.vy + canvas.height) % canvas.height
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(230,57,70,${p.o})`
        ctx.fill()
      }
      for (let i = 0; i < N; i++) {
        for (let j = i + 1; j < N; j++) {
          const dx = pts[i].x - pts[j].x
          const dy = pts[i].y - pts[j].y
          const d = Math.sqrt(dx * dx + dy * dy)
          if (d < 130) {
            ctx.beginPath()
            ctx.moveTo(pts[i].x, pts[i].y)
            ctx.lineTo(pts[j].x, pts[j].y)
            ctx.strokeStyle = `rgba(230,57,70,${0.09 * (1 - d / 130)})`
            ctx.lineWidth = 0.6
            ctx.stroke()
          }
        }
      }
      raf = requestAnimationFrame(draw)
    }
    draw()
    return () => { cancelAnimationFrame(raf); ro.disconnect() }
  }, [])

  return <canvas ref={ref} className="absolute inset-0 w-full h-full" />
}

/* ─── Stats ───────────────────────────────────────────────── */
const stats = [
  { value: 2020, label: 'Год основания', prefix: '', suffix: '' },
  { value: 2, label: 'Склада', prefix: '', suffix: '' },
  { value: 4, label: 'Способа доставки', prefix: '', suffix: '' },
  { value: 5, label: 'Отделов', prefix: '', suffix: '+' },
]

/* ─── Animation variants ──────────────────────────────────── */
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.13, delayChildren: 0.35 } },
}
const word = {
  hidden: { opacity: 0, y: 80, rotateX: -15 },
  show: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
}
const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1], delay } },
})

/* ─── Hero ─────────────────────────────────────────────────── */
export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-[#060B18]">

      {/* Particle canvas */}
      <div className="absolute inset-0 z-0">
        <ParticleCanvas />
      </div>

      {/* Glowing orbs */}
      <div className="absolute top-[-15%] left-[-8%] w-[700px] h-[700px] rounded-full bg-[#E63946]/[0.07] blur-[140px] animate-float pointer-events-none z-0" />
      <div className="absolute bottom-[-15%] right-[-8%] w-[600px] h-[600px] rounded-full bg-[#1a3a6b]/25 blur-[140px] animate-float2 pointer-events-none z-0" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full bg-[#E63946]/[0.025] blur-[100px] animate-pulse-glow pointer-events-none z-0" />

      {/* Grid */}
      <div className="absolute inset-0 grid-bg pointer-events-none z-0" />

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6 pt-28 pb-12">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/[0.08] mb-10"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E63946] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E63946]" />
          </span>
          <span className="text-slate-300 text-sm font-medium tracking-wide">
            Официальный партнер ведущих брендов
          </span>
        </motion.div>

        {/* Heading — stagger each line */}
        <div style={{ perspective: '1200px' }}>
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="flex flex-col items-center gap-1"
          >
            {['Доставка', 'грузов', 'из Китая', 'в Россию'].map((line, i) => (
              <motion.div key={i} variants={word} style={{ transformOrigin: 'bottom center' }}>
                <span
                  className={`block font-black leading-[0.93] tracking-tight ${
                    i < 2
                      ? 'text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white'
                      : i === 2
                      ? 'text-5xl sm:text-6xl md:text-7xl lg:text-8xl'
                      : 'text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-slate-300'
                  }`}
                >
                  {i === 2 ? (
                    <>
                      из{' '}
                      <span className="red-gradient-text">Китая</span>
                    </>
                  ) : line}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Tagline */}
        <motion.p
          variants={fadeUp(0.9)}
          initial="hidden"
          animate="show"
          className="text-xl md:text-2xl text-slate-400 font-light tracking-wider mt-8 mb-10"
        >
          <span className="text-white font-semibold">Быстро.</span>{' '}
          <span className="text-white font-semibold">Надежно.</span>{' '}
          <span className="gold-gradient-text font-semibold">Выгодно.</span>
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={fadeUp(1.05)}
          initial="hidden"
          animate="show"
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <motion.a
            href="https://wa.me/79254498440"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            whileHover={{ scale: 1.05, boxShadow: '0 20px 50px rgba(230,57,70,0.35)' }}
            whileTap={{ scale: 0.97 }}
          >
            <span className="flex items-center gap-2">
              <MessageCircle size={18} />
              Связаться с нами
              <ArrowRight size={16} />
            </span>
          </motion.a>
          <motion.a
            href="#about"
            className="btn-outline"
            whileHover={{ scale: 1.04, borderColor: 'rgba(230,57,70,0.5)' }}
            whileTap={{ scale: 0.97 }}
          >
            Узнать подробнее
          </motion.a>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={fadeUp(1.2)}
          initial="hidden"
          animate="show"
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20 w-full max-w-4xl"
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              className="stat-card"
              whileHover={{ scale: 1.05, borderColor: 'rgba(230,57,70,0.25)', y: -4 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <div className="text-3xl md:text-4xl font-black text-white mb-1">
                {s.prefix}{s.value}{s.suffix}
              </div>
              <div className="text-slate-400 text-sm font-medium">{s.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="relative z-10 flex justify-center pb-10"
      >
        <div className="flex flex-col items-center gap-2 text-slate-600">
          <span className="text-xs uppercase tracking-[0.2em] font-medium">Scroll</span>
          <motion.div
            animate={{ scaleY: [1, 0, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-px h-10 bg-gradient-to-b from-slate-600 to-transparent origin-top"
          />
        </div>
      </motion.div>
    </section>
  )
}
