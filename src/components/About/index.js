import { useEffect } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngular, faCss3, faHtml5, faJava, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';


const About = () => {
    
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']}
                        idx={15} />
                </h1>

                <p>
                    Hey there! I'm happy to introduce myself as a Software Development graduate from Grand Canyon University, living in the sunny city of Phoenix, AZ. As a proud Hispanic, I bring a unique perspective and a whole lot of ambition to the table. I'm constantly striving to reach new heights in my career as a software developer. My journey doesn't stop at graduation! My goal is to keep expanding my skills and knowledge in the evolving field of software development. 
                </p>

                <p>
                    You can also find me out and about, exploring what the city has to offer. Hitting the gym and working up a sweat is another favorite hobby of mine, as it helps me stay focused and energized. And let's not forget movie nights! I love kicking back, relaxing, and getting lost in a good film. But my thirst for learning is insatiable, so I'm always on the lookout for exciting new things to discover.
                </p>

                <p>
                    So, whether it's crafting new software solutions or indulging in my favorite activities, I approach life with a friendly and positive attitude. I can't wait to see where this journey takes me and to connect with like minded individuals who share the same passion for growth and adventure. Let's build something amazing together!
                </p>

            </div>

            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faAngular} color='#DD0031'/>
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faHtml5} color='#F06529' />
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faCss3} color='#28A4D9' />
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faReact} color='#5ED4F4' />
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faJsSquare} color='#EFD81D' />
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faJava} color='#f89820' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About