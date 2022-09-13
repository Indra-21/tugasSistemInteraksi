import { Route } from 'react-router-dom';
import { BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import IconComp from './Components/IconComp';
import NavbarComp from './Components/NavbarComp';
import Home from './Pages/Home';
import InstagramEmbed from "react-instagram-embed";

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
      <InstagramEmbed
            url='https://www.instagram.com/p/CiacMiaoL37/'
            clientAccessToken='123|456'
            maxWidth={630}
            hideCaption={false}
            containerTagName='div'
            protocol=''
            injectScript
            onLoading={() => {}}
            onSuccess={() => {}}
            onAfterRender={() => {}}
            onFailure={() => {}}
          />
    </div>
  );
}

export default App;
