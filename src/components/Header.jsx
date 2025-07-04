import Logo from '../../public/logo.svg';

export default function Header() {
    return(
    <header className="top-0 left-0 right-0 p-4 flex justify-between bg-stone-50 border-b-[0.5px] border-stone-900" >
        <div>
            <img src={Logo} alt="" />
        </div>
        <nav className="font-inter flex gap-5 items-center">
            <a href="#">Feminino</a>
            <a href="#">Masculino</a>
            <a href="#">Acessórios</a>
            <a href="#">Calçados</a>
            <a href="#">Esportivo</a>
            <a href="#">Infantil</a>
            <a href="#">Outros</a>
        </nav>
        <div className="flex gap-3 items-center">
            <h1>O</h1>
            <h1>O</h1>
        </div>
    </header>
    )
}

// className=""