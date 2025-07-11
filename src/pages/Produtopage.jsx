import Header from '../components/Header';
import Footer from '../components/Footer';
import Produto from '../components/Produto';

export default function ProdutoPage() {
    return (
        <div>
            <Header />
            <Produto />
            <div className='fixed bottom-0 left-0 right-0'>
                <Footer />
            </div>
        </div>
    )
}