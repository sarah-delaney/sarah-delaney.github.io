import './App.css';
import Header from './components/Header';
import Row from './components/Row';
import bio from './assets/bio'
const img = require('./assets/logo512.png');

function App() {
  return (
    <div className="App">
      <Header/>
      <div className='content'>
      <h1 className='name'>Sarah Delaney</h1>
        <Row className='bioSection'>
          {bio}
          <img src={img} className='bioImg'/>
        </Row>
        <h2 style={{ textAlign: "center" }}>About Me</h2>
        <Row className='bioSection'>
        <img src={img} className='bioImg'/>
          I'm currently based in Boston...
        </Row>
        <Row className='bioSection'>
          But I'm from the NY/NJ area and love New York City!
          <img src={img} className='bioImg'/>
        </Row>
        <Row className='bioSection'>
        <img src={img} className='bioImg'/>
          I enjoy skiing in my free time, and I worked as a ski instructor at Bromley Mt in Vermont for 7 years.
        </Row>
        <Row className='bioSection'>
          I also enjoy playing guitar and singing in my free time.
          <img src={img} className='bioImg'/>
        </Row>
        <Row className='bioSection'>
        <img src={img} className='bioImg'/>
          My parents are from a small town in Ireland, so it's my favorite place to visit.
        </Row>
        <Row className='bioSection'>
          Aside from Ireland, I've recently enjoyed traveling to Croatia, Paris, and Lisbon.
          <img src={img} className='bioImg'/>
        </Row>
        <Row className='bioSection'>
        <img src={img} className='bioImg'/>
          I've recently become a plant owner, and now I can't stop buying them!
        </Row>
      </div>
    </div>
  );
}

export default App;
