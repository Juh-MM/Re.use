import adidas from '../assets/marcas/adidas.png'
import nike from '../assets/marcas/nike.png'
import fila from '../assets/marcas/fila.png'
import baw from '../assets/marcas/baw.png'
import renner from '../assets/marcas/renner.png'
import zara from '../assets/marcas/zara.png'
import chanel from '../assets/marcas/chanel.png'

export default function Marcas() {
    return (
        <section className='flex flex-row gap-20 justify-center h-auto px-12 py-8 bg-stone-50'>
            <img src={adidas} className='w-18' alt="" />
            <img src={nike} className='w-23' alt="" />
            <img src={fila} className='w-18' alt="" />
            <img src={baw} className='w-28' alt="" />
            <img src={renner} className='w-38' alt="" />
            <img src={zara} className='w-21' alt="" />
            <img src={chanel} className='w-18' alt="" />
        </section>
    );
}