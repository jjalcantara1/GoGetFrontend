import React, { useState } from 'react';

function PromoRedeem({ originalTotalCost, updateTotalCost }) {
  const [promoCode, setPromoCode] = useState('');
  const [error, setError] = useState('');
  const [discountRate, setDiscountRate] = useState(null);
  const [discountApplied, setDiscountApplied] = useState(0);
  const [newTotalCost, setNewTotalCost] = useState(originalTotalCost);

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
        setDiscountRate(null);
        setDiscountApplied(0);
        return;
      }
      
      const data = await response.json();
      const discountRate = data.discount;
      setDiscountRate(discountRate);
      setError('');

      // If promo code is valid, update total cost and discount applied
      if (data.discount) {
        const discountAmount = originalTotalCost * (discountRate / 100);
        setDiscountApplied(discountAmount);
        const newTotal = originalTotalCost - discountAmount;
        setNewTotalCost(newTotal);
        updateTotalCost(newTotal);
      }
    } catch (error) {
      console.error('Error redeeming promo code:', error);
      setError('An error occurred while redeeming the promo code');
      setDiscountRate(null);
      setDiscountApplied(0);
      setNewTotalCost(originalTotalCost); // Reset new total cost to original total cost
    }
  };

  return (
    <div className="card">
      <div className="card-body">
        <h2 className="card-title">Redeem Promo Code</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="promoCode" className="form-label">Promo Code:</label>
            <input
              type="text"
              className="form-control"
              id="promoCode"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">Redeem</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {discountRate && <p>Discount Rate: {discountRate}%</p>}
        {discountApplied !== 0 && <p>Discount Applied: ${discountApplied.toFixed(2)}</p>}
      </div>
    </div>
  );
}

export default PromoRedeem;
