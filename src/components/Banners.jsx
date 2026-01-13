import { useEffect, useState } from 'react';
import banner1 from '../assets/banners/banner1.png';
import banner2 from '../assets/banners/banner2.png';
import banner3 from '../assets/banners/banner3.png';

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
        <div className="bg-stone-50 pb-4 pt-0 w-full flex flex-col items-center">
        <img
            src={images[current]}
            alt={`Banner ${current + 1}`}
            className="w-full h-full"
        />

        <div className="flex gap-2 mt-4">
            {images.map((_, index) => (
            <span
                key={index}
                className={`w-5 h-1 rounded-sm ${
                index === current ? 'bg-stone-700' : 'bg-gray-300'
                } transition-all duration-300`}
            />
            ))}
        </div>
        </div>
    );
}

