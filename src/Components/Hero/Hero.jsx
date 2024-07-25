import './Hero.css';
import profile from '../../assets/profile.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll';

function Hero() {
  return (
    <div id='home' className='hero'>
        <img src={profile} alt="profile" />
        <h1> <span> I'm  Elijah Peter, </span> Frontend developer.</h1>
        <p>I'm a frontend developer. Passionate frontend developer with a knack for crafting responsive, user-friendly web interfaces using modern technologies like React, HTML, CSS, Tailwindcss, and JavaScript.</p>
        <div className="hero-action">
            <div className="hero-connect">  
              <AnchorLink className='anchor-link' href='#contact'> Connect with me  </AnchorLink></div>
            <div className="hero-resume"> <a href="https://drive.google.com/file/d/16py4c9aQO23OoEjJXFMlcPFFxbJWz24c/view?usp=drivesdk"> My resume </a> </div>
        </div>
    </div>
  )
}

export default Hero