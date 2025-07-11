import Header from '../components/Header';
import Secao from '../components/Secao';
import Footer from '../components/Footer';

export default function Feminino() {
    return (
        <div>
            <Header />
            <div className='pt-16'>
                <Secao />
                <div className='fixed bottom-0 left-0 right-0'>
                    <Footer />
                </div>
            </div>
        </div>
    )
}