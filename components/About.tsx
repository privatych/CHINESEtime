'use client'

import { motion } from 'framer-motion'
import { Building2, MapPin, Globe2, TrendingUp } from 'lucide-react'
import { Reveal, Stagger, StaggerChild } from './Reveal'

const fadeLeft = { hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] } } }
const fadeRight = { hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] } } }

const milestones = [
  {
    year: '2020',
    title: 'Основание компании',
    desc: 'Старт с фокусом на сотрудничество с Китаем — поиск, выкуп и доставка товаров для маркетплейсов.',
  },
  {
    year: '2022',
    title: 'Промышленное оборудование',
    desc: 'Акцент на работу с промышленным оборудованием. Открытие технического отдела и собственного склада в Гуанчжоу.',
  },
  {
    year: 'Сейчас',
    title: 'Международный масштаб',
    desc: 'Работаем по китайскому и московскому времени. Планируем открытие офисов в Китае и складов по всей России.',
  },
]

const warehouses = [
  {
    icon: MapPin,
    city: 'Москва',
    desc: 'Собственный склад в России для хранения и распределения грузов',
    color: '#E63946',
  },
  {
    icon: Globe2,
    city: 'Гуанчжоу',
    desc: 'Склад в провинции Гуандун — прямой доступ к китайским поставщикам',
    color: '#F0A500',
  },
]

export default function About() {
  return (
    <section id="about" className="relative py-32 bg-[#060B18] overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#E63946]/[0.04] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section label */}
        <Reveal>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-px bg-[#E63946]" />
          <span className="text-[#E63946] text-sm font-semibold uppercase tracking-[0.2em]">О нас</span>
        </div>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: text */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
            variants={fadeLeft}
          >
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-6">
              Ваш надежный
              <br />
              <span className="red-gradient-text">партнер</span> в доставке
              <br />
              грузов из Китая
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-6">
              Наша компания, основанная в 2020 году, с самого начала сосредоточила
              своё внимание на сотрудничестве с Китаем. Мы занимаемся поиском,
              выкупом и доставкой товаров — от простых запросов для маркетплейсов
              до сложных требований в сфере промышленности.
            </p>
            <p className="text-slate-400 text-lg leading-relaxed mb-10">
              С 2022 года мы открыли технический отдел на аутсорсе для проверки
              характеристик товара. Ищем товары по всем китайским площадкам, а
              также локально внутри Китая. По основным брендам у нас сформирована
              база проверенных партнёров.
            </p>

            {/* Warehouse cards */}
            <Stagger className="grid sm:grid-cols-2 gap-4" stagger={0.12}>
              {warehouses.map((w) => {
                const Icon = w.icon
                return (
                  <StaggerChild key={w.city}>
                  <motion.div
                    whileHover={{ y: -4, scale: 1.02 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    className="p-5 rounded-2xl cursor-default"
                    style={{
                      backgroundColor: 'rgba(12,21,38,0.6)',
                      border: '1px solid rgba(255,255,255,0.06)',
                      backdropFilter: 'blur(12px)',
                    }}
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                      style={{ background: `${w.color}18`, border: `1px solid ${w.color}30` }}
                    >
                      <Icon size={18} style={{ color: w.color }} />
                    </div>
                    <div className="text-white font-bold mb-1">Склад — {w.city}</div>
                    <div className="text-slate-400 text-sm">{w.desc}</div>
                  </motion.div>
                  </StaggerChild>
                )
              })}
            </Stagger>
          </motion.div>

          {/* Right: timeline */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
            variants={fadeRight}
            className="relative"
          >
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[#E63946]/50 via-[#E63946]/20 to-transparent" />
            <div className="space-y-8">
              {milestones.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: i * 0.15 }}
                  className="relative pl-16"
                >
                  {/* Dot */}
                  <div className="absolute left-0 top-1 w-12 h-12 rounded-full flex items-center justify-center"
                    style={{
                      background: i === milestones.length - 1
                        ? 'linear-gradient(135deg, #E63946, #c02030)'
                        : 'rgba(12,21,38,0.9)',
                      border: `2px solid ${i === milestones.length - 1 ? '#E63946' : 'rgba(230,57,70,0.3)'}`,
                    }}
                  >
                    {i === milestones.length - 1 ? (
                      <TrendingUp size={16} className="text-white" />
                    ) : (
                      <Building2 size={16} className="text-[#E63946]" />
                    )}
                  </div>

                  <motion.div
                    whileHover={{ x: 4 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className="p-6 rounded-2xl"
                    style={{
                      backgroundColor: 'rgba(12,21,38,0.6)',
                      border: '1px solid rgba(255,255,255,0.06)',
                      backdropFilter: 'blur(12px)',
                    }}
                  >
                    <div className="text-[#E63946] text-sm font-bold uppercase tracking-widest mb-2">{m.year}</div>
                    <div className="text-white font-bold text-lg mb-2">{m.title}</div>
                    <div className="text-slate-400 text-sm leading-relaxed">{m.desc}</div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
