import './App.css';
import Headshot from './casualHeadshot.6a8acbe7.jpg';
import Github from './icons/Github.js';
import Linkedin from './icons/Linkedin.js';
import Mail from './icons/Mail.js';

function App() {
  return (
    <div className="App">
      <div className="content">
        <img src={Headshot} alt="Photo of Alec Mitrokostas"/>
        <h1>Alec Mitrokostas</h1>
        <p style={{color: "whitesmoke"}}>Currently:<br/>
        SWE Intern @ MCA Connect | Denver, CO<br/>
        4th-Year Computer Science and Business Student @ Lehigh University | Bethlehem, PA<br/>
        Scalable Systems Software Research Group @ Lehigh University | Bethlehem, PA</p>
        <div className="links">
          <a className="icon" href="mailto:apm322@lehigh.edu" target="_blank" rel="noopener noreferrer">
            <Mail height="48px" fill="whitesmoke"/>
          </a>
          <a className="icon" href="http://www.github.com/amitroko/" target="_blank" rel="noopener noreferrer">
            <Github height="48px" fill="whitesmoke"/>
          </a>
          <a className="icon" href="http://www.linkedin.com/in/alec-mitrokostas/" target="_blank" rel="noopener noreferrer">
            <Linkedin height="52px" fill="whitesmoke"/>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
