import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

export default function ReturnButton() {
    const navigate = useNavigate();

    return (
        <div className="flex justify-center items-center cursor-pointer w-12 h-12 m-5" onClick={() => navigate(-1)}>
           <IoIosArrowBack className="text-5xl" />
        </div>
    );
}
