// src/components/Cards/CartDetails.js
import { useCart } from './cartContext';
import { initialProducts } from '../../utils/ProductList';

const CartDetails = () => {
  const { cart, isCartVisible, addItem, removeItem } = useCart();

  if (!isCartVisible) return null;

  const cartItems = Object.keys(cart.items).map((productId) => {
    const product = initialProducts.find((item) => item.productID.toString() === productId);
    return {
      ...product,
      quantity: cart.items[productId],
    };
  });

  return (
    <div className="cart-details">
      <h2>My Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <ul key={item.productID}>
              <li><span>{item.title} (x{item.quantity})</span></li>
              <div>
                <button onClick={() => addItem(item.productID, item.price)}>+</button>
                <button onClick={() => removeItem(item.productID, item.price)}>-</button>
              </div>
            </ul>
          ))}
        </ul>
      )}
      <h3>Total Price: ${cart.totalPrice.toFixed(2)}</h3>
    </div>
  );
};

export default CartDetails;
