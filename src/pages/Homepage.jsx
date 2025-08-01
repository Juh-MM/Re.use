import Header from '../components/Header';
import Banners from '../components/Banners';
import Faixa from '../components/Faixa';
import FaixaFixa from '../components/FaixaFixa';
import Secao from '../components/Secao'
import Footer from '../components/Footer'

export default function Home() {
    return (
        <div className='flex flex-col min-h-screen'>
            <Header />
            <div className='pt-16'>
                <Banners />
                <Faixa />
                <Secao />
                <Footer />
                <FaixaFixa />
            </div>
        </div>
    );
}