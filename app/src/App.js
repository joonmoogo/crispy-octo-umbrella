import logo from './logo.svg';
import './App.css';
import Homepage from './pages/Homepage';


import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Searchpage from './pages/Searchpage';

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/search' element={<Searchpage/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
