import { useNavigate } from "react-router-dom";
import Arrow from '../assets/Arrow 1.png';

export default function ReturnButton() {
    const navigate = useNavigate();

    return (
        <div className="flex flex-row gap-2 items-start p-6" onClick={() => navigate(-1)}>
            <img src={Arrow} />
        </div>
    );
}
