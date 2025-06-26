import Card from './Card';

export default function Secao() {
    return (
        <div className='flex flex-col gap-4 p-4 border-b-[0.5px] border-stone-900 bg-stone-50'>
            <h1 className='font-bold text-lg'>Titulo da seção</h1>
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