import React from 'react'
import logo from '../assets/logo.svg'
import linkedin from '../assets/bx_bxl-linkedin.svg'
import twitter from '../assets/ant-design_twitter-outlined.svg'
import github from '../assets/github.svg'
import medium from '../assets/akar-icons_medium-fill.svg'
import urudi from '../assets/urudi.png'
import urudii from '../assets/urudii.png'
import arrow from '../assets/bi_arrow-right.svg'
import voluum from '../assets/voluum.png'
import voluumm from '../assets/voluuum.png'
import engage from '../assets/engage.png'
import engagee from '../assets/engagee.png'
import coincrow from '../assets/coincrow.png'
import swipe from '../assets/swipe.png'
import donald from '../assets/Ellipse 2.svg'
import {Link} from 'react-router-dom'
import {ReactComponent as Arrow} from '../assets/bi_arrow-right.svg'

function LandingPage() {
    return (
        <div className='landing-page'>
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
                <section className='first-page'>
                    <p className='intro'>Hi, my name is</p>
                    <h1>
                        Donald Ugobude
                    </h1>

                    <h2>I design</h2>

                    <p>
                        A UX/UI Designer, bringing imaginations to life through design. 
                        <br />
                        I’m interested in the “what” of a product and how information about the said product is communicated to the target audience. 
                        <br />
                        Figma helps enhance this communication, so we vowed never to leave each other.
                    </p>

                    <div className="socials">
                        <div className="linkedin">
                            <a 
                                href="https://www.linkedin.com/in/donald-ugobude/"
                                target='_blank'
                                rel='noreferrer'    
                            >
                                <img src={linkedin} alt="LinkedIn" />    
                            </a>
                            
                        </div>
                        
                        <div className="twitter">
                            <a 
                                href="https://www.twitter.com/0d3ra"
                                target='_blank'
                                rel='noreferrer' 
                            >
                                <img src={twitter} alt="Twitter" />    
                            </a>
                            
                        </div>
                        
                        <div className="github">
                            <a 
                                href="https://www.github.com/manlikedonald"
                                target='_blank'
                                rel='noreferrer' 
                            >
                                <img src={github} alt="Github" />    
                            </a>
                            
                        </div>

                        <div className="medium">
                            <a 
                                href="https://medium.com/@odera"
                                target='_blank'
                                rel='noreferrer' 
                            >
                                <img src={medium} alt="Medium" />    
                            </a>
                            
                        </div>
                    </div>
                </section>
                
                <section className='second-page' >
                    <p>
                        <b>About Me</b> 
                    </p>
                    <hr />
                    <h2>
                        Hi, I’m Donald. <br />
                        I’m a good listener. <br />
                        I’m a problem-solver. <br />
                        I make business goals feasible. <br />
                        I’m a team player, I enjoy autonomy too. <br />
                        I listen to the needs of the client, the problem to be solved and then create designs to solve problems. <br />
                        I enjoy working for start-ups. <br />
                        I think Naija Jollof is the best thing to happen to food. <br />
                        I think Messi and Wizkid are the G.O.A.Ts in their fields.
                    </h2>
                </section>
                
                <section className='third-page'>
                    <p>
                        <b>Works</b>
                    </p>

                    <hr />

                    <div className="works">
                        <div className="urudi">
                            <div>
                                <h2>Urudi</h2>
                                <br />

                                <p>
                                    A contract job, where I led the product team to work on problems concerning fan inclusion in profits made from musical projects. 
                                    <br />
                                    <br />
                                    I worked on our website (PC and mobile view). I built the design system and helped Urudi become a marketable company
                                </p>
                                <br />

                                <Link
                                    to= '/urudi'
                                >
                                    <p>
                                        <b>Read case study</b>
                                        <img src={arrow} alt="arrow" />
                                    </p>
                                </Link>
                                
                            </div>

                            <a 
                                href="https://www.urudii.com"
                                target='_blank'
                                rel='noreferrer'
                            >
                                <img src={urudi} alt="urudi" className='urudi-img'/>        
                            </a>
                            
                            <a 
                                href="https://www.urudii.com"
                                target='_blank'
                                rel='noreferrer'
                            >
                                <img src={urudii} alt="urudi" className='second-image' />    
                            </a>
                            
                        </div>

                        <div className="voluum">
                            <div>
                                <h2>Voluum</h2>
                                <br />

                                <p>
                                    A previous contract where I redesigned the Voluum website.  
                                    <br />
                                    <br />
                                    I worked on the information architecture, wireframes, making the site responsive and easy to use.
                                </p>
                                <br />

                                <Link
                                    to= '/voluum'
                                >
                                    <p>
                                        <b>Read case study</b>
                                        <img src={arrow} alt="arrow" />
                                    </p>
                                </Link>
                            </div>

                            <a 
                                href="https://www.figma.com/proto/9NIybC46KgMdfiOimZBsaJ/Voluum?page-id=0%3A1&node-id=83%3A2&viewport=241%2C48%2C0.49&scaling=min-zoom&starting-point-node-id=83%3A2"
                                target='_blank'
                                rel='noreferrer'
                            >
                                <img src={voluum} alt="voluum" className='voluum-img'/>   
                            </a>
                            
                            <a 
                                href="https://www.figma.com/proto/9NIybC46KgMdfiOimZBsaJ/Voluum?page-id=0%3A1&node-id=83%3A2&viewport=241%2C48%2C0.49&scaling=min-zoom&starting-point-node-id=83%3A2"
                                target='_blank'
                                rel='noreferrer'
                            >
                                <img src={voluumm} alt="voluum" className='second-image'/>   
                            </a>
                        </div>

                        <div className="engage">
                            <div>
                                <h2>Engage</h2>
                                <br />

                                <p>
                                    Engage offers credit to SMBs, helps solve cashflow problem in business.  
                                    <br />
                                    <br />
                                    I designed the entire framework, worked on the information archcitecture, created wireframes and illustrations to drive understanding
                                </p>
                                <br />

                                <Link
                                    to= '/engage'
                                >
                                    <p>
                                        <b>Read case study</b>
                                        <img src={arrow} alt="arrow" />
                                    </p>
                                </Link>
                            </div>

                            <a 
                                href="https://www.figma.com/proto/6ekCXJrPgKhsuMwn7RmvsP/Engage--The-Bank-of-the-future?page-id=0%3A1&node-id=57%3A41&viewport=241%2C48%2C0.08&scaling=min-zoom&starting-point-node-id=2%3A2"
                                target='_blank'
                                rel='noreferrer'
                            >
                                <img src={engage} alt="voluum" className='engage-img'/>    
                            </a>

                            <a 
                                href="https://www.figma.com/proto/6ekCXJrPgKhsuMwn7RmvsP/Engage--The-Bank-of-the-future?page-id=0%3A1&node-id=57%3A41&viewport=241%2C48%2C0.08&scaling=min-zoom&starting-point-node-id=2%3A2"
                                target='_blank'
                                rel='noreferrer'
                            >
                                <img src={engagee} alt="voluum" className='second-image'/>        
                            </a> 
                            
                        </div>

                        <h2 className='react-app'>I also build React applications when I’m less busy.</h2>

                        <div className="dev">
                            <div className="urudi-dev">
                                <a
                                    href='https://www.urudii.com'
                                    target= '_blank'
                                    rel= 'noreferrer'
                                >
                                   <img src={urudi} alt="urudi" />
                                </a>
                                
                                <div>
                                    <h2>Urudi</h2>
                                    <br />
                                    <p>
                                        A contract job, where I led the product team to work on problems concerning fan inclusion in profits made from musical projects.
                                        <br />
                                        I built the frontend of the website (PC and mobile view). Thankfully, I designed the product, so it was easy to build.
                                    </p>
                                    <br />
                                    <a
                                        href='https://www.urudii.com'
                                        target= '_blank'
                                        rel= 'noreferrer'
                                    >
                                        <b>urudi</b>
                                        <Arrow className='arrow' />
                                    </a>    
                                </div>
                                
                            </div>

                            <div className="coincrow">
                                <a
                                    href='https://coincrow.netlify.app'
                                    target= '_blank'
                                    rel= 'noreferrer'
                                >
                                    <img src={coincrow} alt="coincrow" />
                                </a>
                                
                                <div>
                                    <h2>CoinCrow</h2>
                                    <br />
                                    <p>
                                        CoinCrow gives top cryptocurrency prices live, crypto charts, market cap, and trading volume.
                                        <br />
                                        CoinCrow is a clone of CoinGecko as at June 2021.  It incorporates the consumption of RESTful APIs to give live updates on all crypto data (prices, market cap and charts).
                                    </p>
                                    <br />
                                    <a
                                        href='https://coincrow.netlify.app'
                                        target= '_blank'
                                        rel= 'noreferrer'
                                    >
                                        <b>coincrow</b>
                                        <Arrow className='arrow' />
                                    </a>    
                                </div>
                                
                            </div>

                            <div className="swipe">
                                <a
                                    href='https://floatclone.netlify.app/'
                                    target= '_blank'
                                    rel= 'noreferrer'
                                >
                                    <img src={swipe} alt="swipe" />
                                </a>
                                
                                <div>
                                    <h2>Swipe</h2>
                                    <br />
                                    <p>
                                        Swipe offer credit lines to SMBs to help solve cashflow problem in business.
                                        <br />
                                        Swipe is a clone of the old Float website. The site composes of series of CSS animation and JSX markup.
                                    </p>
                                    <br />
                                    <a
                                        href='https://floatclone.netlify.app/'
                                        target= '_blank'
                                        rel= 'noreferrer'
                                    >
                                        <b>swipe</b>
                                        <Arrow className='arrow' />
                                    </a>    
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </section>

                <section className='lets-work'>
                    <h1>Let’s work together</h1>
                    <div className="buttons">
                        <a href="mailto:ugobudedonald@gmail.com">
                            <button className='email'>
                                hi@odera.pro
                            </button>
                        </a>
                        
                        <a 
                            href="https://docs.google.com/document/d/1TwgjNm-WCvZ6k208DSMvqRoBWBNJ0-lNvxicA2UUq_k/edit?usp=sharing"
                            target='_blank'    
                            rel='noreferrer'
                        >
                            <button className='resume'>
                                Resumé 🖨
                            </button>    
                        </a>
                        
                    </div>
                </section>
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

export default LandingPage
