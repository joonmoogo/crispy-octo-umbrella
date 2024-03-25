import logo from './logo.svg';
import './App.css';
import { AppBar } from '@mui/material';
import Footer from './components/Footer';
import ElevateAppBar from './components/Appbar';
import MobileFriendlyPage from './components/bso1';
import AnotherComponent from './components/bso2';

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
