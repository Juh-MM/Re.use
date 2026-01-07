import Frame from '../assets/Frame 1.png'

export default function Apresentacao() {
    return (
        <section className='flex flex-col gap-8 items-center px-12 py-8 bg-stone-50'>
            <div className='flex items-center gap-2'>
                <h1 className='font-bold text-xl'>• Quem somos</h1>
            </div>
            <div className='flex flex-col md:flex-row justify-between items-center gap-10'>
                <img src={Frame} className='max-w-80 hidden md:block' alt="imagem de apresentação" />
                <div className='flex items-center'>
                    <div className='flex flex-col max-w-200 py-10 md:py-20 lg:py-33 px-10 bg-stone-900 text-amber-50 rounded-xl'>
                    <h1 className='font-bold pb-4 text-2xl'>Seja bem vindo ao Re.use!</h1>
                    <p className='pb-2'>Nosso brechó nasceu da ideia de unir estilo autêntico e consumo consciente. Cada peça é escolhida através de uma curadoria cuidadosa, valorizando a originalidade e dando uma nova vida ao que já existe.</p>
                    <p>Acreditamos que moda é expressão, não desperdício — por isso, oferecemos roupas e acessórios que respeitam o meio ambiente e celebram sua identidade única</p>
                </div>
                </div>
            </div>
        </section>
    );
}