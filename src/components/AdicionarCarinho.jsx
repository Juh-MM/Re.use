import { useState } from 'react'; 

export default function AdicionarCarrinho() {
    const [isOpen, setIsOpen] = useState(false);
    const [text, setText] = useState('Adicionar ao carrinho');
    const [adicionado, setAdicionado] = useState(false);

    const alternarCarrinho = () => {
        if (adicionado) {
            removerDoCarrinho();
        } else {
            adicionarAoCarrinho();
        }
    };

    const adicionarAoCarrinho = () => {
        setIsOpen(true);
        setText('Remover do carrinho!');
        setAdicionado(true);
        setTimeout(() => {
            setIsOpen(false);
        }, 3000);
    };

    const removerDoCarrinho = () => {
        setIsOpen(false);
        setText('Adicionar ao carrinho!');
        setAdicionado(false);
    }


    return(
        <>
            <button className={`p-3 px-6 font-bold text-lg rounded-md text-stone-50 hover:bg-stone-700` + (adicionado ? ' bg-stone-700' : ' bg-stone-950')}
            onClick={alternarCarrinho}
            >{text}</button>

            {isOpen && (<div className='fixed top-4 right-4 bg-stone-600 text-white p-4 rounded-md '>Produto adicionado ao carrinho!</div>)}
        </>
    )
}