import { useLang } from '../LanguageContext'

function Services() {
  const { t } = useLang()
  const s = t.services

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) element.scrollIntoView({ behavior: 'smooth' })
  }

  const serviceIds = ['mat-pilates', 'reformer-pilates', 'ems', 'hamile', 'fizyoterapi']
  const icons = ['/icon-mat.svg', '/icon-reformer.svg', '/icon-ems.png', '/icon-hamile.svg', '/icon-fizyo.svg']

  return (
    <section id="services" className="w-full py-20 px-10" style={{ backgroundColor: '#F6F4F0' }}>
      <div className="flex items-center justify-center gap-4 mb-16">
        <div className="flex-1 h-px" style={{ backgroundColor: '#c5bfb3' }} />
        <h2 className="text-2xl font-light tracking-widest" style={{ color: '#8a8472' }}>{s.title}</h2>
        <div className="flex-1 h-px" style={{ backgroundColor: '#c5bfb3' }} />
      </div>
      <div className="flex justify-center gap-6 flex-wrap">
        {s.items.map((name, i) => (
          <div
            key={serviceIds[i]}
            onClick={() => scrollToSection(serviceIds[i])}
            className="flex flex-col items-center justify-between p-6 rounded-xl cursor-pointer transition-all hover:scale-105"
            style={{ backgroundColor: '#E2DDD2', opacity: 0.7, width: '180px', height: '130px' }}
          >
            <img src={icons[i]} alt={name} className="w-10 h-10" />
            <p className="text-xl font-semibold" style={{ color: '#4a4a3a' }}>{name}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services
