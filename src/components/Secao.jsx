import Card from './Card';
import sale from '../assets/sale.png';

export default function Secao() {
    return (
        <div className='flex flex-col gap-4 p-4 pt-8 border-b-[0.5px] border-stone-900 bg-stone-50'>
            <div className='flex items-center gap-2'>
                <h1 className='font-bold text-xl pl-2'>Garimpos em promoção</h1>
                <img className='w-7' src={sale} alt="icone de promoção" />
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4'>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}