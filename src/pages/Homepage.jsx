import Header from '../components/Header';
import Banners from '../components/Banners';
import Faixa from '../components/Faixa';
import FaixaFixa from '../components/FaixaFixa';

export default function Home() {
    return (
        <div className='flex flex-col min-h-screen'>
            <Header />
            <Banners />
            <Faixa />

            
            <FaixaFixa />
        </div>
    );
}