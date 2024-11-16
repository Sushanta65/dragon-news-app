import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="flex justify-between items-center py-10">
            <div></div>
            <div>
                <ul className="flex gap-5">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/news'>News</Link></li>
                </ul>
            </div>
            <div className="flex items-center gap-2">
                <button><FaUserCircle size={25}/></button>
                <button className="btn btn-sm">Login</button>
            </div>
        </div>
    );
};

export default Navbar;