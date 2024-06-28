/* eslint-disable react/prop-types */
// ColorButton.jsx
const ButtonComponent = ({ color, onClick }) => {
  return (
    <button 
      className={`btn-${color}`} 
      onClick={() => onClick(color)} 
      style={{
         backgroundColor: color, width: '30px',
          height: '30px', border: 'none', 
          borderRadius: '50%', margin: '5px' 
        }}
    />
  );
};

export default ButtonComponent;


