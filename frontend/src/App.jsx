


// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from "./components/CartContext";
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/pages/Home';
import About from './components/About';
import Contact from './components/pages/Contact';
import Shop from "./components/Shop"

import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Medicines from './components/Medicines';
import Feed from './components/Feed';
import Cart from './components/Cart';

function App() {
  return (
       <CartProvider>
    <Router>
      <div className="App">
        <Navbar />
          <Routes>
          <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
             <Route path="/contact" element={<Contact />} />
             <Route path="/shop" element={<Shop />} />
              <Route path="/medicines" element={<Medicines />} />
              <Route path="/feed" element={<Feed />} />
                 <Route path="/cart" element={<Cart />} />
       

        </Routes>
      
        <Footer />
      </div>
    </Router>
    </CartProvider>
  );
}

export default App;