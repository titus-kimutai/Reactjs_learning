/* eslint-disable react/prop-types */
import { useState } from 'react';
import ButtonComponent from '../Buttons/ButtonComponent';

const ListComponent = ({ item }) => {
  const [bgColor, setBgColor] = useState('white');
  const [shoeImage, setShoeImage] = useState(item.imageUrl);

  const handleColorChange = (color) => {
    setBgColor(color);
    if (color === 'red') {
      setShoeImage(item.redImageUrl);
    } else if (color === 'black') {
      setShoeImage(item.blackImageUrl);
    } else if (color === 'orange') {
      setShoeImage(item.orangeImageUrl);
    }
  };

  const textColor = bgColor === 'black' ? 'white' : 'black';

  return (
    <div className="card" style={{ backgroundColor: bgColor }}>
      <div className="card-content">
        <img src={shoeImage} alt={item.title} className="product-image" style={{ backgroundColor: bgColor }} />
        <div className="product-details" style={{ color: textColor }}>
          <h2>{item.title}</h2>
          <p>Collection: {item.collection}</p>
          <p>{item.description}</p>
          <p>Available Colors: {item.availableColors.join(', ')}</p>
          <p>Price: ${item.price}</p>
          <div>
            <ButtonComponent color="red" onClick={() => handleColorChange('red')} />
            <ButtonComponent color="black" onClick={() => handleColorChange('black')} />
            <ButtonComponent color="orange" onClick={() => handleColorChange('orange')} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListComponent;
