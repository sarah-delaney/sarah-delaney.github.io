import './App.css';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import {Routes, Route, Navigate} from 'react-router-dom';
import Resume from './components/Resume';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
      <Route path="/" element={<Navigate to='about'/>}/>
        <Route path="about" element=<AboutMe/>/>
        <Route path="resume" element=<Resume/>/>
        <Route path="contact"  element=<Contact/>/>
        // TODO: add error page
      </Routes>
    </div>
  );
}

export default App;
