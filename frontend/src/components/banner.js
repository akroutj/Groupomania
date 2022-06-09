
import '../styles/banner.css'
import logo from '../assets/logo-black.png'

function Banner() {
    return (
        <div className="banner">
            <img src={logo} alt="Logo black groupomania" className='banner-logo'></img>
            <h1 className='banner-title'>GROUPOMANIA</h1>
        </div>
    )
}

export default Banner