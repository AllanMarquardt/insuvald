import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { QuoteProvider } from './context/QuoteContext'
import Hero from './components/home/Hero.jsx'
import ProductosPopulares from './components/home/ProductosPopulares.jsx'
import UbicacionHorarios from './components/home/UbicacionHorarios.jsx'
import Despachos from './components/home/Despachos.jsx'
import Contacto from './components/home/Contacto.jsx'
import Navbar from './components/layout/Navbar.jsx';
import Catalogo from './pages/Catalogo.jsx'
import SocialContact from './components/shared/SocialContact.jsx'
import { useEffect } from 'react'

// Importar AOS
import AOS from 'aos'
import 'aos/dist/aos.css'

// Componente auxiliar para manejar el scroll
function ScrollToHash() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      // Esperar un poco a que la página cargue
      setTimeout(() => {
        const element = document.querySelector(location.hash)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }, 600)
    } else {
      // Si no hay hash, ir al inicio
      window.scrollTo(0, 0)
    }
  }, [location])

  return null
}

function App() {
  // Inicializar AOS
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      offset: 400,
    })
  }, [])
  return (
    <QuoteProvider>
      <Router basename="/insuvald">
        <ScrollToHash />
        <Navbar />
        <SocialContact />
        <Routes>
          {/* Página principal */}
          <Route path="/" element={
            <>
              <header>
                <Hero />
              </header>
              <main>
                <ProductosPopulares />
                <UbicacionHorarios />
                <Despachos />
                <Contacto />
              </main>
            </>
          } />
          
          {/* Página de catálogo */}
          <Route path="/catalogo" element={<Catalogo />} />
        </Routes>
      </Router>
    </QuoteProvider>
  )
}

export default App