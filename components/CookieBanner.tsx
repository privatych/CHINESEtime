'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Cookie, X, ShieldCheck } from 'lucide-react'
import Link from 'next/link'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    try {
      const consent = localStorage.getItem('ct_cookie_consent')
      if (!consent) setVisible(true)
    } catch {}
  }, [])

  const accept = () => {
    try { localStorage.setItem('ct_cookie_consent', 'accepted') } catch {}
    setVisible(false)
  }

  const decline = () => {
    try { localStorage.setItem('ct_cookie_consent', 'declined') } catch {}
    setVisible(false)
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 120, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 120, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 260, damping: 28 }}
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:max-w-lg z-[99990]"
          style={{
            background: 'rgba(10,16,30,0.97)',
            border: '1px solid rgba(230,57,70,0.25)',
            borderRadius: '20px',
            backdropFilter: 'blur(20px)',
            boxShadow: '0 24px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.04)',
          }}
        >
          <div className="p-5">
            <div className="flex items-start gap-3 mb-4">
              <div className="w-9 h-9 rounded-xl bg-[#E63946]/15 border border-[#E63946]/25 flex items-center justify-center shrink-0 mt-0.5">
                <Cookie size={16} className="text-[#E63946]" />
              </div>
              <div>
                <p className="text-white font-semibold text-sm mb-1">Мы используем файлы cookie</p>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Сайт использует cookie-файлы и аналогичные технологии для обеспечения работы
                  сервиса и улучшения качества обслуживания. Используя сайт, вы соглашаетесь
                  с нашей{' '}
                  <Link href="/policy" className="text-[#E63946] hover:underline">
                    Политикой конфиденциальности
                  </Link>
                  .
                </p>
              </div>
              <button onClick={decline} className="text-slate-500 hover:text-white transition-colors ml-auto shrink-0">
                <X size={16} />
              </button>
            </div>

            <div className="flex gap-2">
              <button
                onClick={accept}
                className="flex-1 flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-white text-sm font-semibold transition-all hover:opacity-90"
                style={{ background: 'linear-gradient(135deg, #E63946, #c02030)' }}
              >
                <ShieldCheck size={14} />
                Принять всё
              </button>
              <button
                onClick={decline}
                className="flex-1 px-4 py-2.5 rounded-xl text-slate-400 hover:text-white text-sm font-medium transition-colors"
                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
              >
                Только необходимые
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
