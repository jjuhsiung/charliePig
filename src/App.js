
import './App.css';
import file from './file.txt';
import Pig from './icons8-pig-48.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Charlie is a pig. Agree to download
        </p>
        <img alt="pig" src={Pig}></img>
        <a href={file} download="file.txt">
          <button className="App-button">Download Here</button>
        </a>
      </header>
    </div>
  );
}



export default App;
