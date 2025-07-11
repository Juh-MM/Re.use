import ProdutoGaleria from './ProdutoGaleria';
import ProdutoDetalhe from './ProdutoDetalhe';
import ReturnButton from './ReturnButton';

export default function Produto() {
    return (
        <div className='flex flex-col p-4 pt-16 bg-stone-50 h-screen'>
            <ReturnButton />
            <div className='flex flex-row gap-6 justify-center items-start'>
                <ProdutoGaleria />
                <ProdutoDetalhe />
            </div>
        </div>
    )
}
