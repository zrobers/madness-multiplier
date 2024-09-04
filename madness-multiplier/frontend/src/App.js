import logo from './logo.svg';
import './App.css';
import LoginButton from './components/LoginButton';


function App() {
  return (
    <div className="App">
      <header className="App-header" class="m-4">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> bruh 
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
         Bruh.com
        </a>
      </header>
      <LoginButton/>
      
      <h1 className="text-3xl font-bold underline">
      Hello world!
      </h1>
    </div>
     
  );
}

export default App;
