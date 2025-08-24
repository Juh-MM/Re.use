import { Link } from 'react-router-dom';
import Rectangle from '../assets/Rectangle.png'

export default function Card({_id, titulo, preco, imagens}) {

    const imageUrl = imagens && imagens.length > 0 ? imagens[0] : Rectangle;

    return (
        <Link to={`/produto/${_id}`}>
            <div className='flex flex-col cursor-pointer hover:bg-stone-100 rounded-md p-2'>
                <img className='rounded-sm object-cover h-100 w-full' src={imageUrl} alt={titulo} />
                <div className='py-2'>
                    <h1 className='font-normal'>{titulo}</h1>
                    <h1 className='font-bold text-lg'>R${preco}</h1>
                </div>
            </div>
        </Link>
    )
}