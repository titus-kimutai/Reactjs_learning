import { useCart } from './cartContext';

const CartIcon = () => {
  const { cart, toggleCartVisibility } = useCart();

  return (
    <div className="cart-icon" onClick={toggleCartVisibility}>
      🛒
      {cart.totalItems > 0 && <span className="cart-count">{cart.totalItems}</span>}
    </div>
  );
};

export default CartIcon;
