import Card from './Card';
import { useState, useEffect } from 'react';

export default function SecaoProdutos({ categoria }) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [titulo, setTitulo] = useState();

    useEffect(() => {
        if (categoria) {
            let tituloFormatado = categoria.replace('calcados', 'calçados').replace('acessorios', 'acessórios');
            setTitulo(tituloFormatado.charAt(0).toUpperCase() + tituloFormatado.slice(1));
        } else {
            setTitulo('Nossos Garimpos');
        }

        const fetchProducts = async () => {
            setLoading(true);
            setError(null); 
            try {
                const baseUrl = 'https://re-use-api.onrender.com/api/produtos';
                const url = categoria ? `${baseUrl}/categoria/${categoria}` : baseUrl;

                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('Falha ao buscar os produtos da categoria ' + (categoria || 'Novidades') + '.');
                }
                const data = await response.json();
                setProducts(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();

    }, [categoria]);

    if (loading) return <p className="text-center py-10">Carregando produtos...</p>;
    if (error) return <p className="text-center py-10 text-red-600">Erro: {error}</p>;

    return (
        <section className='flex flex-col gap-8 items-center px-12 py-8  bg-stone-50'>
            <div className='flex items-center gap-2'>
                <h1 className='font-bold text-xl'>{titulo}</h1>
            </div>
            {products.length > 0 ? (
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7'>
                    {products.map(product => (
                        <Card key={product._id} id={product._id} titulo={product.titulo} preco={product.preco} imagens={product.imagens || []} />
                    ))}
                </div>
            ) : (
                <p className="text-center py-10 text-gray-700">Nenhum produto encontrado nesta categoria.</p>
            )}
        </section>
    )
}