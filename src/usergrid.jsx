// src/UserGrid.jsx
import React from 'react';
import UserCard from './UserCard';
import './usergrid.css';

const UserGrid = ({ users, selectedRole }) => {
  const filteredUsers = selectedRole === 'All' 
    ? users 
    : users.filter(user => user.role === selectedRole);

  return (
    <>
      <div className="user-grid">
        {filteredUsers.map(user => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>

      {filteredUsers.length === 0 && (
        <div className="empty-state">
          <div className="empty-icon">👥</div>
          <h3>No users found</h3>
          <p>Try selecting a different role filter.</p>
        </div>
      )}
    </>
  );
};

export default UserGrid;
