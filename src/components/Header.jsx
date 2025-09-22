import { Link } from 'react-router-dom';
import Logo from '../assets/Logo.svg';
import car from '../assets/car.png';
import profile from '../assets/profile.png';

export default function Header() {
    return(
    <header className="top-0 left-0 right-0 py-3 flex justify-center bg-stone-50 border-b-[0.5px] border-stone-900" >
        <div className='w-[92%] flex justify-between'>
            <div>
            <Link to="/"><img src={Logo} className="h-6" alt="Logo Re.use" /></Link>
            </div>
            <nav className="font-sans flex gap-8 items-center">
                <Link to="/" className="hover:text-stone-500 text-base">Home</Link>
                <Link to="/feminino" className="hover:text-stone-700 text-base">Superiores</Link>
                <Link to="/" className="hover:text-stone-700 text-base">Inferiores</Link>
                <Link to="/" className="hover:text-stone-700 text-base">Acessórios</Link>
                <Link to="/" className="hover:text-stone-700 text-base">Calçados</Link>
                <Link to="/" className="hover:text-stone-700 text-base">Outros</Link>
            </nav>
            <div className="flex gap-5 items-center">
                <Link to="/carrinho"><img className="w-6" src={car} alt="icone de carrinho" /></Link>
                <Link to="/"><img className="w-7" src={profile} alt="icone de perfil" /></Link>
            </div>
        </div>
        
    </header>
    );
}