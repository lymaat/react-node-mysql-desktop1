import React, { useState, useEffect } from 'react';
import { useContext } from 'react';
function Cart() {
  const [cart, setCart] = useState([]);
  const customer_id = 1; // You should replace this with the actual customer ID.

  // Fetch the user's cart when the component mounts
  useEffect(() => {
    getCartByCustomer(customer_id);
  }, [customer_id]);

  const getCartByCustomer = async (customer_id) => {
    try {
      const response = await fetch(`/api/cart?customer_id=${customer_id}`);
      if (response.ok) {
        const data = await response.json();
        setCart(data.list);
      } else {
        console.error('Failed to fetch cart data');
      }
    } catch (error) {
      console.error('An error occurred while fetching cart data:', error);
    }
  };

  return (
    <div>
      <h1>Your Shopping Cart</h1>
      <ul>
        {cart.map((item) => (
          <li key={item.cart_id}>
            <div>
              <h2>{item.name}</h2>
              <p>Quantity: {item.quantity}</p>
              <p>Price: ${item.price}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;
