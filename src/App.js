import { Route } from 'react-router-dom';
import { BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import IconComp from './Components/IconComp';
import NavbarComp from './Components/NavbarComp';
import Home from './Pages/Home';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <IconComp />
        <NavbarComp />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
