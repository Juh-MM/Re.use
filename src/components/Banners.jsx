import { useEffect, useState } from 'react';
import banner1 from '../assets/banner 1.png';
import banner2 from '../assets/banner 2.png';
import banner3 from '../assets/banner 3.png';

const images = [banner1, banner2, banner3];

export default function Banners() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
        setCurrent((prev) => (prev + 1) % images.length);
        }, 8000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="bg-stone-50 p-4 w-full flex flex-col items-center">
        <img
            src={images[current]}
            alt={`Banner ${current + 1}`}
            className="w-full h-full"
        />

        {/* Indicadores */}
        <div className="flex gap-2 mt-4">
            {images.map((_, index) => (
            <span
                key={index}
                className={`w-3 h-3 rounded-full ${
                index === current ? 'bg-stone-600' : 'bg-gray-300'
                } transition-all duration-300`}
            />
            ))}
        </div>
        </div>
    );
}

