import React from 'react';
import ItemComponent from '../ItemComponent/ItemComponent';

const ListComponent = ({ list }) => (
  <div>
    {list.map(item => (
      <ItemComponent key={item.objectID} item={item} />
    ))}
  </div>
);

export default ListComponent;
