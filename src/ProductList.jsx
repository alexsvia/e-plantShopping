import React, { useState } from 'react';
import './ProductList.css';
import CartItem from './CartItem';
import { useDispatch } from 'react-redux';
import { addItem } from './CartSlice';

function ProductList({ onHomeClick }) {
  const [showCart, setShowCart] = useState(false);
  const [showPlants, setShowPlants] = useState(false);
  const [addedToCart, setAddedToCart] = useState({});
  const dispatch = useDispatch();

  // Example plantsArray - replace with your actual data
  const plantsArray = [
    {
      category: 'Indoor Plants',
      plants: [
        { name: 'Ficus', image: 'ficus.png', cost: '$15' },
        { name: 'Succulent', image: 'succulent.png', cost: '$10' }
      ]
    },
    {
      category: 'Outdoor Plants',
      plants: [
        { name: 'Rose', image: 'rose.png', cost: '$20' },
        { name: 'Tulip', image: 'tulip.png', cost: '$18' }
      ]
    }
  ];

  const handleAddToCart = (plant) => {
    dispatch(addItem({
      name: plant.name,
      image: plant.image,
      cost: plant.cost
    }));
    setAddedToCart(prev => ({
      ...prev,
      [plant.name]: true
    }));
  };

  // Add other handlers here as needed

  return (
    <div>
      {/* Add your navbar here */}

      {!showCart ? (
        <div className="product-grid">
          {plantsArray.map((category, index) => (
            <div key={index}>
              <h2>{category.category}</h2>
              <div className="plant-list">
                {category.plants.map((plant, plantIndex) => (
                  <div className="product-card" key={plantIndex}>
                    <img src={plant.image} alt={plant.name} />
                    <h3>{plant.name}</h3>
                    <p>{plant.cost}</p>
                    <button onClick={() => handleAddToCart(plant)}>
                      Add to Cart
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <CartItem />
      )}
    </div>
  );
}

export default ProductList;