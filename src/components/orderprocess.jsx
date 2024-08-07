import React from 'react';

export const OrderProcess = () => {
  return (
    <div id="process" style={styles.container}>
      <h2 style={styles.heading}>Order Fulfillment Process</h2>
      <div style={styles.step}>
        <img src="/img/make-order.png" alt="Retail Shop Owner Places Order" style={styles.image} />
        <p style={styles.text}>Retail Shop Owner Places Order</p>
      </div>
      <div style={styles.arrow}>
        <img src="/img/arrow.jpg" alt="Arrow" style={styles.arrowImage} />
      </div>
      <div style={styles.step}>
        <img src="/img/recieve-order.png" alt="Distributor Receives Order" style={styles.image} />
        <p style={styles.text}>Distributor Receives Order</p>
      </div>
      <div style={styles.arrow}>
        <img src="/img/arrow.jpg" alt="Arrow" style={styles.arrowImage} />
      </div>
      <div style={styles.step}>
        <img src="/img/order-success.png" alt="Order Confirmed" style={styles.image} />
        <p style={styles.text}>Order Confirmed</p>
      </div>
      <div style={styles.arrow}>
        <img src="/img/arrow.jpg" alt="Arrow" style={styles.arrowImage} />
      </div>
      <div style={styles.step}>
        <img src="/img/algo.png" alt="Optimizing Delivery Dates and Routes" style={styles.image} />
        <p style={styles.text}>Optimizing Delivery Dates and Routes</p>
      </div>
      <div style={styles.arrow}>
        <img src="/img/arrow.jpg" alt="Arrow" style={styles.arrowImage} />
      </div>
      <div style={styles.step}>
        <img src="/img/delivery.png" alt="Order Delivered to Retail Shop" style={styles.image} />
        <p style={styles.text}>Order Delivered to Retail Shop</p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: '30px',
    marginTop: '20px',
    marginBottom: '20px',
  },
  step: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    width: '200px', // Fixed width to keep alignment even with varying text lengths
  },
  image: {
    width: '140px',
    height: '140px',
    background: '#f0f0f0',
    borderRadius: '50%',
    objectFit: 'cover',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  },
  text: {
    marginTop: '10px',
    fontSize: '16px',
    lineHeight: '1.4', // Adjust line height for better text alignment
  },
  arrow: {
    display: 'flex',
    alignItems: 'center',
  },
  arrowImage: {
    width: '40px',
    height: '40px',
  },
};
