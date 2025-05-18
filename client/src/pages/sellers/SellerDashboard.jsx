import React from 'react';
import { SellerNav } from './SellersNav';
import styles from './sellers.module.css';

export default function SellerDashboard() {
  return (
    <div className={styles.container}>
      <SellerNav />
      <h1 className={styles.heading}>Seller Dashboard</h1>
      <p className={styles.subheading}>Manage your products and view stats</p>
      <p>Welcome to your dashboard. Here you can manage your products, view stats, and bookmarks.</p>
      <div className={styles.stats}>
        <div className={styles.statItem}>
          <h2>Total Sales</h2>
          <p>$0.00</p>
        </div>
        <div className={styles.statItem}>
          <h2>Total Products</h2>
          <p>0</p>
        </div>
        <div className={styles.statItem}>
          <h2>Total Orders</h2>
          <p>0</p>
        </div>
        <div className={styles.statItem}>
          <h2>Total Revenue</h2>
          <p>$0.00</p>
        </div>
      </div>
    </div>
  );
}