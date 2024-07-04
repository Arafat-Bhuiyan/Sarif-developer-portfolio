import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 2000);
    }, [])

        const sendEmail = (e) => {
            e.preventDefault();

            emailjs
                .sendForm(
                    'service_r0iljpl',
                    'template_vsz1zym',
                    refForm.current,
                    {
                        publicKey: 'Ef-_LC1fIauwzrgMh',
                    })
                .then(
                    () => {
                        alert('Message successfully sent!')
                        window.location.reload(false)
                    },
                    () => {
                        alert('Failed to send the message, please try again')
                    }
                )
        }

        return (
            <>
                <div className='container contact-page'>
                    <div className='text-zone'>
                        <h1>
                            <AnimatedLetters
                                letterClass={letterClass}
                                strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                                idx={15}
                            />
                        </h1>
                        <p>
                            I am open to freelance opportunities, especially those that are ambitious or large-scale projects. However, if you have other requests or questions, please don't hesitate to contact me using the form below.
                        </p>
                        <div className='contact-form'>
                            <form ref={refForm} onSubmit={sendEmail}>
                                <ul>
                                    <li className='half'>
                                        <input type="text" name="name" placeholder='Name' required />
                                    </li>
                                    <li className='half'>
                                        <input type="email" name="email" placeholder='Email' required />
                                    </li>
                                    <li>
                                        <input placeholder='Subject' type='text'
                                            name='subject'
                                            required />
                                    </li>
                                    <li>
                                        <textarea
                                            placeholder="Message"
                                            name="message"
                                            required>

                                        </textarea>
                                    </li>
                                    <li>
                                        <input type='submit' className='flat-button' value="SEND" />
                                    </li>
                                </ul>
                            </form>
                        </div>
                    </div>
                </div>
                <Loader type='pacman' />
            </>
        )
    }
    export default Contact