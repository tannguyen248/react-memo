import React from 'react';
import './Item.css';

const Item = React.memo(({ id, title, date, isActive, handleItemClick }) => {
  return (
    <div
      className={`Item ${isActive ? 'ItemSelected' : ''}`}
      onClick={() => handleItemClick(id)}
    >
      {title}
      <div>{date}</div>
    </div>
  );
});

export default Item;
