import logo from './logo.svg';
import './App.css';
import SearchBox from './components/SearchBox';
import Header from './components/Header';
import UserContent from './components/UserContent';
import Posts from './components/Posts';

function App() {
  return (
    <div className="App">
      <Header />
      <UserContent />
      <Posts/>
    </div>
  );
}

export default App;
