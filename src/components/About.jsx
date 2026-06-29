import { useLang } from '../LanguageContext'

function About() {
  const { t } = useLang()
  const a = t.about

  return (
    <section id="about" className="w-full py-20 px-16" style={{ backgroundColor: '#F6F4F0' }}>
      <div className="flex items-center justify-center gap-4 mb-6">
        <div className="flex-1 h-px" style={{ backgroundColor: '#c5bfb3' }} />
        <h2 className="text-2xl font-light tracking-widest" style={{ color: '#8a8472' }}>{a.title}</h2>
        <div className="flex-1 h-px" style={{ backgroundColor: '#c5bfb3' }} />
      </div>
      <p className="text-center text-sm font-light mb-16 leading-relaxed" style={{ color: '#7a7060' }}>
        {a.desc.split('\n').map((line, i) => (
          <span key={i}>{line}{i === 0 && <br />}</span>
        ))}
      </p>
      <div className="flex items-end justify-center gap-6">

        <div className="flex flex-col flex-1">
          <div className="w-full overflow-hidden" style={{ height: '420px', borderRadius: '9999px 9999px 0 0' }}>
            <img src="/about-1.png" alt="about 1" className="w-full h-full object-cover" />
          </div>
          <div className="mt-6">
            <h3 className="text-xl font-semibold leading-snug mb-2" style={{ color: '#2a2a1e' }}>
              {a.card1.title.split('\n').map((line, i) => <span key={i}>{line}{i === 0 && <br />}</span>)}
            </h3>
            <p className="text-sm font-light" style={{ color: '#7a7060' }}>{a.card1.desc}</p>
          </div>
        </div>

        <div className="flex flex-col flex-1">
          <div className="w-full overflow-hidden" style={{ height: '520px', borderRadius: '9999px 9999px 0 0' }}>
            <img src="/about-3.png" alt="about 3" className="w-full h-full object-cover" />
          </div>
          <div className="mt-6">
            <h3 className="text-xl font-semibold leading-snug mb-2" style={{ color: '#2a2a1e' }}>
              {a.card2.title.split('\n').map((line, i) => <span key={i}>{line}{i === 0 && <br />}</span>)}
            </h3>
            <p className="text-sm font-light" style={{ color: '#7a7060' }}>{a.card2.desc}</p>
          </div>
        </div>

        <div className="flex flex-col flex-1">
          <div className="w-full overflow-hidden" style={{ height: '420px', borderRadius: '9999px 9999px 0 0' }}>
            <img src="/about-2.png" alt="about 2" className="w-full h-full object-cover" />
          </div>
          <div className="mt-6">
            <h3 className="text-xl font-semibold leading-snug mb-2" style={{ color: '#2a2a1e' }}>
              {a.card3.title.split('\n').map((line, i) => <span key={i}>{line}{i === 0 && <br />}</span>)}
            </h3>
            <p className="text-sm font-light" style={{ color: '#7a7060' }}>{a.card3.desc}</p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default About
