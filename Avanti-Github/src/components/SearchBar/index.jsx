import React, { useState } from 'react';
import { FiSearch, FiLoader } from 'react-icons/fi'; 
import './styles.css';

export function SearchBar({ onSearch, isLoading }) {
  const [username, setUsername] = useState('');

  const handleSearch = (e) => {
    e.preventDefault(); 
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
          <FiLoader size={30} color="#ffffff" className="spin-animation" />
        ) : (
          <FiSearch size={30} color="#ffffff" />
        )}
      </button>
    </form>
  );
}