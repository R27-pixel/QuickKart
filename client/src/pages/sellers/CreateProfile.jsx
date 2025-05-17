import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SellerNav } from './SellersNav';
import styles from './sellers.module.css';

export default function SellerCreateProfile() {
  const [storeName, setStoreName] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    // Save profile data or call API here
    console.log('Profile Created:', { storeName, description });
    // Redirect to seller dashboard
    navigate('/sellers/dashboard');
  }

  return (
    <div className={styles.container}>
      <SellerNav />
      <h1>Create Your Profile</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label>
          Store Name:
          <input
            type="text"
            required
            value={storeName}
            onChange={(e) => setStoreName(e.target.value)}
          />
        </label>

        <label>
          Description:
          <textarea
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>

        <button type="submit">Create Profile</button>
      </form>
    </div>
  );
}
