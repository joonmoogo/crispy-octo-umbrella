import logo from './logo.svg';
import './App.css';
import ElevateAppBar from './components/Appbar';
import Footer from './components/Footer';
import HomeMenu from './components/HomeMenu';
import HomeSearch from './components/HomeSearch';

function App() {
  return (
    <div className="App">
      <ElevateAppBar/>
      <HomeSearch/>
      <HomeMenu/>
      <Footer/>
    </div>
    
  );
}

export default App;
