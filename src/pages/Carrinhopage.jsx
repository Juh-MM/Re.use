import Header from '../components/Header';
import Footer from '../components/Footer';
import ReturnButton from '../components/ReturnButton';

export default function ProdutoPage() {
    return (
        <div className='flex flex-col bg-neutral-50 h-screen'>
            <Header />
            <ReturnButton />
            <div className='flex flex-col gap-8 bg-neutral-50 justify-center items-center h-screen'>
                <p className='font-medium text-md'>Página em construção!</p>
            </div>  
        </div>
    )
}