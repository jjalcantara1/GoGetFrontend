import React, { useState } from 'react';

function PromoRedeem() {
  const [promoCode, setPromoCode] = useState('');
  const [error, setError] = useState('');
  const [discount, setDiscount] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/redeem-promo/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ promo_code: promoCode }),
      });
      
      if (!response.ok) {
        const data = await response.json();
        setError(data.error || 'An error occurred');
        setDiscount(null);
        return;
      }
      
      const data = await response.json();
      setDiscount(data.discount);
      setError('');
    } catch (error) {
      console.error('Error redeeming promo code:', error);
      setError('An error occurred while redeeming the promo code');
      setDiscount(null);
    }
  };

  return (
    <div>
      <h2>Redeem Promo Code</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Promo Code:
          <input
            type="text"
            value={promoCode}
            onChange={(e) => setPromoCode(e.target.value)}
          />
        </label>
        <button type="submit">Redeem</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {discount && <p>Discount Applied: {discount}%</p>}
    </div>
  );
}

export default PromoRedeem;