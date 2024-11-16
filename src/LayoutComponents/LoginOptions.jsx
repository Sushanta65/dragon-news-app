import { FaGithub, FaGoogle } from "react-icons/fa";

const LoginOptions = () => {
    return (
        <div>
            <h2 className="font-semibold pb-3">Login With</h2>
            <div>
                <button className="btn btn-sm w-full"><FaGoogle /> Login With Google</button>
                <button className="btn btn-sm w-full mt-2"><FaGithub /> Login With Github</button>
            </div>
        </div>
    );
};

export default LoginOptions;