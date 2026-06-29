import { useEffect, useState } from 'react'
import { useLang } from '../LanguageContext'

function Navbar() {
  const [activeSection, setActiveSection] = useState('hero')
  const { t } = useLang()
  const n = t.navbar

  useEffect(() => {
    const sections = ['hero', 'services', 'about', 'contact']
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { threshold: 0.5 }
    )
    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) element.scrollIntoView({ behavior: 'smooth' })
  }

  const linkClass = (sectionId) => {
    const base = 'font-light tracking-widest transition-all cursor-pointer bg-transparent border-none'
    if (activeSection === sectionId) return `${base} text-white text-xl font-semibold`
    return `${base} text-white text-lg hover:opacity-70`
  }

  return (
    <nav className="absolute top-0 left-0 w-full z-50 flex items-center justify-between px-10 py-6">
      <div className="flex items-center gap-10">
        <button onClick={() => scrollToSection('hero')} className={linkClass('hero')}>{n.home}</button>
        <button onClick={() => scrollToSection('services')} className={linkClass('services')}>{n.programs}</button>
        <button onClick={() => scrollToSection('about')} className={linkClass('about')}>{n.about}</button>
        <button onClick={() => scrollToSection('contact')} className={linkClass('contact')}>{n.contact}</button>
      </div>
      <button
        onClick={() => scrollToSection('contact')}
        className="border border-white text-white text-lg font-semibold tracking-wider px-6 py-2 rounded-xl hover:bg-white hover:text-black transition-all cursor-pointer bg-transparent"
      >
        {n.cta}
      </button>
    </nav>
  )
}

export default Navbar
