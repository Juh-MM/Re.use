import Rectangle from '../assets/Rectangle.png';

export default function DetalherProduto() {
    return (
        <div className='flex flex-col gap-4 p-4 pt-16 bg-stone-50 h-screen'>
            <div className='flex items-start p-4'>
                <button>voltar</button>
            </div>
            <div className='flex flex-row gap-6 justify-center items-center'>
                <div className='flex flex-row gap-4'>
                    <div className='flex flex-col gap-4 w-40px'>
                        <img className='rounded-md' src={Rectangle} alt="" />
                        <img className='rounded-md' src={Rectangle} alt="" />
                    </div>
                    <img className='rounded-md' src={Rectangle} alt="" />
                </div>
                <div className='pb-0.5 flex flex-col self-start'>
                    <div className='flex flex-col gap-4 pb-4 border-b-[0.5px] border-stone-500'>
                        <h1 className='font-semibold text-2xl'>Descrição detalhada do produto como bolso e cores</h1>
                        <h1 className='font-bold text-3xl'>R$15,00</h1>
                        <div className=''>
                            <h1 className='font-medium text-lg'>Detalhes do produto</h1>
                            <div className='list-disc pl-7'>
                                <h1>Tamanho:</h1>
                                <h1>Cor:</h1>
                                <h1>Marca:</h1>
                                <h1>Composição:</h1>
                                <h1>Medidas</h1>
                                <ul className='list-disc pl-7'>
                                    <li>Comprimento:</li>
                                    <li>Busto:</li>
                                    <li>Cintura:</li>
                                    <li>Quadril:</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 justify-center items-center flex flex-col '>
                        <a className='p-3 px-6 font-bold text-lg rounded-md bg-stone-950 text-amber-50'>Adicionar ao carrinho</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
// className=''