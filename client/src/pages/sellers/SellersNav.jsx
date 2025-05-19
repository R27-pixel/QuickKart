import React from 'react';
import { Link } from 'react-router-dom';
import styles from './sellers.module.css';

export function SellerNav() {
  return (
    <nav className={styles.nav}>
      <Link to="/sellers/signup">Sign Up</Link> |{' '}
      <Link to="/sellers/create-profile">Create Profile</Link> |{' '}
      <Link to="/sellers/dashboard">Dashboard</Link> |{' '}
      <Link to="/sellers/add-product">Add Product</Link>
    </nav>
  );
}
