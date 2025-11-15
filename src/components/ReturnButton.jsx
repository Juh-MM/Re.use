import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

export default function ReturnButton() {
    const navigate = useNavigate();

    return (
        <div className="p-6" onClick={() => navigate(-1)}>
           <IoIosArrowBack className="text-5xl" />
        </div>
    );
}
