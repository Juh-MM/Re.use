import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProdutoGaleria from './ProdutoGaleria';
import ProdutoDetalhe from './ProdutoDetalhe';
import ReturnButton from './ReturnButton';

export default function Produto() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            setLoading(true);
            setError(null);
            try {
                const url = `https://re-use-api.onrender.com/api/produtos/${id}`;
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('Falha ao buscar o produto.');
                }
                const data = await response.json();
                setProduct(data);
            } catch (err) {
                setError(err.message);
            } finally {
            setLoading(false);
            }
        };

        fetchProduct();

    }, [id]);

    

    if (loading) return <p className="text-center py-20">Carregando produto...</p>;
    if (error) return <p className="text-center py-20 text-red-600">Erro: {error}</p>;
    if (!product) return <p className="text-center py-20">Produto não encontrado.</p>;

    return (
        <div className='flex flex-row bg-stone-50 h-screen'>
            <ReturnButton />
            <div className='flex flex-row pt-12 gap-6 justify-center items-start'>
                <ProdutoGaleria imagens={product.imagens} titulo={product.titulo} />
                <ProdutoDetalhe produto={product} />
            </div>
        </div>
    )
}
