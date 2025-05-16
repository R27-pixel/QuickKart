import React, { useState } from 'react';
import { SellerNav } from './SellersNav';
import styles from './sellers.module.css';

export default function SellerAddProduct() {
  const [step, setStep] = useState(1);

  // Product details state
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);
  const [tags, setTags] = useState('');

  // Handlers for image preview
  function handleImageChange(e) {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
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
    // Here you would send the product data to API or backend
    console.log({ title, description, price, image, tags });
    alert('Product added successfully!');
    // Reset form or navigate as needed
  }

  return (
    <div className={styles.container}>
      <SellerNav />
      <h1>Add Product</h1>

      <form onSubmit={handleSubmit} className={styles.form}>
        {step === 1 && (
          <>
            <label>
              Title:
              <input
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
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

            <label>
              Price:
              <input
                type="number"
                min="0"
                step="0.01"
                required
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </label>
          </>
        )}

        {step === 2 && (
          <>
            <label>
              Upload Image:
              <input type="file" accept="image/*" onChange={handleImageChange} />
            </label>
            {image && <img src={image} alt="Preview" className={styles.imagePreview} />}
          </>
        )}

        {step === 3 && (
          <>
            <label>
              Tags (comma separated):
              <input
                type="text"
                value={tags}
                onChange={(e) => setTags(e.target.value)}
                placeholder="e.g. electronics, phone, accessories"
              />
            </label>
          </>
        )}

        <div className={styles.buttons}>
          {step > 1 && <button type="button" onClick={handleBack}>Back</button>}
          {step < 3 && <button type="button" onClick={handleNext}>Next</button>}
          {step === 3 && <button type="submit">Add Product</button>}
        </div>
      </form>
    </div>
  );
}
