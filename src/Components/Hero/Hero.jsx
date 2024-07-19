import './Hero.css';
import profile from '../../assets/profile.jpeg'
import AnchorLink from 'react-anchor-link-smooth-scroll';

function Hero() {
  return (
    <div id='home' className='hero'>
        <img src={profile} alt="profile" />
        <h1> <span> I'm  Elijah Peter, </span> Frontend developer based in Nigeria.</h1>
        <p>I'm a frontend developer from Abuja, Nigeria. Passionate frontend developer with a knack for crafting responsive, user-friendly web interfaces using modern technologies like React, HTML, CSS, Tailwindcss, and JavaScript.</p>
        <div className="hero-action">
            <div className="hero-connect">  
              <AnchorLink className='anchor-link' href='#contact'> Connect with me  </AnchorLink></div>
            <div className="hero-resume">My resume</div>
        </div>
    </div>
  )
}

export default Hero