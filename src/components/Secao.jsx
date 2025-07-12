import Card from './Card';
import sale from '../assets/sale.png';
import { useState, useEffect } from 'react';

export default function Secao() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/api/produtos')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Falha ao buscar os dados da API');
                }
                return response.json(); 
            })
            .then(data => {
                setProducts(data); 
            })
            .catch(err => {
                setError(err.message);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Carregando produtos...</p>;
    if (error) return <p>Erro: {error}</p>;

    return (
        <div className='flex flex-col gap-4 items-center py-8 border-b-[0.5px] border-stone-900 bg-stone-50'>
            <div className='flex items-start gap-2'>
                <img className='w-7' src={sale} alt="icone de promoção" />
                <h1 className='font-bold text-xl'>Garimpos em promoção</h1>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                {products.map(product => (
                <Card key={product._id} id={product._id} titulo={product.titulo} preco={product.preco} imagens={product.imagems} />
            ))}
            </div>
        </div>
    )
}