import Rectangle from '../assets/Rectangle.png';

export default function ProdutoGaleria() {
    return (
        <div className='flex flex-row gap-4'>
            <div className='flex flex-col gap-4'>
                <img className='rounded-md w-24 h-24 object-cover cursor-pointer' src={Rectangle} alt="Vista do produto em miniatura 1" />
                <img className='rounded-md w-24 h-24 object-cover cursor-pointer' src={Rectangle} alt="Vista do produto em miniatura 2" />
            </div>
                <img className='rounded-md w-[500px] h-auto object-cover' src={Rectangle} alt="Vista principal do produto" />
        </div>
    )
}