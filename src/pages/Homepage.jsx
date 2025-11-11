import Header from '../components/Header';
import Banners from '../components/Banners';
import Faixa from '../components/Faixa';
import FaixaFixa from '../components/FaixaFixa';
import SecaoProdutos from '../components/SecaoProdutos'
import Apresentacao from '../components/Apresentacao';  
import Marcas from '../components/Marcas';
import Footer from '../components/Footer';

export default function Home() {
    return (
        <div className='flex flex-col min-h-screen'>
            <Header />
            <Banners />
            <Faixa />
            <SecaoProdutos categoria="novidades" />
            <SecaoProdutos />
            <div className='bg-stone-50 flex justify-center'>
                <hr className='w-[92%] h-0.5 text-stone-800'/>
            </div>
            <Apresentacao />
            <div className='bg-stone-50 flex justify-center'>
                <hr className='w-[92%] h-0.5 text-stone-800'/>
            </div>
            <Marcas />
            <Footer />
            <FaixaFixa />
        </div>
    );
}