import React from 'react';
import { SellerNav } from './SellersNav';
import styles from './sellers.module.css';

export default function SellerDashboard() {
  return (
    <div className={styles.container}>
      <SellerNav />
      <h1>Seller Dashboard</h1>
      <p>Welcome to your dashboard. Here you can manage your products, view stats, and bookmarks.</p>
      {/* You can add links/buttons for editing, viewing stats, etc. */}
    </div>
  );
}
