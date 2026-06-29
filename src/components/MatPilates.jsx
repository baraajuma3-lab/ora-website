import { useLang } from '../LanguageContext'

function MatPilates() {
  const { t } = useLang()
  const m = t.mat

  return (
    <section id="mat-pilates" className="w-full py-20 px-16" style={{ backgroundColor: '#F6F4F0' }}>
      <div className="flex items-center justify-center gap-4 mb-16">
        <div className="flex-1 h-px" style={{ backgroundColor: '#c5bfb3' }} />
        <h2 className="text-xl font-light tracking-widest" style={{ color: '#8a8472' }}>{m.title}</h2>
        <div className="flex-1 h-px" style={{ backgroundColor: '#c5bfb3' }} />
      </div>

      <div className="flex items-center gap-16 mb-20">
        <div className="flex-1">
          <h3 className="text-3xl font-bold mb-10 leading-snug" style={{ color: '#4a5a3a' }}>
            {m.heading.split('\n').map((line, i) => <span key={i}>{line}{i === 0 && <br />}</span>)}
          </h3>
          <div className="flex flex-col gap-6">
            {m.points.map((p, i) => (
              <div key={i} className="flex gap-3">
                <span className="mt-1 w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: '#6b7a5a' }} />
                <div>
                  <p className="font-semibold text-base" style={{ color: '#2a2a1e' }}>{p.label}</p>
                  <p className="text-xl font-light" style={{ color: '#7a7060' }}>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ width: '480px', flexShrink: 0 }}>
          <div className="w-full overflow-hidden" style={{ height: '500px', borderRadius: '9999px 9999px 0 0' }}>
            <img src="/mat-main.png" alt="Mat Pilates" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      <h3 className="text-2xl font-light text-center mb-12 tracking-wide" style={{ color: '#6b7a5a' }}>
        {m.sessionTitle}
      </h3>

      <div className="flex justify-center gap-10">
        {m.cards.map((card, i) => {
          const imgs = ['/mat-1.png', '/mat-2.png', '/mat-3.png']
          return (
            <div key={i} className="flex flex-col items-start" style={{ width: '280px' }}>
              <div className="w-full overflow-hidden mb-6" style={{ height: '300px', borderRadius: '9999px 9999px 0 0' }}>
                <img src={imgs[i]} alt={card.title} className="w-full h-full object-cover" />
              </div>
              <h4 className="text-xl font-semibold mb-1" style={{ color: '#2a2a1e' }}>{card.title}</h4>
              <p className="text-lg" style={{ color: '#8a8472' }}>{card.sub}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default MatPilates
