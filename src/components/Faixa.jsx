import { FiTrendingUp } from "react-icons/fi";

export default function Faixa() {
    return (
        <div className="bg-stone-900 p-5 w-full flex items-center justify-center gap-2.5">
            {/* <FiTrendingUp className="text-amber-50 text-2xl"/> */}
            <h1 className="text-amber-50 text-2xl font-bold">Peças a partir de</h1>
            <h1 className="text-amber-50 text-3xl font-black">5 reais</h1>
        </div>
    );
}