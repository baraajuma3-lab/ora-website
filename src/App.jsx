import { LanguageProvider, useLang } from './LanguageContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import MatPilates from './components/MatPilates'
import Reformerpilates from './components/reformerpilates'
import EMS from './components/ems'
import Hamile from './components/Hamile'
import Fizyoterapi from './components/Fizyoterapi '
import Contact from './components/Contact'
import Footer from './components/Footer'

function AppContent() {
  const { lang } = useLang()
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <MatPilates />
      <Reformerpilates />
      <EMS />
      <Hamile />
      <Fizyoterapi />
      <Contact />
      <Footer />
    </div>
  )
}

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  )
}

export default App
