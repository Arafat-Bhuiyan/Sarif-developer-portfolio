import {Link} from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/images/logo-s.png'
import Sarif from '../../assets/images/logo_sun_sarif.png'


const Sidebar = () => (
    <div  className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoS} alt="logo" />
            <img src={Sarif} alt="sarif" />
        </Link>
    </div>
)

export default Sidebar
