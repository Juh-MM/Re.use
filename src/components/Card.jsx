import { Link } from 'react-router-dom';

export default function Card({_id, titulo, preco, imagens}) {
    return (
        <Link to={`/produto/${_id}`}>
            <div className='flex flex-col cursor-pointer hover:bg-stone-100 rounded-md p-2'>
                <img className='rounded-sm' src={imagens} alt={titulo} />
                <div className='py-2'>
                    <h1 className='font-normal'>{titulo}</h1>
                    <h1 className='font-bold text-lg'>R${preco}</h1>
                </div>
            </div>
        </Link>
    )
}