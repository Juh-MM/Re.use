import Header from '../components/Header';
import SecaoProdutos from '../components/SecaoProdutos';
import Footer from '../components/Footer';

export default function Acessórios() {
    return (
        <div>
            <Header />
            <div className='pt-16'>
                <SecaoProdutos categoria="acessorios" />
                <div className='fixed bottom-0 left-0 right-0'>
                    <Footer />
                </div>
            </div>
        </div>
    )
}