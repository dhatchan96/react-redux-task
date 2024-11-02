import React from 'react';
import './CartPage.css';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectCartItems,
  selectTotalQuantity,
  selectTotalAmount,
  updateQuantity,
  removeItem
} from './cartSlice';

const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const totalQuantity = useSelector(selectTotalQuantity);
  const totalAmount = useSelector(selectTotalAmount);

  const handleQuantityChange = (id, quantity) => {
    dispatch(updateQuantity({ id, quantity }));
  };

  const handleRemove = (id) => {
    dispatch(removeItem(id));
  };

  return (
    <div className="cart-page">
      {cartItems.map(item => (
        <div key={item.id} className="cart-item">
          <img src={item.image} alt={item.title} className="image" />
          <div className="cart-details">
            <h2 className="title">{item.title}</h2>
            <p className="text">{item.description}</p>
          </div>
          <div className="cart-actions">
            <input
              type="number"
              value={item.quantity}
              min="1"
              onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
              className="quantity-input"
            />
            <p className="price">${(item.price * item.quantity).toFixed(2)}</p>
            <button onClick={() => handleRemove(item.id)} className="remove-button">REMOVE</button>
          </div>
        </div>
      ))}
      <div className="cart-summary">
        <div className="summary-row">
          <p>Total Quantity:</p>
          <p>{totalQuantity}</p>
        </div>
        <div className="summary-row">
          <p>Total Amount:</p>
          <p>${totalAmount}</p>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
