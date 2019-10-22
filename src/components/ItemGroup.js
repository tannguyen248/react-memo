import React from 'react';
import Item from './Item';
import './ItemGroup.css';

const ItemGroup = ({ title, items, selectedItems, handleItemClick }) => {
  return (
    <div>
      <h2>{title}</h2>
      <div className="ItemGroup">
        {items.map(item => (
          <Item
            key={item.id}
            isActive={selectedItems.indexOf(item.id) > -1}
            handleItemClick={handleItemClick}
            {...item}
          />
        ))}
      </div>
    </div>
  );
};

export default ItemGroup;
