import React, { useState, useEffect, useCallback } from 'react';

const List = () => {
  const [items, setItems] = useState([]);

  const ListItem = useCallback(({ item }) => {
    console.log(`Rendering item: ${item.id}`);
    return (
      <div>
        <strong>{item.title}</strong>
        <p>{item.body}</p>
      </div>
    );
  }, []);

  useEffect(() => {
    // Fetch data from a public API
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => setItems(data.slice(0, 5))); // Displaying only the first 5 items
  }, []);

  return (
    <div>
      <h1>List Component</h1>
      {items.map((item) => (
        <ListItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default List;
