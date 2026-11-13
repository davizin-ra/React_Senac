import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/header.jsx'
import Home from './components/home.jsx'
import Footer from './components/footer.jsx'
import Escocia from './components/Escocia.jsx'
import GrandCanyon from './components/GrandCanyon.jsx'
import Muralha from './components/Muralha.jsx'
import Aruba from './components/Aruba.jsx'

function App() {
  return (
    // O Router troca o conteúdo da página sem recarregar o site inteiro.
    <Router>
      <div className="appShell">
        {/* Cabeçalho e rodapé aparecem em todas as páginas. */}
        <Header />
        <Routes>
          {/* Cada rota mostra uma página de destino diferente. */}
          <Route path="/" element={<Home />} />
          <Route path="/Escocia" element={<Escocia />} />
          <Route path="/GrandCanyon" element={<GrandCanyon />} />
          <Route path="/Muralha" element={<Muralha />} />
          <Route path="/Aruba" element={<Aruba />} />
          {/* Se o endereço não existir, volta para a página inicial. */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
