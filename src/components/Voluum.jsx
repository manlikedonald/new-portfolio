import React from 'react'
import logo from '../assets/logo.svg'
import arrow from '../assets/bi_arrow-right.svg'
import lowfidel from '../assets/lowfidelityvoluum.png'
import lowfidelity from '../assets/fullvoluum.png'
import {Link} from 'react-router-dom'
import video from '../assets/Screen Recording 2021-11-03 at 07.42.28.mov'
import donald from '../assets/Ellipse 2.svg'
import linkedin from '../assets/bx_bxl-linkedin.svg'
import twitter from '../assets/ant-design_twitter-outlined.svg'
import github from '../assets/github.svg'
import medium from '../assets/akar-icons_medium-fill.svg'

function Urudi() {
    return (
        <div className='voluum-page'>
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
                    <h1>Voluum</h1>
                    <hr />
                    <p>Product Designer</p>
                </div>

                <div className="define">
                    <div className='text'>
                        <p>
                            <b>Define</b>                            
                        </p>

                        <br />
                        <br />
                        <p className='content'>
                            Voluum provides an affiliate marketing software that changes the marketing game  
                            <br />
                            Starting a campaign? Looking for how to track progress of your campaign? Voluum is the answer
                            <br />
                            Voluum gives you the ability to manage large set of advertising data and it's integrated with several traffic sources. It also offers cookie-less tracking & conversion attribution
                            <br />
                            Pretty sweet right? Exactly !
                        </p>
                        <br />
                        <br />
                        <p>
                            <a 
                                href="https://www.figma.com/proto/9NIybC46KgMdfiOimZBsaJ/Voluum?page-id=0%3A1&node-id=83%3A2&viewport=241%2C48%2C0.49&scaling=min-zoom&starting-point-node-id=83%3A2"
                                target='_blank'
                                rel='noreferrer'
                            >
                                <b>See prototype </b>    
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
                        Voluum offers a lot of marketing services, that could be easily clustered up. 
                        <br />
                        The idea was to clearly show all services rendered by Voluum, so users can easily navigate through the site and find whatever they want.
                        <br />
                        How else to make bulky content look good? Proper spacing and use of illustrations !
                        <br />
                        <br />
                        
                        Now, it's time for prototyping;
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
                            <p>I already had a picture in my head, so I drew out a mock-up of what I thought Voluum's landing page should look like. </p>
                            
                            <div className="image">
                                <figure>
                                    <img src={lowfidel} alt="low fidelity"  />
                                    <figcaption>Low Fidelity Voluum</figcaption>
                                </figure>
                                
                            </div>
                            <br />
                            <p>The idea was to explain in simple terms, what Voluum is all about and then buttress our point with illustrations.</p>
                            <p>After making the ‘top notch’ low-fidelity prototype, it was time to get high fidelity screens in people’s faces.</p>
                        </div>
                        <br />
                        <div className="images">
                                <img src={lowfidelity} alt="low fidelity" />    
                            
                        </div>
                    </div>
                </div>

                <div className="test">   
                    <div className="content">
                        Feedback from people showed that they actually loved the design as it gave them a sense of what Voluum was all about
                        <br />
                        <br />
                        Here's a preview of the Voluum design;
                    </div>

                    <div className="video">
                        <figure>
                            <video width="320" height="240" controls>
                                <source src={video} type="video/mp4" />
                            </video>
                            <figcaption>Voluum</figcaption>
                        </figure>
                           
                    </div>
                    
                    <div className='site'>
                        
                        <p>The product was ready, time to show it to the world. It's important to note that work is never finished as a designer, this product would be subject to redesign when the need arises.</p>
                        <br />
                        <p>
                            <a 
                                href="https://www.figma.com/proto/9NIybC46KgMdfiOimZBsaJ/Voluum?page-id=0%3A1&node-id=83%3A2&viewport=241%2C48%2C0.49&scaling=min-zoom&starting-point-node-id=83%3A2"
                                target='_blank'
                                rel='noreferrer'
                            >
                                <b>See prototype </b>    
                            </a>

                            <img src={arrow} alt="arrow" className='arrow' />
                        </p>
                    </div>
                </div>

                <div className="case-study">
                    <p className='middle'>View other case studies:</p>

                    <Link
                        to= '/urudi'
                    >
                        <p>
                            <b>Urudi</b>
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
