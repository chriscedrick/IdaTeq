import Footer from './components/inc/Footer'
import Header from './components/inc/Header';

import { Routes,Route } from 'react-router-dom';

import Home from "./components/Home"
import Contact from './components/Contact';
import Apply from './components/Apply';
import Services from './components/Services';
import Projects from './components/Projects';
import Girls from './components/Girls';
import Juniors from './components/Juniors';
import Example from './custom';


function App() {
  return (
      <div className='App'>
          <Header />
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/apply" element={<Apply/>} />
            <Route path="/services" element={<Services/>} />
            <Route path="/projects" element={<Projects/>} />
            <Route path="/girls" element={<Girls/>} />
            <Route path="/juniors" element={<Juniors/>} />
          </Routes>
          <Footer />
      </div>
  );
}

export default App;
