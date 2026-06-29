function Hero() {
  return (
    <section id="hero" className="relative w-full h-screen overflow-hidden">

      {/* صورة الخلفية */}
      <img
        src="/hero.png"
        alt="ORA Pilates"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* طبقة داكنة خفيفة فوق الصورة */}
      <div className="absolute inset-0 bg-black/10" />

      {/* اللوجو وNPILATES STUDIO في الوسط/اليسار */}
      <div className="absolute inset-0 flex flex-col justify-center px-16">
        
        {/* لوجو ORA */}
        <img
  src="/logo-ora.png"
  alt="ORA Logo"
  className="w-[600px] mb-1"
/>
     

        {/* نص PILATES STUDIO */}
      

      </div>

    </section>
  )
}

export default Hero