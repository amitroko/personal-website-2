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
        4th-Year <a className="text-link" href="https://csb.lehigh.edu/" target="_blank" rel="noopener noreferrer">Computer Science and Business</a> Student @ Lehigh University | Bethlehem, PA<br/>
        <a className="text-link" href="https://wordpress.lehigh.edu/sss/" target="_blank" rel="noopener noreferrer">Scalable Systems Software Research Group</a> @ Lehigh University | Bethlehem, PA</p>
        <p style={{color: "whitesmoke"}}>Previously:<br/>
        SWE Intern @ <a className="text-link" href="https://mcaconnect.com/" target="_blank" rel="noopener noreferrer">MCA Connect</a> | Denver, CO<br/>
        Secretary and Professional Development Chairman, Comp. Sci. and Business Assn. @ Lehigh University | Bethlehem, PA</p>
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
