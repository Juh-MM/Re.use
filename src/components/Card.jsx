import Rectangle from '../assets/Rectangle.png';

export default function Card() {
    return (
        <div className='flex flex-col cursor-pointer'>
            <img className='rounded-sm' src={Rectangle} alt="" />
            <div className='py-2'>
                <h1 className='font-medium '>Titulo da roupa</h1>
                <h1 className='font-bold text-lg'>R$15,00</h1>
            </div>
        </div>
    )
}