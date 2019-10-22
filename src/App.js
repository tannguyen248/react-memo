import React, { useState } from 'react';
import './App.css';
import ItemGroup from './components/ItemGroup';

const getRandomId = () =>
  Math.random()
    .toString(36)
    .substring(9);

const data = [
  {
    title: 'TODAY',
    items: [
      { id: getRandomId(), title: 'Image 1', date: Date.now() },
      { id: getRandomId(), title: 'Image 2', date: Date.now() },
      { id: getRandomId(), title: 'Image 3', date: Date.now() },
      { id: getRandomId(), title: 'Image 4', date: Date.now() },
      { id: getRandomId(), title: 'Image 5', date: Date.now() },
      { id: getRandomId(), title: 'Image 6', date: Date.now() },
      { id: getRandomId(), title: 'Image 7', date: Date.now() },
      { id: getRandomId(), title: 'Image 8', date: Date.now() }
    ]
  },
  {
    title: 'YESTERDAY',
    items: [
      { id: getRandomId(), title: 'Image 1', date: Date.now() },
      { id: getRandomId(), title: 'Image 2', date: Date.now() },
      { id: getRandomId(), title: 'Image 3', date: Date.now() },
      { id: getRandomId(), title: 'Image 4', date: Date.now() },
      { id: getRandomId(), title: 'Image 5', date: Date.now() },
      { id: getRandomId(), title: 'Image 6', date: Date.now() },
      { id: getRandomId(), title: 'Image 7', date: Date.now() },
      { id: getRandomId(), title: 'Image 8', date: Date.now() }
    ]
  },
  {
    title: 'OCT 15',
    items: [
      { id: getRandomId(), title: 'Image 1', date: Date.now() },
      { id: getRandomId(), title: 'Image 2', date: Date.now() },
      { id: getRandomId(), title: 'Image 3', date: Date.now() },
      { id: getRandomId(), title: 'Image 4', date: Date.now() },
      { id: getRandomId(), title: 'Image 5', date: Date.now() },
      { id: getRandomId(), title: 'Image 6', date: Date.now() },
      { id: getRandomId(), title: 'Image 7', date: Date.now() },
      { id: getRandomId(), title: 'Image 8', date: Date.now() }
    ]
  },
  {
    title: 'OCT 14',
    items: [
      { id: getRandomId(), title: 'Image 1', date: Date.now() },
      { id: getRandomId(), title: 'Image 2', date: Date.now() },
      { id: getRandomId(), title: 'Image 3', date: Date.now() },
      { id: getRandomId(), title: 'Image 4', date: Date.now() },
      { id: getRandomId(), title: 'Image 5', date: Date.now() },
      { id: getRandomId(), title: 'Image 6', date: Date.now() },
      { id: getRandomId(), title: 'Image 7', date: Date.now() },
      { id: getRandomId(), title: 'Image 8', date: Date.now() }
    ]
  },
  {
    title: 'OCT 13',
    items: [
      { id: getRandomId(), title: 'Image 1', date: Date.now() },
      { id: getRandomId(), title: 'Image 2', date: Date.now() },
      { id: getRandomId(), title: 'Image 3', date: Date.now() },
      { id: getRandomId(), title: 'Image 4', date: Date.now() },
      { id: getRandomId(), title: 'Image 5', date: Date.now() },
      { id: getRandomId(), title: 'Image 6', date: Date.now() },
      { id: getRandomId(), title: 'Image 7', date: Date.now() },
      { id: getRandomId(), title: 'Image 8', date: Date.now() }
    ]
  }
];

function App() {
  const [selectedItems, setSelectedItems] = useState([]);

  const handleItemClick = id => {
    if (selectedItems.indexOf(id) > -1) {
      console.log(id, selectedItems);
      setSelectedItems(selectedItems.filter(x => x !== id));
    } else {
      console.log(id, selectedItems);
      setSelectedItems([id, ...selectedItems]);
    }
  };

  return (
    <div className="App">
      <header className="App-header">Gallery</header>
      {data.map(itemGroup => (
        <ItemGroup
          key={itemGroup.title}
          selectedItems={selectedItems}
          handleItemClick={handleItemClick}
          {...itemGroup}
        />
      ))}
    </div>
  );
}

export default App;
