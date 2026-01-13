import Header from '../components/Header';
import Footer from '../components/Footer';
import Produto from '../components/Produto';
import FaixaFixa from '../components/FaixaFixa';

export default function ProdutoPage() {
    return (
        <div>
            <Header />
            <div className='flex flex-col gap-8 bg-neutral-50'>
                <Produto />
                <Footer />
            </div>           
            <FaixaFixa />
        </div>
    )
}