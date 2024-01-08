import logo from './logo.svg';
import './App.css';


function Github() {

}
function App() {
  return (
    <>
      <div className="App">

        <a
          className = "App-Link"
          href = "https://github.com/excaeruleo"
          target = "_blank"
          rel = "noopener noreferrer"
          >
            <button>Github </button>
          </a>
      </div>
      <div>
        <a
          ClassName = "App-Link"
          href = "https://www.linkedin.com/in/david-huang-1b4789254/"
          target = "_blank"
          rel = "noopener noreferrer"
          >
            <button> LinkedIn</button>
        </a>
      </div>
      <div>
      <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hello all! My name is David Huang.
          </p>
          <p>
            I am currently a sophomore at the New Jersey Institute of Technology pursuing a degree in Computer Science and Mathematics.
          </p>
        </header>
      </div>
    </>
  );
}

export default App;
