/* eslint-disable react/prop-types */
import { useCart } from './cartContext';
import ListComponent from '../Lists/ListComponent';

const CardComponent = ({ item }) => {
  const { addItem, removeItem, cart } = useCart();

  return (
    <div className="card">
      <ListComponent item={item} />
      <div className="card-actions">
        <button onClick={() => addItem(item.productID, item.price)}>+</button>
        <button onClick={() => removeItem(item.productID, item.price)}>-</button>
        <span>Quantity: {cart.items[item.productID] || 0}</span>
      </div>
    </div>
  );
};

export default CardComponent;
