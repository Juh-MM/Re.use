import adidas from '../assets/marcas/adidas.png'
import nike from '../assets/marcas/nike.png'
import fila from '../assets/marcas/fila.png'
import baw from '../assets/marcas/baw.png'
import renner from '../assets/marcas/renner.png'
import zara from '../assets/marcas/zara.png'
import chanel from '../assets/marcas/chanel.png'

export default function Marcas() {
    return (
        <section className='flex flex-row gap-10 justify-center px-12 py-8 bg-stone-50 overflow-x-auto'>
            <img src={adidas} className='h-12' alt="" />
            <img src={nike} className='h-12' alt="" />
            <img src={fila} className='h-12' alt="" />
            <img src={baw} className='h-12' alt="" />
            <img src={renner} className='h-12' alt="" />
            <img src={zara} className='h-12' alt="" />
            <img src={chanel} className='h-12' alt="" />
        </section>
    );
}