import './AboutMe.css';
import Row from '../components/Row';
import bio from '../assets/bio'
const img = require('../assets/logo512.png');
const me = require('../assets/me.jpg');
const boston = require('../assets/boston.jpg');
const nyc = require('../assets/nyc.jpg');
const plant = require('../assets/plant.jpg');
const skiing = require('../assets/skiing.jpg');
const paris = require('../assets/paris.JPG');
const ireland = require('../assets/ireland.jpg');
function AboutMe() {
    return (
    <div className='content'>
    <div className='aboutMe'>About Me</div>
    <Row className='bioSection'>
      <span className='bioText'>{bio}</span>
      <img src={me} className='bioImg'/>
    </Row>
    <Row className='bioSection'>
    <img src={boston} className='bioImg'/>
      <span className='bioText'>I'm currently based in Boston...</span>
    </Row>
    <Row className='bioSection'>
      <span className='bioText'>But I'm from the NY/NJ area and love New York City!</span>
      <img src={nyc} className='bioImg'/>
    </Row>
    <Row className='bioSection'>
      <img src={skiing} className='bioImg'/>
      <span className='bioText'>
        I enjoy skiing in my free time, and I worked as a ski instructor at Bromley Mt in Vermont for 7 years.
        I also enjoy playing guitar and singing.
      </span>
    </Row>
    <Row className='bioSection'>
      <span className='bioText'>My parents are from a small town in Ireland, so it's my favorite place to visit.</span>
      <img src={ireland} className='bioImg'/>
    </Row>
    <Row className='bioSection'>
      <img src={paris} className='bioImg'/>
      <span className='bioText'>Aside from Ireland, I've recently enjoyed traveling to Croatia, Paris, and Lisbon.</span>
    </Row>
    <Row className='bioSection'>
      <span className='bioText'>I've recently become a plant owner, and now I can't stop buying them!</span>
      <img src={plant} className='bioImg'/>
    </Row>
  </div>)
}
export default AboutMe;