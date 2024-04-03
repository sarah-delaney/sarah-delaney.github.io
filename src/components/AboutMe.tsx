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
const rugby = require('../assets/rugby.jpeg');
function AboutMe() {
    return (
    <div className='content'>
    <div className='aboutMe'>About Me</div>
    <Row className='bioSection'>
      <span className='bioText'>{bio}</span>
      <img src={me} className='bioImg' alt='Sarah Delaney'/>
    </Row>
    <Row className='bioSection'>
    <img src={boston} className='bioImg' alt='Boston brownstones'/>
      <span className='bioText'>I'm currently based in Boston...</span>
    </Row>
    <Row className='bioSection'>
      <span className='bioText'>But I'm from the NY/NJ area and love New York City!</span>
      <img src={nyc} className='bioImg' alt='NYC skyline'/>
    </Row>
    <Row className='bioSection'>
      <img src={skiing} className='bioImg' alt='Girl skiing'/>
      <span className='bioText'>
        I enjoy skiing in my free time, and I worked as a ski instructor at Bromley Mt in Vermont for 7 years.
        I also enjoy playing guitar and singing.
      </span>
    </Row>
    <Row className='bioSection'>
      <span className='bioText'>My parents are from a small town in Ireland, so it's my favorite place to visit.</span>
      <img src={ireland} className='bioImg' alt='Irish countryside'/>
    </Row>
    <Row className='bioSection'>
      <img src={paris} className='bioImg' alt='Girl in front of the Arc de Triomphe'/>
      <span className='bioText'>Aside from Ireland, I've recently enjoyed traveling all over Europe during breaks from school and work. Some of my favorite places to visit were Paris, London, Split, Berlin, Prague, Florence, and Kitzbuhel!</span>
    </Row>
    <Row className='bioSection'>
      <span className='bioText'>I own a lot of plants, and my favorite hobby is taking care of them!</span>
      <img src={plant} className='bioImg' alt='ivy plant'/>
    </Row>
    <Row className='bioSection'>
        <img src={rugby} className='bioImg' alt='girl playing rugby'/>
        <span className='bioText'>I was on the Rugby team at Northeastern all 5 years, and love to keep in shape by going for runs.</span>
    </Row>
  </div>)
}
export default AboutMe;