import { useState, useEffect } from "react";
import { IoSearch } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function Pesquisa() {
    const [query, setQuery] = useState('');
    const [allProducts, setAllProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        const fetchAllProducts = async () => {
            try {
                const response = await fetch('https://re-use-api.onrender.com/api/produtos');
                if (response.ok) {
                    const data = await response.json();
                    setAllProducts(data);
                }
            } catch (error) {
                console.error("Falha ao buscar produtos:", error);
            }
        };
        fetchAllProducts();
    }, []);


    useEffect(() => {
        if (query.trim() !== '') {
            const filtered = allProducts.filter(product =>
                product.titulo.toLowerCase().includes(query.toLowerCase())
            );
            setFilteredProducts(filtered);
        } else {
            setFilteredProducts([]);
        }
    }, [query, allProducts]);
    // primeiro gatilho -> quando o valor da buscar mudar o useeffect ira rodar
    // segundo gatinho -> caso os produtos não sejam carregados a tempo o useeffect ira rodar novamente assim que terminarem de renderizar

    return (

        <div className='relative flex flex-row border rounded-2xl items-center px-3 h-8 border-stone-900'>
            <input 
                type="text" 
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder=""
                className='w-8 outline-none bg-transparent focus:w-48 transition-all duration-300' 
            />
            <IoSearch className=""/>
            
            {query && (
                <div className="absolute top-full mt-2 w-72 bg-neutral-50 border border-gray-200 rounded-lg shadow-lg">
                    {filteredProducts.length > 0 ? (
                        <ul>
                            {filteredProducts.map(product => (
                                <li key={product._id} className="border-b last:border-b-0 ">
                                    <Link to={`/produtos/${product._id}`} onClick={() => setQuery('')} className="flex items-center gap-4 p-2 hover:bg-stone-100">
                                        <img src={product.imagens[0]} alt={product.titulo} className="w-12 h-12 object-cover rounded-md" />
                                        <span>{product.titulo}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="p-4 text-stone-600">Nenhum produto encontrado.</p>
                    )}
                </div>
            )}
        </div>
    )
}
