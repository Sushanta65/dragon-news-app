import moment from 'moment';
import logo from '../assets/logo.png'
const Header = () => {
    return (
        <div className='w-4/5 mx-auto py-5 text-center'>
            <img className='w-96 mx-auto' src={logo} alt="Logo" />
            <h2 className='py-4 pb-2 text-gray-500' >Journalism Without Fear or Favour</h2>
            <p>{moment().format('dddd, MMMM Do YYYY')}</p>
        </div>
    );
};

export default Header;