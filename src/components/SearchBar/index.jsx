import React, { useState } from 'react';
import { FiSearch, FiLoader } from 'react-icons/fi'; 
import './styles.css';

export function SearchBar({ onSearch, isLoading }) {
  const [username, setUsername] = useState('');

  const handleSearch = (e) => {
    e.preventDefault(); 
    // Evita fazer a busca se estiver vazio ou se já estiver carregando
    if (!username.trim() || isLoading) return; 

    onSearch(username);
  };

  return (
    <form className="search-container" onSubmit={handleSearch}>
      <input
        type="text"
        className="search-input"
        placeholder="Digite um usuário do Github"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        disabled={isLoading} // Bloqueia o input durante o loading
      />
      
      {/* Bloqueia o botão e muda o visual durante o loading */}
      <button type="submit" className="search-button" disabled={isLoading}>
        {isLoading ? (
          <FiLoader size={20} color="#ffffff" className="spin-animation" />
        ) : (
          <FiSearch size={20} color="#ffffff" />
        )}
      </button>
    </form>
  );
}