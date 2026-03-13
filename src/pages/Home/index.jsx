import React, { useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { SearchBar } from '../../components/SearchBar';
import { UserProfile } from '../../components/UserProfile';
import { fetchUserData } from '../../services/api';
import './styles.css';

export function Home() {
  // =========================================
  // Estados do Componente
  // =========================================
  const [userData, setUserData] = useState(null);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(false); 

  // =========================================
  // Funções Handlers
  // =========================================
  
  /**
   * Busca os dados do usuário na API do GitHub.
   * Coordena os estados de carregamento, limpeza de erros e armazenamento de dados.
   * * @param {string} username - O nome de usuário digitado no SearchBar
   */
  const handleSearchUser = async (username) => {
    // Reseta o estado anterior antes de iniciar a nova requisição
    setHasError(false);
    setUserData(null);
    setIsLoading(true); 

    try {
      const response = await fetchUserData(username);
      setUserData(response);
    } catch (error) {
      console.error("Erro ao buscar usuário:", error);
      setHasError(true);
    } finally {
      setIsLoading(false); 
    }
  };

  // =========================================
  // Renderização (JSX)
  // =========================================
  return (
    <div className="home-container">
      <main className="content-wrapper">
        
        {/* Elemento visual decorativo de fundo */}
        <div className="dots-pattern"></div>
        
        <header className="home-header">
          <FaGithub size={48} color="#ffffff" />
          <h1>Perfil <strong>GitHub</strong></h1>
        </header>
        
        {/* Componente de busca */}
        <SearchBar onSearch={handleSearchUser} isLoading={isLoading} />

        {/* Renderização Condicional: Feedback de Erro */}
        {hasError && (
          <div className="error-card">
            <p>Nenhum perfil foi encontrado com esse nome de usuário.<br/>Tente novamente</p>
          </div>
        )}

        {/* Renderização Condicional: Cartão de Perfil */}
        {userData && !hasError && (
          <UserProfile user={userData} />
        )}

      </main>
    </div>
  );
}