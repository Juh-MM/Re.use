import { Routes, Route } from 'react-router-dom';
import Home from './pages/Homepage';
import Feminino from './pages/Femininopage';
import Masculino from './pages/Masculinopage';
import Acessorios from './pages/Acessoriospage';
import Calcados from './pages/Calcadospage';
import Esportivos from './pages/Esportivospage';
import Infantil from './pages/Infantilpage';
import Outros from './pages/Outrospage';


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/feminino" element={<Feminino />} />
      <Route path="/masculino" element={<Masculino />} />
      <Route path="/acessorios" element={<Acessorios />} />
      <Route path="/calçados" element={<Calcados />} />
      <Route path="/infantil" element={<Infantil />} />
      <Route path="/esportivos" element={<Esportivos />} />
      <Route path="/outros" element={<Outros />} />
    </Routes>
  )
}
