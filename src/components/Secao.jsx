import Card from './Card';
import sale from '../assets/sale.png';

export default function Secao() {
    return (
        <div className='flex flex-col gap-4 items-center py-8 border-b-[0.5px] border-stone-900 bg-stone-50'>
            <div className='flex items-start gap-2'>
                <img className='w-7' src={sale} alt="icone de promoção" />
                <h1 className='font-bold text-xl'>Garimpos em promoção</h1>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4'>
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