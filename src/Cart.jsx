import React from 'react';

const Cart = ({ cart, removeFromCart }) => (
  <div className="cart">
    <h2>Carrinho de Compras</h2>
    {cart.length > 0 ? (
      cart.map((game) => (
        <div key={game.id} className="cart-item">
          <h3>{game.name}</h3>
          <button onClick={() => removeFromCart(game.id)}>Remover</button>
        </div>
      ))
    ) : (
      <p>O carrinho está vazio.</p>
    )}
  </div>
);

export default Cart;