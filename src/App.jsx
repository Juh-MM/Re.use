import { Routes, Route } from 'react-router-dom';
import Home from './pages/Homepage';
import Feminino from './pages/Femininopage';
import Produto from './pages/Produtopage';
import Carrinho from './pages/Carrinhopage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/feminino" element={<Feminino />} />
      <Route path="/masculino" element={<Home />} />
      <Route path="/acessorios" element={<Home />} />
      <Route path="/calçados" element={<Home />} />
      <Route path="/infantil" element={<Home />} />
      <Route path="/esportivos" element={<Home />} />
      <Route path="/outros" element={<Home />} />
      <Route path="/carrinho" element={<Carrinho />} />
      <Route path="/produto" element={<Produto />} />
    </Routes>
  )
}
