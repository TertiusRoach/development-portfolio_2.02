import React from 'react';
// randomizeItem(['Fundemental', 'Crucial', 'Core']
export function randomizeItem(array: Array<string>) {
  const items = array;
  const max: number = items.length;
  const randomize = Math.floor(Math.random() * (max + 1));

  return items[randomize];
}

export function TabButton({ children, onSelect }: any) {
  return (
    <li>
      <button onClick={onSelect}>{children}</button>
    </li>
  );
}
