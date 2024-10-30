import React from 'react';
import { useParams } from 'react-router-dom';

const games = [
  { id: 1, name: 'Jogo Aventura', description: 'Um jogo emocionante de aventura', image: 'url_da_imagem' },
  { id: 2, name: 'Jogo RPG', description: 'Explore mundos incríveis em uma jornada épica', image: 'url_da_imagem' },
  { id: 3, name: 'Jogo Ação', description: 'Ação intensa e inimigos desafiadores', image: 'url_da_imagem' }
];

const GameDetails = ({ addToCart }) => {
  const { id } = useParams();
  const game = games.find((game) => game.id === parseInt(id));

  if (!game) return <p>Jogo não encontrado</p>;

  return (
    <div className="game-details">
      <h2>{game.name}</h2>
      <img src={game.image} alt={game.name} />
      <p>{game.description}</p>
      <button onClick={() => addToCart(game)}>Adicionar ao Carrinho</button>
    </div>
  );
};

export default GameDetails;