//
import React from 'react';
// 1. Import styles as an object for CSS Modules
import styles from './ProductCard.module.scss'; 
import PaymentBtn from '../../components/PaymentBtn';

const ProductCard = ({ data }) => {
  // 2. Safe destructuring (in case data is missing)
  const { title, image, description, price } = data?.product || {};

  // 3. Formatting price to INR
  const formattedPrice = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: price?.currency || 'INR',
    maximumSignificantDigits: 3,
  }).format(price?.amount/100 || 0);

  return (
    // 4. Use `styles['className']` to apply the hashed CSS classes
    <div className={styles['seamless-card']}>
      <div className={styles['image-container']}>
        <img src={image} alt={title} />
        <div className={styles['overlay']}>
          <button className={styles['view-btn']}>View Details 👁️</button>
        </div>
      </div>
      
      <div className={styles['card-content']}>
        <div className={styles['header']}>
          <h3 className={styles['title']}>{title}</h3>
          <span className={styles['price']}>{formattedPrice}</span>
        </div>
        <p className={styles['description']}>{description}</p>
        {/* <button >
        </button> */}
          <PaymentBtn />
      </div>
    </div>
  );
};

export default ProductCard;