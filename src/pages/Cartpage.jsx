import "./cart.css"
import { useEffect, useState } from "react";
import { getCart, removeFromCart,clearCart } from "./cartutils";

export default function CartPage() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    setCartItems(getCart());
  }, []);

  const handleRemove = (id) => {
    removeFromCart(id);
    setCartItems(getCart());
  };
 const handleClearCart = () => {
    clearCart();
    setCartItems([]);
  };
 

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.thumbnail} alt="img" />
            <h4>{item.title}</h4>
            <p>Qty: {item.qty}</p>
            <button onClick={() => handleRemove(item.id)} className="remove-btn">Remove</button>
          </div>
        ))
      )}
      <button onClick={handleClearCart} className="clear-cart-btn ">Clear Cart</button>
    </div>
  );
}
