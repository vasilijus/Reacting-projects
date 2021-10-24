import logo from '../logo.svg';
import Profile from './Profile';
import './App.css';
import Header from '../components/Header/Header.js';

function App() {
  return (
    
    <div className="App-link">
      <Header logo={logo} />
      <Profile />
    </div>
  );
}

export default App;
