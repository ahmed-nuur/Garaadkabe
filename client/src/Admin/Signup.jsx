// src/Admin/Signup.jsx
import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext'; // Import the AuthContext

const Signup = () => {
  const { register } = useAuth(); // Use the register function from context
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user'); // Default role is user

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = { name, email, password, role };
    register(userData); // Call the register function
    // Redirect or show a success message
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
        <h2 className="text-2xl mb-4">Sign Up</h2>
        <div className="mb-4">
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border rounded w-full p-2"
            required
          />
        </div>
        <div className="mb-4">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border rounded w-full p-2"
            required
          />
        </div>
        <div className="mb-4">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border rounded w-full p-2"
            required
          />
        </div>
        <div className="mb-4">
          <label>Role</label>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="border rounded w-full p-2"
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <button type="submit" className="bg-blue-500 text-white rounded p-2">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
