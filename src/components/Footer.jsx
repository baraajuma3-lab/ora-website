import { useLang } from '../LanguageContext'

function Footer() {
  const { lang, setLang, t } = useLang()
  const f = t.footer

  const sectionIds = ['hero', 'about', 'services', 'contact']

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) element.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="w-full py-12 px-16" style={{ backgroundColor: '#EDEAE4' }}>
      <div className="flex items-start justify-between gap-10">

        <div style={{ width: '180px' }}>
          <img src="/logo.png" alt="ORA Logo" className="w-32 mb-2" />
          <p className="text-xs tracking-[0.3em] font-light" style={{ color: '#8a8472' }}></p>
        </div>

        <div>
          <p className="text-sm font-semibold mb-4" style={{ color: '#4a5a3a' }}>{f.usefulPages}</p>
          <div className="flex flex-col gap-2">
            {f.links.map((link, i) => (
              <button
                key={i}
                onClick={() => scrollToSection(sectionIds[i])}
                className="text-sm bg-transparent border-none cursor-pointer hover:opacity-70 transition-opacity"
                style={{ color: '#6b7a5a', textAlign: 'inherit' }}
              >
                {link}
              </button>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold mb-4" style={{ color: '#4a5a3a' }}>{f.contacts}</p>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <span style={{ color: '#6b7a5a' }}>📍</span>
              <p className="text-sm" style={{ color: '#6b7a5a' }}>{f.address}</p>
            </div>
            <div className="flex items-center gap-2">
              <span style={{ color: '#6b7a5a' }}>📞</span>
              <p className="text-sm" style={{ color: '#6b7a5a' }}>{f.phone}</p>
            </div>
            <div className="flex items-center gap-2">
              <span style={{ color: '#6b7a5a' }}>✉️</span>
              <p className="text-sm" style={{ color: '#6b7a5a' }}>{f.email}</p>
            </div>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold mb-4" style={{ color: '#4a5a3a' }}>{f.workingHours}</p>
          <p className="text-sm" style={{ color: '#6b7a5a' }}>{f.schedule}</p>
          <div className="flex gap-2 mt-4">
            <button
              onClick={() => setLang('tr')}
              className="text-sm bg-transparent border-none cursor-pointer hover:opacity-70 transition-opacity"
              style={{ color: lang === 'tr' ? '#4a5a3a' : '#6b7a5a', fontWeight: lang === 'tr' ? '700' : '400' }}
            >
              TR
            </button>
            <span style={{ color: '#c5bfb3' }}>|</span>
            <button
              onClick={() => setLang('ar')}
              className="text-sm bg-transparent border-none cursor-pointer hover:opacity-70 transition-opacity"
              style={{ color: lang === 'ar' ? '#4a5a3a' : '#6b7a5a', fontWeight: lang === 'ar' ? '700' : '400' }}
            >
              AR
            </button>
          </div>
        </div>

      </div>

      <div className="flex justify-end mt-8 pt-6" style={{ borderTop: '1px solid #c5bfb3' }}>
        <p className="text-xs" style={{ color: '#8a8472' }}>{f.copyright}</p>
      </div>
    </footer>
  )
}

export default Footer
