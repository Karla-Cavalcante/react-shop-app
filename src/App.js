import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/NavBar';  
import './styles/App.css';





function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product, quantity) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item => 
          item.id === product.id 
            ? { ...item, quantity: item.quantity + quantity } 
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity }];
      }
    });
  };

  return (
    <div>
      <Navbar cartCount={cart.reduce((acc, item) => acc + item.quantity, 0)} />
      <Outlet context={{ addToCart, cart }} />
    </div>
  );
}

export default App;
