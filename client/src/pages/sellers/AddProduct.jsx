import React, { useState } from 'react';
import { SellerNav } from './SellersNav';
import styles from './sellers.module.css';

export default function SellerAddProduct() {
  const [step, setStep] = useState(1);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [tags, setTags] = useState('');

  function handleImageChange(e) {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
      setImageFile(file);
    }
  }

  function handleNext() {
    setStep((prev) => Math.min(prev + 1, 3));
  }

  function handleBack() {
    setStep((prev) => Math.max(prev - 1, 1));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const product = { title, description, price, tags };
    console.log('Product Data:', product);
    console.log('Image File:', imageFile);
    alert('Product added successfully!');
  }

  return (
    <div className={styles.container}>
      <SellerNav />
      <h1 className={styles.heading}>Add New Product</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        {step === 1 && (
          <div className={styles.step}>
            <label>
              Title:
              <input type="text" required value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Product title..." />
            </label>
            <label>
              Description:
              <textarea required value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Detailed product description..." />
            </label>
            <label>
              Price:
              <input type="number" min="0" step="0.01" required value={price} onChange={(e) => setPrice(e.target.value)} placeholder="0.00" />
            </label>
          </div>
        )}

        {step === 2 && (
          <div className={styles.step}>
            <label>
              Upload Image:
              <input type="file" accept="image/*" onChange={handleImageChange} />
            </label>
            {image && <img src={image} alt="Preview" className={styles.imagePreview} />}
          </div>
        )}

        {step === 3 && (
          <div className={styles.step}>
            <label>
              Tags (comma separated):
              <input type="text" value={tags} onChange={(e) => setTags(e.target.value)} placeholder="e.g. electronics, fashion" />
            </label>
          </div>
        )}

        <div className={styles.buttons}>
          {step > 1 && (
            <button type="button" className={styles.secondaryButton} onClick={handleBack}>Back</button>
          )}
          {step < 3 ? (
            <button type="button" onClick={handleNext}>Next</button>
          ) : (
            <button type="submit">Add Product</button>
          )}
        </div>
      </form>
    </div>
  );
}
