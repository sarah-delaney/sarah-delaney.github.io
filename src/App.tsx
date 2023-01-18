import './App.css';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import {Routes, Route} from 'react-router-dom';
import Resume from './components/Resume';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element=<AboutMe/>/>
        <Route path="about" element=<AboutMe/>/>
        <Route path="resume" element=<Resume/>/>
      </Routes>
    </div>
  );
}

export default App;
