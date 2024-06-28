/* eslint-disable react/prop-types */
import CardComponent from "./cardComponent";

const CardsComponent = ({ list }) => (
  <div className="card-container">
    {list.map(item => (
      <CardComponent key={item.productID} item={item} />
    ))}
  </div>
);

export default CardsComponent;
