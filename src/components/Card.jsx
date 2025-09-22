import { Link } from 'react-router-dom';
import Rectangle from '../assets/Rectangle.png'

export default function Card({_id, titulo, preco, imagens}) {

    const imageUrl = imagens && imagens.length > 0 ? imagens[0] : Rectangle;

    return (
        <Link to={`/produto/${_id}`}>
            <div className='relative'>
                <img className='w-70 h-90 object-cover rounded-xl' src={imageUrl} alt={titulo} />
                <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent rounded-xl'></div>
                <div className='absolute bottom-4 left-4 text-white font-bold'>
                    <h1 className='font-normal'>{titulo}</h1>
                    <h1 className='font-bold text-lg'>R${preco.toFixed(2).toString().replace('.', ',')}</h1>
                </div>
            </div>
        </Link>
    )
}