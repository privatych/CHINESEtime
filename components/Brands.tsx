'use client'

import { motion } from 'framer-motion'
import { Reveal } from './Reveal'

const row1 = [
  { name: 'Xiaomi',     sub: 'Электроника' },
  { name: 'DJI',        sub: 'Дроны и камеры' },
  { name: 'Huawei',     sub: 'Телекоммуникации' },
  { name: 'Haier',      sub: 'Бытовая техника' },
  { name: 'Midea',      sub: 'Климатическая техника' },
  { name: 'TCL',        sub: 'Электроника' },
  { name: 'Hisense',    sub: 'Телевизоры' },
  { name: 'BYD',        sub: 'Электромобили' },
  { name: 'CATL',       sub: 'Аккумуляторы' },
  { name: 'Lenovo',     sub: 'Компьютеры' },
  { name: 'Honor',      sub: 'Смартфоны' },
  { name: 'Hikvision',  sub: 'Видеонаблюдение' },
]

const row2 = [
  { name: 'SANY',       sub: 'Строительная техника' },
  { name: 'XCMG',       sub: 'Спецтехника' },
  { name: 'Zoomlion',   sub: 'Краны и подъёмники' },
  { name: 'Geely',      sub: 'Автомобили' },
  { name: 'Great Wall', sub: 'Внедорожники' },
  { name: 'Gree',       sub: 'Кондиционеры' },
  { name: 'LONGi',      sub: 'Солнечные панели' },
  { name: 'Mindray',    sub: 'Медоборудование' },
  { name: 'ZTE',        sub: 'Сетевое оборудование' },
  { name: 'Dahua',      sub: 'Системы безопасности' },
  { name: 'OPPO',       sub: 'Смартфоны' },
  { name: 'Liugong',    sub: 'Спецтехника' },
]

function MarqueeRow({ items, reverse = false }: { items: typeof row1; reverse?: boolean }) {
  const doubled = [...items, ...items]
  return (
    <div className="flex overflow-hidden select-none">
      <div
        className="flex gap-4 shrink-0"
        style={{
          animation: `marquee${reverse ? 'Rev' : ''} 40s linear infinite`,
          willChange: 'transform',
        }}
      >
        {doubled.map((brand, i) => (
          <div
            key={i}
            className="shrink-0 flex flex-col items-center justify-center px-6 py-4 rounded-2xl min-w-[160px] group transition-all duration-300 hover:scale-105"
            style={{
              background: 'rgba(12,21,38,0.7)',
              border: '1px solid rgba(255,255,255,0.07)',
              backdropFilter: 'blur(10px)',
            }}
          >
            <span
              className="text-white font-black text-lg tracking-tight leading-none mb-1 transition-colors duration-200"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {brand.name}
            </span>
            <span className="text-slate-600 text-[10px] uppercase tracking-widest group-hover:text-[#F0A500] transition-colors duration-200">
              {brand.sub}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Brands() {
  return (
    <section className="relative py-20 overflow-hidden" style={{ background: '#0A1020' }}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F0A500]/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F0A500]/20 to-transparent" />

      {/* Fade masks on left/right */}
      <div className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(90deg, #0A1020 0%, transparent 100%)' }} />
      <div className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(270deg, #0A1020 0%, transparent 100%)' }} />

      <div className="max-w-7xl mx-auto px-6 mb-12">
        <Reveal>
          <div className="text-center">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#F0A500]" />
              <span className="text-[#F0A500] text-sm font-semibold uppercase tracking-[0.2em]">Наши бренды</span>
              <div className="w-8 h-px bg-[#F0A500]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
              Работаем с <span className="gold-gradient-text">ведущими брендами</span> из Китая
            </h2>
            <p className="text-slate-400 text-base max-w-xl mx-auto">
              По основным брендам сформирована база проверенных партнёров — гарантируем качество и оригинальность товара
            </p>
          </div>
        </Reveal>
      </div>

      <div className="space-y-4">
        <MarqueeRow items={row1} />
        <MarqueeRow items={row2} reverse />
      </div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-center mt-12 px-6"
      >
        <p className="text-slate-500 text-sm">
          Не нашли нужный бренд?{' '}
          <a href="#contacts" className="text-[#E63946] hover:underline font-medium">
            Свяжитесь с нами
          </a>{' '}
          — найдём любого поставщика в Китае
        </p>
      </motion.div>

    </section>
  )
}
