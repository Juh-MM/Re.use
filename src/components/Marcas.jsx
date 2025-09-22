import adidas from '../assets/marcas/adidas.png'
import nike from '../assets/marcas/nike.png'
import fila from '../assets/marcas/fila.png'
import baw from '../assets/marcas/baw.png'
import renner from '../assets/marcas/renner.png'
import zara from '../assets/marcas/zara.png'
import channel from '../assets/marcas/channel.png'

export default function Marcas() {
    return (
        <section className='flex flex-row gap-16 items-center px-12 py-8 bg-stone-50 overflow-x-auto'>
            <img src={adidas} className='' alt="" />
            <img src={nike} className='' alt="" />
            <img src={fila} className='' alt="" />
            <img src={baw} className='' alt="" />
            <img src={renner} className='' alt="" />
            <img src={zara} className='' alt="" />
            <img src={channel} className='' alt="" />
        </section>
    );
}