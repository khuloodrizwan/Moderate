// src/UserCard.jsx
import React from 'react';
import './usergrid.css';

const UserCard = ({ user }) => {
  return (
    <div className="user-card">
      <div className="user-avatar">
        {user.name.charAt(0).toUpperCase()}
      </div>
      <div className="user-info">
        <h3 className="user-name">{user.name}</h3>
        <p className="user-id">ID: {user.id}</p>
        <span className="user-role">{user.role}</span>
      </div>
    </div>
  );
};

export default UserCard;
