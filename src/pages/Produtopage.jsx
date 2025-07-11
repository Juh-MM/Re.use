import Header from '../components/Header';
import Footer from '../components/Footer';
import DetalherProduto from '../components/DetalherProduto';

export default function ProdutoPage() {
    return (
        <div>
            <Header />
            <DetalherProduto />
            <div className='fixed bottom-0 left-0 right-0'>
                <Footer />
            </div>
        </div>
    )
}