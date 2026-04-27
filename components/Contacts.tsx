'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from 'lucide-react'
import { Reveal } from './Reveal'

const contactInfo = [
  {
    icon: MapPin,
    label: 'Адрес',
    value: 'г. Москва, Малый Предтеченский, д. 1/2 стр. 1',
    color: '#E63946',
  },
  {
    icon: Phone,
    label: 'Телефон',
    value: '8-495-120-99-59',
    href: 'tel:84951209959',
    color: '#F0A500',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'info@chinesetime.ru',
    href: 'mailto:info@chinesetime.ru',
    color: '#3B82F6',
  },
  {
    icon: Clock,
    label: 'Часы работы',
    value: 'Пн–Пт: 09:00 – 18:00',
    color: '#10B981',
  },
]

export default function Contacts() {
  const [form, setForm] = useState({ name: '', phone: '', message: '' })
  const [consent, setConsent] = useState(false)
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!consent) return
    setSent(true)
    setForm({ name: '', phone: '', message: '' })
    setConsent(false)
  }

  return (
    <section id="contacts" className="relative py-32 bg-[#060B18] overflow-hidden">
      {/* Glow */}
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[400px] bg-[#E63946]/[0.05] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <Reveal>
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-[#E63946]" />
            <span className="text-[#E63946] text-sm font-semibold uppercase tracking-[0.2em]">Контакты</span>
            <div className="w-8 h-px bg-[#E63946]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Свяжитесь <span className="red-gradient-text">с нами</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Готовы ответить на любые вопросы и рассчитать стоимость доставки
          </p>
        </div>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left: Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-5"
          >
            {contactInfo.map((item, i) => {
              const Icon = item.icon
              const content = (
                <div
                  className="flex items-start gap-4 p-5 rounded-2xl hover-lift"
                  style={{
                    background: 'rgba(12,21,38,0.6)',
                    border: '1px solid rgba(255,255,255,0.06)',
                    backdropFilter: 'blur(12px)',
                  }}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: `${item.color}15`, border: `1px solid ${item.color}30` }}
                  >
                    <Icon size={18} style={{ color: item.color }} />
                  </div>
                  <div>
                    <div className="text-slate-500 text-xs font-medium uppercase tracking-wider mb-1">{item.label}</div>
                    <div className="text-white font-medium">{item.value}</div>
                  </div>
                </div>
              )
              return item.href ? (
                <a key={i} href={item.href}>{content}</a>
              ) : (
                <div key={i}>{content}</div>
              )
            })}

            {/* Social */}
            <div
              className="p-5 rounded-2xl"
              style={{
                background: 'rgba(12,21,38,0.6)',
                border: '1px solid rgba(255,255,255,0.06)',
                backdropFilter: 'blur(12px)',
              }}
            >
              <div className="text-slate-500 text-xs font-medium uppercase tracking-wider mb-4">Мессенджеры</div>
              <div className="flex gap-3">
                <a
                  href="https://wa.me/79254498440"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-white transition-all hover:scale-105"
                  style={{ background: 'rgba(37,211,102,0.15)', border: '1px solid rgba(37,211,102,0.3)' }}
                >
                  <MessageCircle size={16} className="text-[#25D366]" />
                  WhatsApp
                </a>
                <a
                  href="https://t.me/+79254498440"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-white transition-all hover:scale-105"
                  style={{ background: 'rgba(0,136,204,0.15)', border: '1px solid rgba(0,136,204,0.3)' }}
                >
                  <Send size={16} className="text-[#0088cc]" />
                  Telegram
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="p-8 rounded-3xl"
            style={{
              background: 'rgba(12,21,38,0.7)',
              border: '1px solid rgba(255,255,255,0.06)',
              backdropFilter: 'blur(16px)',
            }}
          >
            {sent ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-10">
                <div className="w-16 h-16 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center mb-5">
                  <Send size={24} className="text-green-400" />
                </div>
                <h3 className="text-white font-bold text-xl mb-2">Заявка отправлена!</h3>
                <p className="text-slate-400">Мы свяжемся с вами в ближайшее время.</p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-6 px-6 py-3 rounded-xl text-sm font-medium text-slate-300 hover:text-white transition-colors"
                  style={{ background: 'rgba(255,255,255,0.05)' }}
                >
                  Отправить ещё
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-white font-bold text-xl mb-6">Оставить заявку</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-slate-400 text-sm mb-2">Ваше имя</label>
                    <input
                      type="text"
                      required
                      placeholder="Иван Иванов"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl text-white placeholder-slate-600 outline-none focus:border-[#E63946]/50 transition-colors"
                      style={{
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(255,255,255,0.08)',
                      }}
                    />
                  </div>
                  <div>
                    <label className="block text-slate-400 text-sm mb-2">Телефон или email</label>
                    <input
                      type="text"
                      required
                      placeholder="+7 (___) ___-__-__"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl text-white placeholder-slate-600 outline-none focus:border-[#E63946]/50 transition-colors"
                      style={{
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(255,255,255,0.08)',
                      }}
                    />
                  </div>
                  <div>
                    <label className="block text-slate-400 text-sm mb-2">Сообщение</label>
                    <textarea
                      rows={4}
                      placeholder="Опишите ваш запрос..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl text-white placeholder-slate-600 outline-none resize-none transition-colors"
                      style={{
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(255,255,255,0.08)',
                      }}
                    />
                  </div>
                  {/* Required consent checkbox — 152-FZ */}
                  <label className="flex items-start gap-3 cursor-pointer group">
                    <div className="relative mt-0.5 shrink-0">
                      <input
                        type="checkbox"
                        required
                        checked={consent}
                        onChange={(e) => setConsent(e.target.checked)}
                        className="sr-only"
                      />
                      <div
                        className="w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all"
                        style={{
                          borderColor: consent ? '#E63946' : 'rgba(255,255,255,0.15)',
                          background: consent ? 'rgba(230,57,70,0.2)' : 'transparent',
                        }}
                      >
                        {consent && (
                          <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                            <path d="M1 4L3.5 6.5L9 1" stroke="#E63946" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        )}
                      </div>
                    </div>
                    <span className="text-xs text-slate-500 leading-relaxed group-hover:text-slate-400 transition-colors">
                      Я даю согласие на обработку моих персональных данных в соответствии
                      с Федеральным законом № 152-ФЗ и{' '}
                      <a href="/policy" target="_blank" rel="noopener noreferrer"
                        className="text-[#E63946] hover:underline" onClick={(e) => e.stopPropagation()}>
                        Политикой конфиденциальности
                      </a>
                      {' '}ООО «Чайниз Тайм»
                    </span>
                  </label>

                  <button
                    type="submit"
                    disabled={!consent}
                    className="btn-primary w-full justify-center text-base py-4 disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    <span className="flex items-center gap-2 justify-center">
                      <Send size={16} />
                      Отправить заявку
                    </span>
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
