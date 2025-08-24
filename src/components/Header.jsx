import { Link } from 'react-router-dom';
import Logo from '../assets/Logo.svg';
import car from '../assets/car.png';
import profile from '../assets/profile.png';

export default function Header() {
    return(
    <header className="fixed top-0 left-0 right-0 px-12 py-4 flex justify-between bg-stone-50 border-b-[0.5px] border-stone-900" >
        <div>
            <Link to="/"><img src={Logo} alt="Logo Re.use" /></Link>
        </div>
        <nav className="font-sans flex gap-8 items-center">
            <Link to="/" className="hover:text-stone-500">Home</Link>
            <Link to="/feminino" className="hover:text-stone-500">Feminino</Link>
            <Link to="/masculino" className="hover:text-stone-500">Masculino</Link>
            <Link to="/acessorios" className="hover:text-stone-500">Acessórios</Link>
            <Link to="/calcados" className="hover:text-stone-500">Calçados</Link>
            <Link to="/esportivo" className="hover:text-stone-500">Esportivo</Link>
            <Link to="/infantil" className="hover:text-stone-500">Infantil</Link>
            <Link to="/outros" className="hover:text-stone-500">Outros</Link>
        </nav>
        <div className="flex gap-3 items-center">
            <Link to="/carrinho"><img className="w-6" src={car} alt="icone de carrinho" /></Link>
            <Link to="/"><img className="w-7" src={profile} alt="icone de perfil" /></Link>
        </div>
    </header>
    );
}