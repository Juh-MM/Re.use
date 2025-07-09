import Header from '../components/Header';
import Secao from '../components/Secao';
import Footer from '../components/Footer';

export default function Infantil() {
    return (
        <div>
            <Header />
            <div className='pt-16'>
                <Secao />
                <Footer />
            </div>
        </div>
    )
}