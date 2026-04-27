'use client'

import { useState, useEffect } from 'react'
import { Phone, Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'О нас', href: '#about' },
  { label: 'Команда', href: '#team' },
  { label: 'Как мы работаем', href: '#how' },
  { label: 'Доставка', href: '#delivery' },
  { label: 'Контакты', href: '#contacts' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'py-3 bg-[#060B18]/90 backdrop-blur-xl border-b border-white/[0.06] shadow-2xl'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#E63946] to-[#c02030] flex items-center justify-center shadow-lg shadow-red-900/30">
            <span className="text-white font-black text-sm tracking-wider">CT</span>
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-white font-bold text-lg tracking-wider group-hover:text-red-400 transition-colors">
              CHINESE
            </span>
            <span className="text-[#F0A500] font-light text-xs tracking-[0.3em] uppercase">
              TIME
            </span>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-slate-400 hover:text-white text-sm font-medium transition-colors duration-200 relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#E63946] group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>

        {/* Phone */}
        <a
          href="tel:84951209959"
          className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/[0.05] border border-white/[0.08] hover:border-red-500/40 hover:bg-red-500/[0.06] transition-all duration-300 text-sm font-medium text-white"
        >
          <Phone size={15} className="text-[#E63946]" />
          8-495-120-99-59
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden mt-2 mx-4 rounded-2xl bg-[#0C1526]/95 backdrop-blur-xl border border-white/[0.07] p-4 shadow-2xl">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block py-3 px-4 text-slate-300 hover:text-white hover:bg-white/[0.05] rounded-xl transition-all duration-200 font-medium"
            >
              {link.label}
            </a>
          ))}
          <div className="mt-3 pt-3 border-t border-white/[0.06]">
            <a
              href="tel:84951209959"
              className="flex items-center gap-2 px-4 py-3 text-white font-medium"
            >
              <Phone size={15} className="text-[#E63946]" />
              8-495-120-99-59
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
