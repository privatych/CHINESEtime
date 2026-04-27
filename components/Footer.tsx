import Link from 'next/link'
import { Phone, Mail, MapPin, MessageCircle, Send } from 'lucide-react'

const navLinks = [
  { label: 'О нас', href: '#about' },
  { label: 'Команда', href: '#team' },
  { label: 'Как мы работаем', href: '#how' },
  { label: 'Доставка', href: '#delivery' },
  { label: 'Контакты', href: '#contacts' },
]

export default function Footer() {
  return (
    <footer style={{ background: '#030710', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <a href="#" className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#E63946] to-[#c02030] flex items-center justify-center">
                <span className="text-white font-black text-sm">CT</span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-white font-bold text-lg tracking-wider">CHINESE</span>
                <span className="text-[#F0A500] font-light text-xs tracking-[0.3em]">TIME</span>
              </div>
            </a>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              Ваш надежный партнер в доставке грузов из Китая в Россию. Работаем с 2020 года.
            </p>
            <div className="flex gap-3">
              <a
                href="https://wa.me/79254498440"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl flex items-center justify-center transition-all hover:scale-110"
                style={{ background: 'rgba(37,211,102,0.12)', border: '1px solid rgba(37,211,102,0.2)' }}
              >
                <MessageCircle size={16} className="text-[#25D366]" />
              </a>
              <a
                href="https://t.me/+79254498440"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl flex items-center justify-center transition-all hover:scale-110"
                style={{ background: 'rgba(0,136,204,0.12)', border: '1px solid rgba(0,136,204,0.2)' }}
              >
                <Send size={16} className="text-[#0088cc]" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-semibold mb-5 text-sm uppercase tracking-widest">Навигация</h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-slate-500 hover:text-white text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <h3 className="text-white font-semibold mt-8 mb-4 text-sm uppercase tracking-widest">Документы</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/policy" className="text-slate-500 hover:text-white text-sm transition-colors duration-200">
                  Политика конфиденциальности
                </Link>
              </li>
              <li>
                <Link href="/offer" className="text-slate-500 hover:text-white text-sm transition-colors duration-200">
                  Публичная оферта
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h3 className="text-white font-semibold mb-5 text-sm uppercase tracking-widest">Контакты</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={15} className="text-[#E63946] mt-0.5 shrink-0" />
                <span className="text-slate-500 text-sm">г. Москва, Малый Предтеченский, д. 1/2 стр. 1</span>
              </li>
              <li>
                <a href="tel:84951209959" className="flex items-center gap-3 text-slate-500 hover:text-white text-sm transition-colors">
                  <Phone size={15} className="text-[#E63946] shrink-0" />
                  8-495-120-99-59
                </a>
              </li>
              <li>
                <a href="mailto:info@chinesetime.ru" className="flex items-center gap-3 text-slate-500 hover:text-white text-sm transition-colors">
                  <Mail size={15} className="text-[#E63946] shrink-0" />
                  info@chinesetime.ru
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal entity info — required by Russian law */}
        <div className="mt-12 pt-8" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div
            className="p-4 rounded-xl mb-6"
            style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.04)' }}
          >
            <p className="text-slate-600 text-xs leading-relaxed">
              <strong className="text-slate-500">ООО «Чайниз Тайм»</strong> · 
              Юр. адрес: 123242, г. Москва, Малый Предтеченский пер., д. 1/2, стр. 1 · 
              ИНН: 9710105741 · ОГРН: 1227700746085 · КПП: 770301001 · ОКПО: 97680332
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-slate-600 text-sm">© 2020–2024 Chinese Time. Все права защищены.</p>
            <div className="flex items-center gap-4">
              <Link href="/policy" className="text-slate-600 hover:text-slate-400 text-xs transition-colors">
                Политика ПД
              </Link>
              <Link href="/offer" className="text-slate-600 hover:text-slate-400 text-xs transition-colors">
                Оферта
              </Link>
              <span className="text-slate-700 text-xs">Доставка грузов из Китая в Россию</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
