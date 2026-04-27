'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'
import { Headphones, ShoppingBag, Eye, Package, BookOpen, Globe } from 'lucide-react'
import { Reveal, Stagger, StaggerChild } from './Reveal'

function TiltCard({ children, className, style }: { children: React.ReactNode; className?: string; style?: React.CSSProperties }) {
  const ref = useRef<HTMLDivElement>(null)

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current!
    const r = el.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width - 0.5
    const y = (e.clientY - r.top) / r.height - 0.5
    el.style.transform = `perspective(900px) rotateX(${-y * 12}deg) rotateY(${x * 12}deg) translateZ(8px) scale(1.02)`
    el.style.boxShadow = `${x * -20}px ${y * -20}px 40px rgba(230,57,70,0.08)`
  }
  const onLeave = () => {
    const el = ref.current!
    el.style.transform = 'perspective(900px) rotateX(0) rotateY(0) translateZ(0) scale(1)'
    el.style.boxShadow = 'none'
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={className}
      style={{ ...style, transition: 'transform 0.15s ease, box-shadow 0.15s ease' }}
    >
      {children}
    </div>
  )
}

const departments = [
  {
    icon: Headphones,
    name: 'Клиентский сервис',
    desc: 'Быстро примет и обработает ваш запрос, уточнит все детали и будет информировать на каждом этапе сделки.',
    color: '#E63946',
    bg: 'rgba(230,57,70,0.08)',
    border: 'rgba(230,57,70,0.2)',
  },
  {
    icon: ShoppingBag,
    name: 'Отдел закупок',
    desc: 'Найдёт любую позицию в Китае. Наработанная база поставщиков позволяет быстро предоставить КП с лучшими ценами.',
    color: '#F0A500',
    bg: 'rgba(240,165,0,0.08)',
    border: 'rgba(240,165,0,0.2)',
  },
  {
    icon: Eye,
    name: 'Контроль в Китае',
    desc: 'Локально проводит выездные инспекции на фабрики партнёров и ищет позиции на площадках, недоступных в России.',
    color: '#3B82F6',
    bg: 'rgba(59,130,246,0.08)',
    border: 'rgba(59,130,246,0.2)',
  },
  {
    icon: Package,
    name: 'Отдел логистики',
    desc: 'Доставит груз с проверкой и страхованием. По запросу — фото и видеофиксация в России и Китае.',
    color: '#10B981',
    bg: 'rgba(16,185,129,0.08)',
    border: 'rgba(16,185,129,0.2)',
  },
  {
    icon: BookOpen,
    name: 'Бухгалтерия',
    desc: 'Подготовит все необходимые документы с соблюдением всех сроков и договорённостей.',
    color: '#8B5CF6',
    bg: 'rgba(139,92,246,0.08)',
    border: 'rgba(139,92,246,0.2)',
  },
]

export default function Team() {
  return (
    <section id="team" className="relative py-32 bg-[#060B18] overflow-hidden" style={{ perspective: '1200px' }}>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#E63946]/[0.04] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <Reveal>
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-[#E63946]" />
            <span className="text-[#E63946] text-sm font-semibold uppercase tracking-[0.2em]">Команда</span>
            <div className="w-8 h-px bg-[#E63946]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Наша <span className="red-gradient-text">команда</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Интернациональная команда, большинство сотрудников которой в совершенстве
            владеют китайским языком. Работаем по китайскому и московскому времени.
          </p>
        </div>
        </Reveal>

        {/* International badge */}
        <Reveal delay={0.1}>
        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl"
            style={{
              background: 'rgba(240,165,0,0.08)',
              border: '1px solid rgba(240,165,0,0.2)',
            }}
          >
            <Globe size={18} className="text-[#F0A500]" />
            <span className="text-[#F0A500] font-medium text-sm">
              Работаем по московскому и пекинскому времени — быстрый ответ на любой запрос
            </span>
          </div>
        </div>
        </Reveal>

        {/* Cards */}
        <Stagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5" stagger={0.08}>
          {departments.map((dept, i) => {
            const Icon = dept.icon
            return (
              <StaggerChild key={i}>
              <TiltCard
                className="team-card group relative overflow-hidden"
                style={{
                  background: 'rgba(12,21,38,0.6)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  backdropFilter: 'blur(12px)',
                }}
              >
                {/* Animated glow on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                  style={{ background: `radial-gradient(circle at 50% 0%, ${dept.color}10, transparent 70%)` }}
                />

                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                  style={{ background: dept.bg, border: `1px solid ${dept.border}` }}
                >
                  <Icon size={24} style={{ color: dept.color }} />
                </motion.div>

                <h3 className="text-white font-bold text-lg mb-3">{dept.name}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{dept.desc}</p>

                {/* Bottom accent line */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-[2px] rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `linear-gradient(90deg, transparent, ${dept.color}, transparent)` }}
                />
              </TiltCard>
              </StaggerChild>
            )
          })}

          {/* Extra card: Cta */}
          <StaggerChild>
          <TiltCard
            className="team-card flex flex-col items-center justify-center text-center"
            style={{
              background: 'linear-gradient(135deg, rgba(230,57,70,0.12), rgba(230,57,70,0.04))',
              border: '1px solid rgba(230,57,70,0.2)',
              backdropFilter: 'blur(12px)',
            }}
          >
            <div className="text-4xl mb-4">🇨🇳</div>
            <h3 className="text-white font-bold text-lg mb-2">Нужна доставка?</h3>
            <p className="text-slate-400 text-sm mb-5">
              Свяжитесь с нами — обработаем запрос в кратчайшие сроки
            </p>
            <a
              href="#contacts"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-white text-sm font-semibold"
              style={{ background: 'linear-gradient(135deg, #E63946, #c02030)' }}
            >
              Связаться
            </a>
          </TiltCard>
          </StaggerChild>
        </Stagger>
      </div>
    </section>
  )
}
