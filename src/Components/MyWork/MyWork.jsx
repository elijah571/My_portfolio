import './MyWork.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mywork_data from '../../assets/mywork_data';
// import arrow_icon from '../../assets/arrow_icon.svg';

function MyWork() {
  return (
    <div id='work' className='mywork'>
      <div className="mywork-title">
     

        <h1>Click  to View the Project </h1>
       
        <img src={theme_pattern} alt="Theme pattern" />
      </div>
      <div className="mywork-container">
        
        {mywork_data.map((work, index) => (
          <a key={index} href={work.url} target="_blank" rel="noopener noreferrer">
            <img src={work.w_img} alt={work.w_name} />
          </a>
        ))}
      </div>
      {/* <div className="mywork-showmore">
        <p>Show More</p>
        <img src={arrow_icon} alt="Arrow icon" />
      </div> */}
       
    </div>
  );
 
}

export default MyWork;
