import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Hero from './components/home/Hero.jsx'
import ProductosPopulares from './components/home/ProductosPopulares.jsx'
import UbicacionHorarios from './components/home/UbicacionHorarios.jsx'
import Despachos from './components/home/Despachos.jsx'
import Contacto from './components/home/Contacto.jsx'
import Navbar from './components/layout/Navbar.jsx';
import Catalogo from './pages/Catalogo.jsx'


function App() {
  return (
    <Router>
      <Navbar />
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
  )
}

export default App