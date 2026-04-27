'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'
import { Plane, Truck, Package, Train, Clock, ArrowRight } from 'lucide-react'
import { Reveal, Stagger, StaggerChild } from './Reveal'

function TiltCard({ children, className, style }: { children: React.ReactNode; className?: string; style?: React.CSSProperties }) {
  const ref = useRef<HTMLDivElement>(null)
  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current!
    const r = el.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width - 0.5
    const y = (e.clientY - r.top) / r.height - 0.5
    el.style.transform = `perspective(900px) rotateX(${-y * 10}deg) rotateY(${x * 10}deg) translateZ(12px) scale(1.02)`
  }
  const onLeave = () => {
    const el = ref.current!
    el.style.transform = 'perspective(900px) rotateX(0) rotateY(0) translateZ(0) scale(1)'
  }
  return (
    <div ref={ref} onMouseMove={onMove} onMouseLeave={onLeave} className={className}
      style={{ ...style, transition: 'transform 0.15s ease' }}>
      {children}
    </div>
  )
}

const methods = [
  {
    icon: Plane,
    title: 'Авиатранспорт',
    days: '3–5',
    label: 'дней',
    desc: 'Самый быстрый способ доставки. Идеален для срочных грузов, электроники и малогабаритных товаров.',
    color: '#E63946',
    bg: 'linear-gradient(135deg, rgba(230,57,70,0.12), rgba(230,57,70,0.04))',
    border: 'rgba(230,57,70,0.25)',
    tag: 'Экспресс',
    tagColor: '#E63946',
  },
  {
    icon: Truck,
    title: 'Экспресс авто',
    days: '13–15',
    label: 'дней',
    desc: 'Оптимальный баланс между скоростью и стоимостью. Подходит для средних и крупных партий товара.',
    color: '#F0A500',
    bg: 'linear-gradient(135deg, rgba(240,165,0,0.12), rgba(240,165,0,0.04))',
    border: 'rgba(240,165,0,0.25)',
    tag: 'Популярно',
    tagColor: '#F0A500',
  },
  {
    icon: Package,
    title: 'Стандартная доставка',
    days: '15–18',
    label: 'дней',
    desc: 'Универсальный вариант для большинства грузов. Надёжная доставка по выгодной стоимости.',
    color: '#3B82F6',
    bg: 'linear-gradient(135deg, rgba(59,130,246,0.12), rgba(59,130,246,0.04))',
    border: 'rgba(59,130,246,0.25)',
    tag: 'Выгодно',
    tagColor: '#3B82F6',
  },
  {
    icon: Train,
    title: 'Ж/Д доставка',
    days: '25–30',
    label: 'дней',
    desc: 'Экономичный выбор для крупных и тяжёлых грузов. Отличается стабильностью и надёжностью.',
    color: '#10B981',
    bg: 'linear-gradient(135deg, rgba(16,185,129,0.12), rgba(16,185,129,0.04))',
    border: 'rgba(16,185,129,0.25)',
    tag: 'Эконом',
    tagColor: '#10B981',
  },
]

export default function DeliveryMethods() {
  return (
    <section id="delivery" className="relative py-32 overflow-hidden" style={{ background: '#0A1020', perspective: '1200px' }}>
      <div className="absolute inset-0 grid-bg pointer-events-none opacity-50" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E63946]/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E63946]/20 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Heading */}
        <Reveal>
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-[#E63946]" />
            <span className="text-[#E63946] text-sm font-semibold uppercase tracking-[0.2em]">Логистика</span>
            <div className="w-8 h-px bg-[#E63946]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Способы <span className="red-gradient-text">доставки</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Выберите оптимальный маршрут доставки под ваши требования и бюджет
          </p>
        </div>
        </Reveal>

        {/* Cards grid */}
        <Stagger className="grid sm:grid-cols-2 xl:grid-cols-4 gap-5" stagger={0.1}>
          {methods.map((m, i) => {
            const Icon = m.icon
            return (
              <StaggerChild key={i}>
              <TiltCard
                className="delivery-card group relative"
                style={{ background: m.bg, border: `1px solid ${m.border}` }}
              >
                {/* Tag */}
                <div
                  className="absolute top-5 right-5 px-2.5 py-1 rounded-full text-xs font-bold"
                  style={{ background: `${m.tagColor}20`, color: m.tagColor, border: `1px solid ${m.tagColor}30` }}
                >
                  {m.tag}
                </div>

                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110"
                  style={{ background: `${m.color}15`, border: `1px solid ${m.color}30` }}
                >
                  <Icon size={26} style={{ color: m.color }} />
                </div>

                {/* Time */}
                <div className="mb-4">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-4xl font-black text-white">{m.days}</span>
                    <div className="flex items-center gap-1 text-slate-400">
                      <Clock size={13} />
                      <span className="text-sm">{m.label}</span>
                    </div>
                  </div>
                </div>

                <h3 className="text-white font-bold text-lg mb-3">{m.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-5">{m.desc}</p>

                <a
                  href="#contacts"
                  className="inline-flex items-center gap-2 text-sm font-medium transition-all"
                  style={{ color: m.color }}
                >
                  Узнать стоимость
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </TiltCard>
              </StaggerChild>
            )
          })}
        </Stagger>

        {/* Bottom note */}
        <div className="mt-10 text-center">
          <p className="text-slate-500 text-sm">
            Все сроки указаны с момента отправки со склада в Китае. Точные сроки зависят от типа груза и маршрута.
          </p>
        </div>
      </div>
    </section>
  )
}
