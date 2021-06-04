import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to Masaki's first react-app page.
        </p>
        <a
          className="App-link"
          href="https://bifree222.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Home Page
        </a>
        <p>2021.6.4</p>
      </header>
    </div>
  );
}

export default App;
