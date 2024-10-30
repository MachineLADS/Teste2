import React from 'react';
import { Link } from 'react-router-dom';

const games = [
  { id: 1, name: 'Jogo Aventura', description: 'Um jogo emocionante de aventura', image: 'url_da_imagem' },
  { id: 2, name: 'Jogo RPG', description: 'Explore mundos incríveis em uma jornada épica', image: 'url_da_imagem' },
  { id: 3, name: 'Jogo Ação', description: 'Ação intensa e inimigos desafiadores', image: 'url_da_imagem' }
];

const GameList = ({ addToCart }) => (
  <div className="game-list">
    {games.map((game) => (
      <div key={game.id} className="game-card">
        <img src={game.image} alt={game.name} />
        <h3>{game.name}</h3>
        <p>{game.description}</p>
        <Link to={`/game/${game.id}`}>Ver Detalhes</Link>
        <button onClick={() => addToCart(game)}>Adicionar ao Carrinho</button>
      </div>
    ))}
  </div>
);

export default GameList;