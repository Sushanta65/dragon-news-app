import { CiFacebook, CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";

const FIndUsOn = () => {
    return (
        <div className="mt-10 ">
            <h2 className="font-semibold">Find Us On</h2>
            <div className="mt-3 flex flex-col">
                <button className="btn btn-sm"><CiFacebook size={20}/> Facebook</button>
                <button  className="btn btn-sm"><FaInstagram size={20}/> Instagram</button>
                <button  className="btn btn-sm"><CiLinkedin size={20}/> LinkedIn</button>
            </div>
        </div>
    );
};

export default FIndUsOn;