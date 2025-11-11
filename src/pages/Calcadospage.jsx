import Header from '../components/Header';
import SecaoProdutos from '../components/SecaoProdutos';
import Footer from '../components/Footer';

export default function Calcados() {
    return (
        <div className="bg-stone-50 flex flex-col min-h-screen justify-between">
            <Header />
            <SecaoProdutos categoria = "calçados" />    
            <Footer />
        </div>
    )
}