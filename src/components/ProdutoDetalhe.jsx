import AdicionarCarrinho from './AdicionarCarinho';

export default function ProdutoDetalhePage ({ produto }) {
    return(
        <div className='pb-0.5 flex flex-col self-start'>
            <div className='flex flex-col gap-4 pb-4 border-b-[0.5px] border-stone-500'>
                <h1 className='font-semibold text-2xl'>{produto.titulo}</h1>
                <p className='font-bold text-4xl'>R$ {produto.preco.toFixed(2).replace('.', ',')}</p>
                <div>
                    <h2 className='font-medium text-lg'>Detalhes do produto</h2>
                    <ul className='list-disc pl-7'>
                        <li>Tamanho: {produto.tamanho}</li>
                        <li>Cor: {produto.cor}</li>
                        <li>Marca: {(produto.marca ? produto.marca : "Não informado")}</li>
                        <li>Composição: {produto.composicao}</li>
                        <li>Medidas</li>
                        {produto.medidas && Object.entries(produto.medidas).map(([chave, valor]) => (
                            <ul>
                                <li key={chave} className="capitalize"> - {chave}: {valor} cm</li>
                            </ul>
                        ))}
                    </ul>
                </div>
            </div>
            <div className='p-6 justify-center items-center flex flex-col '>
                <AdicionarCarrinho />
            </div>
        </div>
    )
}