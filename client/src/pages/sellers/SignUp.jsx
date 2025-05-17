import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SellerNav } from './SellersNav';
import styles from './sellers.module.css';

export default function SellerSignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    // Here, you would add API call or validation
    console.log('Sign Up:', { email, password });
    // After signup, redirect to CreateProfile page
    navigate('/sellers/create-profile');
  }

  return (
    <div className={styles.container}>
      <SellerNav />
      <h1>Seller Sign Up</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label>
          Email:
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <label>
          Password:
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}
