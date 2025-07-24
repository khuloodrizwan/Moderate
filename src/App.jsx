import React, { useState } from 'react';
import UserGrid from './UserGrid';
import './usergrid.css';

const App = () => {
  const users = [
    { id: 1, name: 'Alice Johnson', role: 'Developer' },
    { id: 2, name: 'Bob Smith', role: 'Designer' },
    { id: 3, name: 'Carol Davis', role: 'Manager' },
    { id: 4, name: 'David Wilson', role: 'Developer' },
    { id: 5, name: 'Emma Brown', role: 'QA Tester' },
    { id: 6, name: 'Frank Miller', role: 'DevOps' },
    { id: 7, name: 'Grace Lee', role: 'Designer' },
    { id: 8, name: 'Henry Taylor', role: 'Product Owner' },
    { id: 9, name: 'Isabella Garcia', role: 'Marketing' },
    { id: 10, name: 'Jack Anderson', role: 'Developer' },
    { id: 11, name: 'Karen White', role: 'Sales' },
    { id: 12, name: 'Liam Martinez', role: 'QA Tester' }
  ];

  const [selectedRole, setSelectedRole] = useState('All');
  const roles = ['All', ...new Set(users.map(user => user.role))];

  return (
    <div className="app">
      <div className="container">
        <div className="header">
          <h1 className="title">User Dashboard</h1>
          <p className="subtitle">Responsive User Card Grid with Role Filtering</p>
        </div>

        <div className="filter-section">
          <div className="filter-group">
            <label htmlFor="role-filter" className="filter-label">
              Filter by Role:
            </label>

            <div className="custom-select-wrapper">
              <select
                id="role-filter"
                value={selectedRole}
                onChange={(e) => setSelectedRole(e.target.value)}
                className="filter-select"
              >
                {roles.map((role) => (
                  <option key={role} value={role}>
                    {role}
                  </option>
                ))}
              </select>
              <div className="custom-arrow">▼</div>
            </div>
          </div>
        </div>

        <UserGrid users={users} selectedRole={selectedRole} />
      </div>
    </div>
  );
};

export default App;