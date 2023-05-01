import CardTop from '../assets/card-top.svg';
import PersonA from '../assets/person-1.png';
import PersonB from '../assets/person-2.png';
import PersonC from '../assets/person-3.png';
import '../comment/comment.css';


function CommentB() {
    return (
        <>
        <section className='storie'>
        <div className="container">
            <h2>Delivering real results for top companies. Some of our <span>success stories.</span> </h2>
            <div className="storie__card">
                <div className="storie__card-box">
                    <img className='storie__img' src={CardTop} alt="img" />
                    <p>“The team perfectly fit the specialized skill set required. They focused on the most essential features helping us launch the platform eight months faster than planned.”</p> 
                    <h3>Kady Baker</h3>
                    <blockquote>Product Manager at Bookmark</blockquote>
                    <img className='img' src={PersonA} alt="img" />
                </div>
                <div className="storie__card-box">
                    <img className='storie__img' src={CardTop} alt="img" />
                    <p>“We needed to automate our entire onboarding process. The team came in and built out the whole journey. Since going live, user retention has gone through the roof!”</p> 
                    <h3>Aisha Reese</h3>
                    <blockquote>Founder of Manage</blockquote>
                    <img src={PersonB} alt="img" />
                </div>
                <div className="storie__card-box">
                    <img className='storie__img' src={CardTop} alt="img" />
                    <p>“Amazing. Our team helped us build an app that delivered a new experience for hiring a physio. The launch was an instant success with 100k downloads in the first month.”</p> 
                    <h3>Arthur Clarke</h3>
                    <blockquote>Co-founder of MyPhysio</blockquote>
                    <img src={PersonC} alt="img" />
                </div>
            </div>
        </div>
    </section>
        </>
    )
    
}
export default CommentB;

