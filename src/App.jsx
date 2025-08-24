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
      <Route path="/masculino" element={<Masculino />} />
      <Route path="/acessorios" element={<Acessórios />} />
      <Route path="/calcados" element={<Calçados />} />
      <Route path="/infantil" element={<Infantil />} />
      <Route path="/esportivo" element={<Esportivo />} />
      <Route path="/outros" element={<Outros />} />


      <Route path="/carrinho" element={<Carrinho />} />
      <Route path="/produto" element={<Produto />} />
    </Routes>
  )
}
