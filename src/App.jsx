import { Routes, Route } from 'react-router-dom';
import Home from './pages/Homepage';
import Superiores from './pages/Superiorespage';
import Inferiores from './pages/Inferiorespage';
import Acessórios from './pages/Acessoriospage';
import Calcados from './pages/Calcadospage';
import Outros from './pages/Outrospage';

import Produto from './pages/Produtopage';
import Carrinho from './pages/Carrinhopage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/superiores" element={<Superiores />} />
      <Route path="/inferiores" element={<Inferiores />} />
      <Route path="/acessorios" element={<Acessórios />} />
      <Route path="/calcados" element={<Calcados />} />
      <Route path="/outros" element={<Outros />} />

      <Route path="/carrinho" element={<Carrinho />} />
      <Route path="/produtos/:id" element={<Produto />} />
    </Routes>
  )
}
