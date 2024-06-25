import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 2000);
    }, [])

    return (
        <>
            <div className='container about-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                            idx={15}
                        />
                    </h1>
                    <p>As a frontend developer, I am driven by a passion for creating exceptional user experiences. I continuously hone my skills in the latest technologies and best practices to develop innovative, high-performing applications. My ambition is to set new standards in UI/UX design and contribute to projects that transform the digital landscape.</p>

                    <p>I am confident in my skills as a frontend developer, adept at creating seamless and engaging user experiences. With expertise in modern technologies, I consistently deliver high-quality, performant applications.</p>

                    <p>If I need to define myself in one sentence that would be a family person, movie freak, travel enthusiast, and tech-obsessed.</p>
                </div>

                <div className='stage-cube-cont'>
                    <div className='cubespinner'>

                        <div className='face1'>
                            <FontAwesomeIcon icon={faHtml5} color='#f06529' />
                        </div>
                        <div className='face2'>
                            <FontAwesomeIcon icon={faCss3} color='#28a4d9' />
                        </div>
                        <div className='face3'>
                            <FontAwesomeIcon icon={faJsSquare} color='#efd81d' />
                        </div>
                        <div className='face4'>
                            <FontAwesomeIcon icon={faReact} color='#5ed4f4' />
                        </div>
                        <div className='face5'>
                            <FontAwesomeIcon icon={faGitAlt} color='#ec4d4e' />
                        </div>
                    </div>
                </div>
            </div>
            <Loader type='pacman' />
        </>
    )

}

export default About