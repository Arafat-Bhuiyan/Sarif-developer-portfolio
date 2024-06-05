import LogoTitle from '../../assets/images/logo-s.png'

const Home = () => {
    
    return (
        <div className="Container home-page">
            <div className="text-zone">
                <h1>Hi, <br/> I'm
                <img src={LogoTitle} alt="developer" />
                arif
                <br/>
                web developer
                </h1>
                <h2>Frontend Developer / JavaScript Expert</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
        </div>
    )
}

export default Home