import Human from '../assets/human.svg';
import '../CompanentB/CompanentB.css';
import Human1 from '../assets/human1.svg';
import Human2 from '../assets/human2.svg';
import BackImg3 from '../assets/backimg3.png';
function SectionMyTeam1 () {
  return <>
  <section className='build'>
    <div className="container">
        <img src={BackImg3} alt="img"className='bacimg3' />
      <div className="build__card">
        <div className="build__card1">
          <hr />
          <h2>Build & manage distributed teams like no one else.</h2>
        </div>
        <div className="build__card2">
            <div className="build__box">
              <img src={Human} alt="human" />
              <div className="build__card-box">
                <h3>Experienced Individuals</h3>
                <p>Our network is made up of highly experienced professionals who are passionate about what they do.</p>
              </div>
            </div>
            <div className="build__box">
              <img src={Human1} alt="human" />
              <div className="build__card-box">
                <h3>Experienced Individuals</h3>
                <p>Our network is made up of highly experienced professionals who are passionate about what they do.</p>
              </div>
            </div>
            <div className="build__box">
              <img src={Human2} alt="human" />
              <div className="build__card-box">
                <h3>Experienced Individuals</h3>
                <p>Our network is made up of highly experienced professionals who are passionate about what they do.</p>
              </div>
            </div>
        </div>
      </div>
    </div>
  </section>
  
  </>
}

export default SectionMyTeam1;