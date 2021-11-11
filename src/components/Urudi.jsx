import React from 'react'
import logo from '../assets/logo.svg'
import arrow from '../assets/bi_arrow-right.svg'
import lowfidel from '../assets/lowfidel.png'
import lowfidelity from '../assets/lowfidelity.png'
import darklogin from '../assets/blacklogin.png'
import darksign from '../assets/darksign.png'
import lowfide from '../assets/lowfide.png'
import {Link} from 'react-router-dom'
import whitehome from '../assets/oldhome.png'
import whitelogin from '../assets/oldlogin.png'
import whitesignup from '../assets/oldsignup.png'
import whitesign from '../assets/whitesign.png'
import darkabout from '../assets/oldAbout.png'
import whiteabout from '../assets/whiteabout.png'
import critic from '../assets/critic.png'
import critics from '../assets/critics.png'
import exhibitA from '../assets/exhibitA.png'
import exhibitB from '../assets/exhibitB.png'
import video from '../assets/Screen Recording 2021-10-29 at 09.57.32.mov'
import donald from '../assets/Ellipse 2.svg'
import linkedin from '../assets/bx_bxl-linkedin.svg'
import twitter from '../assets/ant-design_twitter-outlined.svg'
import github from '../assets/github.svg'
import medium from '../assets/akar-icons_medium-fill.svg'

function Urudi() {
    return (
        <div className='urudi-page'>
            <nav id='home'>
                <div className="nav-container">
                    <div className="logo-div">
                        <Link
                            to='/'
                        >
                            <img src={logo} alt="donald logo" />
                        </Link>
                    </div>

                    <div className="nav-links">
                        <ul>
                            <Link
                                to='/'
                            >
                                <li> Home </li>
                            </Link>
                            

                            <li>
                                <a href="www.medium.com/odera" target='_blank'> Blog</a>
                            </li>

                            <a href="mailto:ugobudedonald@gmail.com">
                                <button>Send me a message</button> 
                            </a>
                               
                        </ul>
                    </div>
                </div>
               
            </nav>

            <body>
                <div className="heading">
                    <h1>Urudi</h1>
                    <hr />
                    <p>Product Lead</p>
                </div>

                <div className="define">
                    <div className='text'>
                        <p>
                            <b>Define</b>                            
                        </p>

                        <br />
                        <br />
                        <p className='content'>
                            Urudi was birthed, to bring about fan's inclusion in the profit made from musical projects. 
                            <br />
                            We all have different favorite musicians, imagine how crazy it would be if you could support your idols with cheers and then smile to the bank at the same time. 
                            <br />
                            Pretty sweet right? Exactly !
                        </p>
                        <br />
                        <br />
                        <p>
                            <a 
                                href="https://www.urudii.com"
                                target='_blank'
                                rel='noreferrer'
                            >
                                <b>See live site </b>    
                            </a>

                            <img src={arrow} alt="arrow" className='arrow' />
                        </p>
                    </div>

                    <div className='design-process'>
                        <p className='head'>
                            DESIGN PROCESS
                        </p>
                        <hr />
                        <br />

                        <p className='numbers'>Define 01</p>
                        <p className='numbers'>Ideate 02</p>
                        <p className='numbers'>Prototype 03</p>
                        <p className='numbers'>Test 04</p>
                    </div>
                </div>

                <div className="ideate">
                    <p>
                        <b>Ideate</b>
                    </p>

                    <br />
                    <br />
                    <p className='content'>
                        Seeing that Urudi was centered around making profit from musical projects, the design had to be all about the music. 
                        <br />
                        I wanted people to visit the site and know what it's all about, even without reading any content.
                        <br />
                        We decided to put pictures of world class artistes in the face of our viewers, something to arouse their interest.
                        <br />
                        Nothing says “ I’m interesting, view me “ like a site that has pictures of artistes people love. 
                        <br />
                        <br />
                        
                        But first, the low-fidelity prototypes;
                    </p>
                </div>

                <div className='prototype'>
                    <p>
                        <b>Prototype</b>
                    </p>
                    <br />
                    <br />
                    <div className="content">
                        <div className='low-fid'>
                            <p>I already had a picture in my head, so I drew out a mock-up of what I thought Urudi should look like. It is important to note that I draw better than this, this was a eureka moment.</p>
                            
                            <div className="image">
                                <figure>
                                    <img src={lowfidel} alt="low fidelity"  />
                                    <figcaption>Low Fidelity Urudi</figcaption>
                                </figure>
                                
                            </div>
                            <br />
                            <p>Regardless of how funny this prototype looks, the idea is to explain in simple terms, what Urudi is all about and then buttress our point with  pictures of famous artistes</p>
                            <p>After making the ‘top notch’ low-fidelity prototype, it was time to get high fidelity screens in people’s faces.</p>
                        </div>
                        <br />
                        <div className="images">
                            <div>
                                <img src={lowfidelity} alt="low fidelity" />    
                            </div>
                            
                            &nbsp;

                            <div>
                                <img src={darkabout} alt="fidelity" />    
                            </div>
                            
                            &nbsp;

                            <div className='others'>
                                <img src={darklogin} alt="low fidelity" />
                                &nbsp;
                                <img src={lowfide} alt="low fidelity" />    
                            </div>
                            &nbsp;
                            
                            <div>
                                <img src={darksign} alt="fidelity" className='otu' />    
                            </div>
                            
                        </div>
                        <div className="images">
                            <div>
                                <img src={whitehome} alt="low fidelity" />    
                            </div>
                            
                            &nbsp;

                            <div>
                                <img src={whiteabout} alt="low fidelity" />    
                            </div>

                            &nbsp;

                            <div className='others'>
                                <img src={whitelogin} alt="low fidelity" />
                                &nbsp;
                                <img src={whitesignup} alt="low fidelity" />    
                            </div>
                            &nbsp;
                            <div>
                                <img src={whitesign} alt="fidelity" className='otu' />    
                            </div>
                            
                        </div>
                        <br />
                        <p>
                            I then put these screens in people’s faces, to get their criticisms/ recommendations.
                            <br />
                            The test audience gave lots of feedback, majority were of the notion that Urudi should be all about the music. 
                            <br />
                            Most of them stated that seeing pictures of their favorite artistes was the best part of the page
                        </p>

                        <div className='critic-div'>
                            <img src={critics} alt="critic" />
                            &nbsp;

                            <span>
                                <img src={critic} alt="critic" />    
                            </span>
                            
                        </div>

                        <p>A re-design was inevitable, but this time I decided to use A/B testing. I designed two landing pages based on the input received from the test subjects, I then asked them to make a choice </p> 
                    </div>
                </div>

                <div className="test">
                    <div className="images">
                        <span>
                            <img src={exhibitA} alt="exhibit A" className='exhibita' />
                        </span>

                        <span>
                            <img src={exhibitB} alt="exhibit B" className='exhibitb' />
                        </span>
                    </div>
                    
                    <div className="content">
                        Majority of the test audience chose exhibit A, so I built on that design.
                        <br />
                        
                        I proposed a carousel, so the pictures change after 3 seconds. This would bring a kind of suspense as people would want to know the next artiste to show on their screen.
                    </div>

                    <div className="video">
                        <figure>
                            <video width="320" height="240" controls>
                                <source src={video} type="video/mp4" />
                            </video>
                            <figcaption>Carousel showing various world class artistes</figcaption>
                        </figure>
                           
                    </div>
                    
                    <div className='site'>
                        
                        <p>The product was ready, time to show it to the world. It's important to note that work is never finished as a designer, this product would be subject to redesign when the need arises.</p>
                        <br />
                        <p>
                            <a 
                                href="https://www.urudii.com"
                                target='_blank'
                                rel='noreferrer'
                            >
                                <b>See live site </b>    
                            </a>

                            <img src={arrow} alt="arrow" className='arrow' />
                        </p>
                    </div>
                </div>

                <div className="case-study">
                    <p className='middle'>View other case studies:</p>

                    <Link
                        to= '/voluum'
                    >
                        <p>
                            <b>Voluum</b>
                            {/* <img src={arrow} alt="arrow" className='arrow' /> */}
                        </p>
                    </Link>

                    <Link
                        to= '/engage'
                    >
                        <p>
                            <b>Engage</b>
                            {/* <img src={arrow} alt="arrow" className='arrow' /> */}
                        </p>
                    </Link>
                </div>
            </body>

            <footer>
                <div className='content'>
                    <div className="donald">
                        <img src={donald} alt="little donald" />
                        <p>
                            <i>'I just wan soft' - </i>
                            <span>
                                Donald, 2020
                            </span>
                        </p>
                    </div>

                    <div></div>

                    <div className="socials">
                    <a 
                            href="https://www.linkedin.com/in/donald-ugobude/"
                            target='_blank'
                            rel='noreferrer'
                        >
                            <img src={linkedin} alt="LinkedIn" />
                        </a>
                            
                        <a 
                            href="https://www.twitter.com/0d3ra"
                            target='_blank'
                            rel='noreferrer'
                        >
                            <img src={twitter} alt="twitter" />
                        </a>

                        <a 
                            href="https://www.github.com/manlikedonald"
                            target='_blank'
                            rel='noreferrer' 
                        >
                            <img src={github} alt="Github" />    
                        </a>

                        <a 
                            href="https://medium.com/@odera"
                            target='_blank'
                            rel='noreferrer'
                        >
                            <img src={medium} alt="Medium" />    
                        </a>
                    </div>

                    <div></div>
                </div>
                <p>©️ 2021</p> 
            </footer>
        </div>
    )
}

export default Urudi
