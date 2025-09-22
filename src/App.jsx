import { Routes, Route } from 'react-router-dom';
import Home from './pages/Homepage';
import Feminino from './pages/Femininopage';
import Masculino from './pages/Masculinopage';
import Acessórios from './pages/Acessoriospage';
import Calçados from './pages/Calcadospage';
import Infantil from './pages/Infantilpage';
import Esportivo from './pages/Esportivopage';
import Outros from './pages/Outrospage';

import Produto from './pages/Produtopage';
import Carrinho from './pages/Carrinhopage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/feminino" element={<Feminino />} />
      <Route path="/masculino" element={<Home />} />
      <Route path="/acessorios" element={<Home />} />
      <Route path="/calcados" element={<Home />} />
      <Route path="/infantil" element={<Home />} />
      <Route path="/esportivo" element={<Home />} />
      <Route path="/outros" element={<Home />} />


      <Route path="/carrinho" element={<Carrinho />} />
      <Route path="/produto" element={<Produto />} />
    </Routes>
  )
}
