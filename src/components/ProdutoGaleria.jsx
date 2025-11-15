import { useState } from 'react';
import Rectangle from '../assets/Rectangle.png';

export default function ProdutoGaleria({  imagens, titulo }) {
    const [imagemPrincipal, setImagemPrincipal] = useState(imagens && imagens.length > 0 ? imagens[0] : Rectangle);

    const handleThumbnailClick = (imagem) => {
        setImagemPrincipal(imagem);
    };

    return (
        <div className='flex flex-row gap-4'>
            <div className='flex flex-col gap-4'>
                {Array.isArray(imagens) && imagens.map((imagem, index) => (
                    <img 
                        key={index}
                        className='rounded-md w-24 h-24 object-cover cursor-pointer' 
                        src={imagem} alt={`Vista do produto em miniatura ${index + 1}`}
                        onClick={() => handleThumbnailClick(imagem)} />
                ))}
            </div>
                <img className='rounded-md w-[500px] h-auto object-cover' src={imagemPrincipal} alt={`Vista principal do ${titulo}`} />
        </div>
    )
}