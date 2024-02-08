import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CHelios from './pages/cHelios';  
import Detalii from './pages/Detalii';
import CGeneva from './pages/cGeneva';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import CHera from './pages/cHera';


const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

  const App = () => {
    return (
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/geneva" element={<CGeneva />} />
          <Route path="/helios" element={<CHelios />} />
          <Route path="/etalii" element={<Detalii />} />
          <Route path='/hera' element={<CHera />} />
          <Route path="/detalii/:casaId" element={<Detalii />} />
        </Routes>
        <Footer />
      </Router>
    );
  }

export default App;