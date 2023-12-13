import { useState } from 'react';
import React from 'react';
import Navbar from './Component/Navbar';
import Header from './Component/Header';
import ProductSection from './Component/ProductSection';
import Footer from './Component/Footer';
import './style.css';

function App() {
  const [cartItemCount, setCartItemCount] = useState(0);

  const handleAddToCart = () => {
    setCartItemCount(cartItemCount + 1);
  }
  return (
    <div className="App">
     


            <Navbar />
            <Header />
            <ProductSection />
            <Footer />
        </div>
    );
}



  
export default App;
