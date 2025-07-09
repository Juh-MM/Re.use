export default function Footer() {
    return(
        <div className='flex flex-row bg-stone-900 justify-evenly text-white p-4 pb-19 pt-8'>
            <div className='items-start'>
                <h1 className='font-bold'>Nossas redes:</h1>
                <div className='flex flex-col'>
                    <a href="" className="font-light hover:underline">instagram</a>
                    <a href="" className="font-light hover:underline">facebook</a>
                    <a href="" className="font-light hover:underline">tiktok</a>
                </div>
            </div>
            <div className='border-x px-20 border-white/50'>
                <h1 className='font-bold'>Entre em contato:</h1>
                <div className='flex flex-col'>
                    <a href="mailto:contato@reuse.com" className=" font-light hover:underline">contato@reuse.com</a>
                    <a href="tel:+5581999999999" className="font-light hover:underline">(81) 90000-0000</a>
                    <a href="" className="font-light hover:underline">Rua Francisco Assis 124 - Boa vista, Recife - PE</a>
                </div>
            </div>
            <div className=''>
                <h1 className='font-bold'>Metodos de pagamento:</h1>
                <div className='flex flex-col font-light'>
                    <h2>PIX</h2>
                    <h2>Cartão de crédito</h2>
                    <h2>Boleto</h2>
                </div>
            </div>
        </div>
    )
}
//            className=''