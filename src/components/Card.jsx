import { Link } from 'react-router-dom';
import { useState } from 'react';
import Rectangle from '../assets/Rectangle.png'
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

export default function Card({id, titulo, preco, imagens}) {

    const imageUrl = imagens && imagens.length > 0 ? imagens[0] : Rectangle;
    const [isFavorited, setIsFavorited] = useState(false);

    const toggleFavorite = (e) => {
        e.preventDefault(); //evita que seja levado pelo link ao clicar no botão
        setIsFavorited(!isFavorited);
    }

    return (
        //acao principal ao clicar no card
        <Link to={`/produtos/${id}`}> 
            <div className='relative hover:scale-105 transition-all duration-200 cursor-pointer'>
                <button className='absolute z-10 top-4 right-4' onClick={toggleFavorite}>
                    {isFavorited ? <FaHeart className='text-neutral-50 text-2xl' /> : <FaRegHeart className='text-neutral-50 text-2xl' />}
                </button>
                <img className='w-full h-90 object-cover rounded-xl shadow-md' src={imageUrl} alt={titulo} />
                <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent rounded-xl'></div>
                <div className='absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-transparent rounded-xl'></div>
                <div className='absolute bottom-0 left-0 p-4 text-white font-bold'>
                    <h1 className='font-normal'>{titulo}</h1>
                    <h1 className='font-bold text-lg'>R$ {preco.toFixed(2).toString().replace('.', ',')}</h1>
                </div>
            </div>
        </Link>
    )
}