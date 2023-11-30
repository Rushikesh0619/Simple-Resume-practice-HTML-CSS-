import React, { useState, useEffect, useCallback } from 'react';

const List = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Fetch data from a public API
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => setItems(data.slice(0, 5))); // Displaying only the first 5 items
  }, []);

  const renderItems = useCallback(() => {
    return items.map((item) => (
      <div key={item.id}>
        <strong>{item.title}</strong>
        <p>{item.body}</p>
      </div>
    ));
  }, [items]);

  return (
    <div>
      <h1>List Component</h1>
      {renderItems()}
    </div>
  );
};

export default List;
