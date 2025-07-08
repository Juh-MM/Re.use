import Rectangle from '../assets/Rectangle.png';

export default function Card() {
    return (
        <div className='flex flex-col cursor-pointer hover:bg-stone-100 rounded-md p-2'>
            <img className='rounded-sm' src={Rectangle} alt="" />
            <div className='py-2'>
                <h1 className='font-normal '>Titulo da roupa</h1>
                <h1 className='font-bold text-lg'>R$15,00</h1>
            </div>
        </div>
    )
}