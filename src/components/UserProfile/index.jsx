import React from 'react';
import './styles.css';

export function UserProfile({ user }) {
  return (
    <div className="profile-card">
      <div className="avatar-wrapper">
        <img src={user.avatar_url} alt={`Foto de ${user.name}`} />
      </div>
      
      <div className="profile-info">
        {/* Se o usuário não tiver nome cadastrado, mostramos o login */}
        <h2>{user.name || user.login}</h2>
        
        {/* Se não tiver bio, mostramos uma mensagem padrão ou deixamos vazio */}
        <p>{user.bio || 'Este usuário não possui uma biografia.'}</p>
      </div>
    </div>
  );
}