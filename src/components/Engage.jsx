import React from 'react'
import logo from '../assets/logo.svg'
import arrow from '../assets/bi_arrow-right.svg'
// import lowfidel from '../assets/lowfidelityvoluum.png'
import lowfidelity from '../assets/engagehome.png'
import about from '../assets/engageabout.png'
import login from '../assets/engagelogin.png'
import signup from '../assets/engagesignup.png'
import help from '../assets/engagextra.png'
import {Link} from 'react-router-dom'
import video from '../assets/Screen Recording 2021-11-03 at 09.44.57.mov'
import donald from '../assets/Ellipse 2.svg'
import linkedin from '../assets/bx_bxl-linkedin.svg'
import twitter from '../assets/ant-design_twitter-outlined.svg'
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
                    <h1>Engage</h1>
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
                            Engage was birthed to solve cashflow problems in business.  
                            <br />
                            Most businesses have clients who don't pay up on time. 
                            <br />
                            How else would the business thrive? How would they access funds needed for daily running of business if the client hasn't paid? This is where Engage comes in.
                            <br />
                            Engage offers credit to certified businesses, so client's slow payment doesn't slow down your business growth.
                            <br />
                            Pretty sweet right? Exactly !
                        </p>
                        <br />
                        <p>
                            <a 
                                href="https://www.figma.com/proto/6ekCXJrPgKhsuMwn7RmvsP/Engage--The-Bank-of-the-future?page-id=0%3A1&node-id=57%3A41&viewport=241%2C48%2C0.08&scaling=min-zoom&starting-point-node-id=2%3A2"
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
                        Engage is all about providing financial help to SMBs, to help in the daily running of business. 
                        <br />
                        I mean, the aim of the business sells itself. 
                        <br />
                        The design had to fully explain what the product entails, who can get credit and how to access the credit lines provided.
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
                        
                        <p>Products centered around finance have to clear, unambiguous because one unclear sentence can make you lose a prospect</p>
                        <p>Seeing that this product was made for SMBs, I created some wireframes and put these screens in the faces of business-oriented people, traders and employees in the fintech space.</p>
                        <br />
                        <div className="images">
                            <div>
                                <img src={lowfidelity} alt="low fidelity" />    
                            </div>
                            
                            &nbsp;

                            <div>
                                <img src={about} alt="fidelity" />    
                            </div>
                            
                            &nbsp;

                            <div className='others'>
                                <img src={login} alt="low fidelity" />
                                &nbsp;
                                <img src={signup} alt="low fidelity" />    
                            </div>
                            &nbsp;
                            
                            <div>
                                <img src={help} alt="fidelity" />    
                            </div>
                            
                        </div>
                        
                    </div>
                </div>

                <div className="test">
                    <div className="content">
                        <p className='omo'>
                            Feedback from people showed that they actually loved the design as it gave them a sense of what Engage was all about
                            <br />
                            <br />
                            Here's a preview of the Voluum design;
                        </p> 
                    </div>

                    <div className="video">
                        <figure>
                            <video width="320" height="240" controls>
                                <source src={video} type="video/mp4" />
                            </video>
                            <figcaption>Engage</figcaption>
                        </figure>
                           
                    </div>
                    
                    <div className='site'>
                        
                        <p>The product was ready, time to show it to the world. It's important to note that work is never finished as a designer, this product would be subject to redesign when the need arises.</p>
                        <br />
                        <p>
                            <a 
                                href="https://www.figma.com/proto/6ekCXJrPgKhsuMwn7RmvsP/Engage--The-Bank-of-the-future?page-id=0%3A1&node-id=57%3A41&viewport=241%2C48%2C0.08&scaling=min-zoom&starting-point-node-id=2%3A2"
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
                        to= '/voluum'
                    >
                        <p>
                            <b>Voluum</b>
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
                        <img src={linkedin} alt="LinkedIn" />
                        <img src={twitter} alt="twitter" />
                        <img src={medium} alt="Medium" />
                    </div>

                    <div></div>
                </div>
                <p>©️ 2021</p> 
            </footer>
        </div>
    )
}

export default Urudi
