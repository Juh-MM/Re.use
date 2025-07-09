import Logo from '../assets/logo.svg';
import car from '../assets/car.png';
import profile from '../assets/profile.png';

export default function Header() {
    return(
    <header className="top-0 left-0 right-0 p-4 flex justify-between bg-stone-50 border-b-[0.5px] border-stone-900" >
        <div>
            <img src={Logo} alt="" />
        </div>
        <nav className="font-sans flex gap-8 items-center">
            <a href="#" className="hover:font-bold">Home</a>
            <a href="#" className="hover:font-bold">Feminino</a>
            <a href="#" className="hover:font-bold">Masculino</a>
            <a href="#" className="hover:font-bold">Acessórios</a>
            <a href="#" className="hover:font-bold">Calçados</a>
            <a href="#" className="hover:font-bold">Esportivo</a>
            <a href="#" className="hover:font-bold">Infantil</a>
            <a href="#" className="hover:font-bold">Outros</a>
        </nav>
        <div className="flex gap-3 items-center">
            <img className="w-6" src={car} alt="icone de carrinho" />
            <img className="w-7" src={profile} alt="icone de perfil" />
        </div>
    </header>
    )
}