import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import axios from 'axios';
import GameList from './GameList';
import GameDetails from './GameDetails';
import Cart from './Cart';
import Login from './Login';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [cart, setCart] = useState([]);

  const addToCart = (game) => {
    setCart([...cart, game]);
  };

  const removeFromCart = (gameId) => {
    setCart(cart.filter((game) => game.id !== gameId));
  };

  return (
    <Router>
      <div className="App">
        {!loggedIn ? (
          <Login setLoggedIn={setLoggedIn} />
        ) : (
          <>
            <nav>
              <Link to="/">Games</Link>
              <Link to="/cart">Carrinho</Link>
            </nav>
            <Routes>
              <Route path="/" element={<GameList addToCart={addToCart} />} />
              <Route path="/game/:id" element={<GameDetails addToCart={addToCart} />} />
              <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} />} />
            </Routes>
          </>
        )}
      </div>
    </Router>
  );
}

export default App;