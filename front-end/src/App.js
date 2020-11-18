import './App.css';
import Header from './Header';
import Home from './Home';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="app__page">
        <Sidebar />
        <Home />
      </div>
    </div>
  );
}

export default App;
