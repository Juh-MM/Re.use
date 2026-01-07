import { FaInstagram } from "react-icons/fa";
import { RiFacebookFill  } from "react-icons/ri";
import { FaTiktok } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { HiOutlinePhone } from "react-icons/hi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { MdPix } from "react-icons/md";
import { BsCreditCard2Back } from "react-icons/bs";
import { FaBarcode } from "react-icons/fa6";


export default function Footer() {
    return(
        <div className='flex flex-row bg-stone-900 justify-evenly text-white p-4 pb-19 pt-8 '>
            <div className='items-start'>
                <h1 className='font-bold'>Nossas redes:</h1>
                <div className='flex flex-col'>
                    <div>
                        <FaInstagram className='inline mr-2' />
                        <a href="" className="font-light hover:underline">instagram</a>
                    </div>
                    <div>
                        <RiFacebookFill  className='inline mr-2' />
                        <a href="" className="font-light hover:underline">facebook</a>
                    </div>
                    <div>
                        <FaTiktok className='inline mr-2' />
                        <a href="" className="font-light hover:underline">tiktok</a>
                    </div>
                </div>
            </div>
            <div className='border-x px-20 border-white/50'>
                <h1 className='font-bold'>Entre em contato:</h1>
                <div className='flex flex-col'>
                    <div>
                        <HiOutlineMail className='inline mr-2' />
                        <a href="mailto:contato@reuse.com" className=" font-light hover:underline">contato@reuse.com</a>
                    </div>
                    <div>
                        <HiOutlinePhone className='inline mr-2' />
                        <a href="tel:+5581999999999" className="font-light hover:underline">(81) 90000-0000</a>
                    </div>
                    <div>
                        <HiOutlineLocationMarker className='inline mr-2' />
                        <a href="" className="font-light hover:underline">Rua Francisco Assis 124 - Boa vista, Recife - PE</a>
                    </div>
                </div>
            </div>
            <div>
                <h1 className='font-bold'>Metodos de pagamento:</h1>
                <div className='flex flex-col font-light'>
                    <div className="flex items-center">
                        <MdPix className='inline mr-2' />
                        <h2>PIX</h2>
                    </div>
                    <div className="flex items-center">
                        <BsCreditCard2Back className='inline mr-2' />
                        <h2>Boleto Bancário</h2>
                    </div>
                    <div className="flex items-center">
                        <FaBarcode className='inline mr-2' />
                        <h2>Boleto</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}