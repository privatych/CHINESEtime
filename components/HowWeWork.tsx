'use client'

import { motion } from 'framer-motion'
import { UserRound, Search, FileText, Receipt, Truck } from 'lucide-react'
import { Reveal } from './Reveal'

const steps = [
  {
    num: '01',
    icon: UserRound,
    title: 'Обращение к менеджеру',
    desc: 'Свяжитесь с персональным менеджером любым удобным способом. Мы быстро примем и обработаем ваш запрос.',
  },
  {
    num: '02',
    icon: Search,
    title: 'Поиск в Китае',
    desc: 'Отдел закупок найдёт нужную позицию по всем китайским площадкам, а также локально внутри Китая.',
  },
  {
    num: '03',
    icon: FileText,
    title: 'Выставление КП',
    desc: 'Подготовим коммерческое предложение с лучшими ценами и оптимальными сроками.',
  },
  {
    num: '04',
    icon: Receipt,
    title: 'Выставление счёта',
    desc: 'Бухгалтерия подготовит все необходимые документы с соблюдением всех сроков и договорённостей.',
  },
  {
    num: '05',
    icon: Truck,
    title: 'Доставка груза',
    desc: 'Отдел логистики организует доставку из Китая в Россию или от поставщика прямо до клиента.',
  },
]

export default function HowWeWork() {
  return (
    <section id="how" className="relative py-32 overflow-hidden" style={{ background: '#0A1020' }}>
      {/* Decorative line */}
      <div className="absolute inset-0 grid-bg pointer-events-none opacity-60" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E63946]/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E63946]/20 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Heading */}
        <Reveal>
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-[#E63946]" />
            <span className="text-[#E63946] text-sm font-semibold uppercase tracking-[0.2em]">Процесс работы</span>
            <div className="w-8 h-px bg-[#E63946]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Как мы <span className="red-gradient-text">работаем</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Прозрачный и отлаженный процесс на каждом этапе сотрудничества
          </p>
        </div>
        </Reveal>

        {/* Steps — desktop horizontal */}
        <div className="hidden lg:flex items-start gap-0 relative" style={{ perspective: '1000px' }}>
          {/* Animated connecting line */}
          <motion.div
            className="absolute top-8 left-[10%] right-[10%] h-px origin-left"
            style={{ background: 'linear-gradient(90deg, rgba(230,57,70,0.1), rgba(230,57,70,0.5), rgba(230,57,70,0.1))' }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          />
          {/* Connecting line */}
          <div className="absolute top-8 left-[10%] right-[10%] h-px bg-gradient-to-r from-[#E63946]/10 via-[#E63946]/40 to-[#E63946]/10" />

          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: 0.3 + i * 0.13 }}
                className="flex-1 relative flex flex-col items-center text-center px-3"
              >
                {/* Number badge */}
                <motion.div
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="relative z-10 mb-5"
                >
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto shadow-lg"
                    style={{
                      background:
                        i === 0
                          ? 'linear-gradient(135deg, #E63946, #c02030)'
                          : 'rgba(12,21,38,0.9)',
                      border: `2px solid ${i === 0 ? '#E63946' : 'rgba(230,57,70,0.25)'}`,
                      boxShadow: i === 0 ? '0 0 30px rgba(230,57,70,0.3)' : 'none',
                    }}
                  >
                    <Icon size={22} className={i === 0 ? 'text-white' : 'text-[#E63946]'} />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#E63946] flex items-center justify-center">
                    <span className="text-white text-[10px] font-black">{i + 1}</span>
                  </div>
                </motion.div>

                <h3 className="text-white font-bold text-base mb-2 leading-tight">{step.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            )
          })}
        </div>

        {/* Steps — mobile vertical */}
        <div className="lg:hidden space-y-4">
          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
                className="flex gap-5 p-5 rounded-2xl"
                style={{
                  background: 'rgba(12,21,38,0.6)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  backdropFilter: 'blur(12px)',
                }}
              >
                <div className="shrink-0">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{
                      background: 'linear-gradient(135deg, #E63946, #c02030)',
                    }}
                  >
                    <Icon size={18} className="text-white" />
                  </div>
                </div>
                <div>
                  <div className="text-[#E63946] text-xs font-bold mb-1">Шаг {step.num}</div>
                  <h3 className="text-white font-bold mb-1">{step.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
