import Header from '../components/Header';
import SecaoProdutos from '../components/SecaoProdutos';
import Footer from '../components/Footer';

export default function Infantil() {
    return (
        <div>
            <Header />
            <div className='pt-16'>
                <SecaoProdutos categoria="infantil" />
                <div className='fixed bottom-0 left-0 right-0'>
                    <Footer />
                </div>
            </div>
        </div>
    )
}