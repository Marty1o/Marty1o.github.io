import './index.scss';
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useRef } from 'react';
import { useState } from 'react';
import emailjs from '@emailjs/browser'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

const Contact = () => {

    const [letterClass, setLetterClass] = useState('text-animate');
    const refForm = useRef()

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm(
                'YOUR-SERVICE-ID',
                'YOUR-TEMPLATE-ID',
                refForm.current,
                'YOU-PUBLIC-KEY'
            )
            .then(
                () => {
                    alert('Message successfully sent!')
                    window.location.reload(false)
                },
                () => {
                    alert('Message Failed to send, please try again.')
                }
        )
    }

    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters letterClass={letterClass} strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e']} idx={15} />
                    </h1>

                    <p>
                        Let's connect! Whether you have a project in mind, employment opportunities, want to collaborate, or simply want to connect, feel free to reach out. Don't hesitate to send a message! Looking forward to connecting with you!
                    </p>

                    <div className='contact-form' >
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input type='text' name='name' placeholder='Name' required />
                                </li>

                                <li className='half'>
                                    <input type='email' name='email' placeholder='Email' required />
                                </li>

                                <li>
                                    <input placeholder='Subject' type='text' name='subject' required />
                                </li>

                                <li>
                                    <textarea placeholder='Message' name='message' required />
                                </li>

                                <li>
                                    <input type='submit' className='flat-button' value="SEND" />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className='info-map'>
                    Martin Carranza Alvarez
                    <br />
                    Greater Phoenix Area
                    <br />
                    Phoenix, Arizona
                    <br />
                    United States
                    <br />
                    <span>martin.c.842@gmail.com</span>
                </div>
                <div className='map-wrap'>
                    <MapContainer center={[33.44838, -112.07404]} zoom={7}>
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <Marker position={[33.44838, -112.07404]}>
                            <Popup>Ever in the Greater Phoenix Area? Send me a message and we can connect!</Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
        </>
    )
}

export default Contact
