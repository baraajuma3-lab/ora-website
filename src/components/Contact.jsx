import { useState } from 'react'
import { useLang } from '../LanguageContext'

function Contact() {
  const { t } = useLang()
  const c = t.contact

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    program: '',
    date: '',
    time: '',
    consent: false,
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
  }

  const handleSubmit = () => {
    if (!formData.name || !formData.phone || !formData.program) {
      alert(c.alertFields)
      return
    }
    if (!formData.consent) {
      alert(c.alertConsent)
      return
    }
    const phoneNumber = '905559812255'
    const message = c.whatsappMsg(formData)
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
  }

  const inputStyle = {
    backgroundColor: 'transparent',
    borderBottom: '1px solid #c5bfb3',
    outline: 'none',
    width: '100%',
    paddingBottom: '10px',
    paddingTop: '4px',
    fontSize: '14px',
    color: '#2a2a1e',
  }

  const labelStyle = {
    fontSize: '14px',
    color: '#2a2a1e',
    marginBottom: '4px',
    display: 'block',
  }

  return (
    <section id="contact" className="w-full py-20 px-16" style={{ backgroundColor: '#F6F4F0' }}>
      <div className="flex items-center justify-center gap-4 mb-16">
        <div className="flex-1 h-px" style={{ backgroundColor: '#c5bfb3' }} />
        <h2 className="text-xl font-light tracking-widest" style={{ color: '#8a8472' }}>{c.title}</h2>
        <div className="flex-1 h-px" style={{ backgroundColor: '#c5bfb3' }} />
      </div>

      <div className="flex items-start gap-16">
        <div className="flex-1">
          <h3 className="text-2xl font-semibold mb-2" style={{ color: '#2a2a1e' }}>{c.heading}</h3>
          <p className="text-sm font-light mb-10" style={{ color: '#7a7060' }}>{c.subheading}</p>

          <div className="flex flex-col gap-8">
            <div>
              <label style={labelStyle}>{c.name}</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} style={inputStyle} />
            </div>
            <div>
              <label style={labelStyle}>{c.phone}</label>
              <input type="tel" name="phone" value={formData.phone} onChange={handleChange} style={inputStyle} />
            </div>
            <div>
              <label style={labelStyle}>{c.program}</label>
              <select name="program" value={formData.program} onChange={handleChange} style={{ ...inputStyle, cursor: 'pointer' }}>
                <option value="">{c.selectPlaceholder}</option>
                {c.programs.map((prog) => (
                  <option key={prog} value={prog}>{prog}</option>
                ))}
              </select>
            </div>
            <div>
              <label style={labelStyle}>{c.date}</label>
              <input type="date" name="date" value={formData.date} onChange={handleChange} style={inputStyle} />
            </div>
            <div>
              <label style={labelStyle}>{c.time}</label>
              <input type="time" name="time" value={formData.time} onChange={handleChange} style={inputStyle} />
            </div>
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                name="consent"
                checked={formData.consent}
                onChange={handleChange}
                style={{ width: '16px', height: '16px', accentColor: '#6b7a5a', cursor: 'pointer' }}
              />
              <label className="text-sm" style={{ color: '#2a2a1e' }}>{c.consent}</label>
            </div>
          </div>
        </div>

        <div style={{ width: '480px', flexShrink: 0 }}>
          <div className="w-full overflow-hidden" style={{ height: '580px', borderRadius: '16px' }}>
            <img src="/contact.png" alt="ORA Pilates" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-14">
        <button
          onClick={handleSubmit}
          className="px-20 py-4 rounded-full text-white text-base tracking-widest transition-all hover:opacity-90"
          style={{ backgroundColor: '#8a9e85', minWidth: '400px' }}
        >
          {c.submit}
        </button>
      </div>
    </section>
  )
}

export default Contact
