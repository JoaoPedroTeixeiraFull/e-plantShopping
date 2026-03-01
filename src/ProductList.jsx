import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from './CartSlice';
import CartItem from './CartItem';
import plantsArray from './plantsArray';
import './ProductList.css';

const ProductList = () => {
  const dispatch = useDispatch();
  const [showCart, setShowCart] = useState(false);

  const handleAddToCart = (plant) => {
    dispatch(addItem({
      ...plant,
      quantity: 1
    }));
  };

  const handleShowCart = () => {
    setShowCart(true);
  };

  const handleContinueShopping = () => {
    setShowCart(false);
  };

  return (
    <div>
      <div className="header">
        <button onClick={handleShowCart}>🛒 Cart</button>
      </div>

      {!showCart ? (
        <div className="product-grid">
          {plantsArray.map(category =>
            category.plants.map(plant => (
              <div className="product-card" key={plant.name}>
                <img src={plant.image} alt={plant.name} />
                <h3>{plant.name}</h3>
                <p>{plant.description}</p>
                <p>${plant.cost}</p>
                <button onClick={() => handleAddToCart(plant)}>
                  Add to Cart
                </button>
              </div>
            ))
          )}
        </div>
      ) : (
        <CartItem onContinueShopping={handleContinueShopping} />
      )}
    </div>
  );
};

export default ProductList;