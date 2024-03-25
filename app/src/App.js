import logo from './logo.svg';
import './App.css';
import ElevateAppBar from './components/Appbar';
import MobileFriendlyPage from './components/bso1';
import AnotherComponent from './components/bso2';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <ElevateAppBar/>
      <MobileFriendlyPage/>
      <AnotherComponent/>
      <Footer/>
    </div>
  );
}

export default App;
