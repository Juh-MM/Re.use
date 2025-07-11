import Header from '../components/Header';
import Footer from '../components/Footer';
import ReturnButton from '../components/ReturnButton';

export default function ProdutoPage() {
    return (
        <div>
            <Header />
            <div className='pt-16'>
                <ReturnButton />
                <div className='fixed bottom-0 left-0 right-0'>
                    <Footer />
                </div>
            </div>
        </div>
    )
}