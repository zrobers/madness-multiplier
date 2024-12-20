import logo from './logo.svg';
import './App.css';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton'
import Profile from './components/Profile'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import WelcomePage from './pages/WelcomePage';


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
          href="http://localhost:3000/"
          target="_blank"
          rel="noopener noreferrer"
        >
         Bruh.com
        </a>
      </header>
      <LoginButton/>
      <LogoutButton/>
      <h1 className="text-3xl font-bold underline">
      Hello world!
      </h1>
      <Profile/>
      <Router>
      <nav>
        <ul>
          <li>
            <Link to="/welcome">Welcome</Link>
          </li>
        </ul>
      </nav>

      <Routes>
      <Route path="/welcome" element={<WelcomePage />}/>
      </Routes>
    </Router>
    </div>

    
     
  );
}

export default App;
