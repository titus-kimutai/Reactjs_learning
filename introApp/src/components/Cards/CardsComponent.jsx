/* eslint-disable react/prop-types */
import ListComponent from "../Lists/ListComponent";

const CardsComponent = ({ list }) => (
  <div className="card-container">
    {list.map(item => (
      <ListComponent key={item.productID} item={item} />
    ))}
  </div>
);

export default CardsComponent;
