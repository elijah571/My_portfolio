import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile from '../../assets/profile.jpg';
function About() {
  return (
    <div id='about' className='about'>
        <div className="about-tiitle">
            <h1>About me</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-section">
            <div className="about-left">
                <img src={profile } alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I am an experience Frontend developer, skilled in building responsive and engaging user interfaces.Passionate about crafting visually appealing and highly functional web applications.</p>
                    <p>Transforming ideas into interactive, user-friendly digital experiences.</p>
                </div>

                <div className="about-skills">
                <div className="about-skill">
                    <p>HTML & CSS</p> <hr style={{width:"90%"}} />
                </div>

                <div className="about-skill">
                    <p>Javascript</p> <hr style={{width:"65%"}} />
                </div>

                <div className="about-skill">
                    <p>React js</p> <hr style={{width:"80%"}} />
                </div>

                <div className="about-skill">
                    <p>Tailwindcss</p> <hr style={{width:"50%"}} />
                </div>
            </div>
            </div>
           
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>3+</h1>
                <p>Intensive Boot Camp Completion</p>
                
            </div>
            <hr />
            <div className="about-achievement">
                <h1>6+</h1>
                <p>Completed Projects that leverages modern frontend technologies. </p>
                
            </div>
            <hr />
            <div className="about-achievement">
                <h1>2+</h1>
                <p>Technologies, Tools,  and Frameworks mastered</p>
                
            </div>
        </div>
    </div>
  )
}

export default About