import React, { useState } from 'react';
import axios from 'axios';

const Login = ({ setLoggedIn }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (username && password) {
      try {
        // Simula uma requisição HTTP para autenticação
        const response = await axios.post('https://api.exemplo.com/login', {
          username,
          password
        });
        
        if (response.status === 200) {
          setLoggedIn(true);
        }
      } catch (error) {
        alert('Usuário ou senha incorretos');
      }
    } else {
      alert('Preencha todos os campos');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Usuário"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button onClick={handleLogin}>Entrar</button>
    </div>
  );
};

export default Login;