import AdicionarCarrinho from './AdicionarCarinho';

export default function ProdutoDetalhePage () {
    return(
        <div className='pb-0.5 flex flex-col self-start'>
            <div className='flex flex-col gap-4 pb-4 border-b-[0.5px] border-stone-500'>
                <h1 className='font-semibold text-2xl'>Descrição detalhada do produto como bolso e cores</h1>
                <p className='font-bold text-4xl'>R$15,00</p>
                <div>
                    <h2 className='font-medium text-lg'>Detalhes do produto</h2>
                    <ul className='list-disc pl-7'>
                        <li>Tamanho:</li>
                        <li>Cor:</li>
                        <li>Marca:</li>
                        <li>Composição:</li>
                        <li>Medidas
                            <ul className='list-disc pl-7'>
                                <li>Comprimento:</li>
                                <li>Busto:</li>
                                <li>Cintura:</li>
                                <li>Quadril:</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='p-6 justify-center items-center flex flex-col '>
                <AdicionarCarrinho />
            </div>
        </div>
    )
}