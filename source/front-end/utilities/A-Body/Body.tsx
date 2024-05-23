import React from 'react';
const fileLocation = 'front-end/utilities/A-body/Body.tsx';
export function randomizeItem(array: Array<string>) {
  const items = array;
  const max: number = items.length;

  const randomize = Math.floor(Math.random() * (max + 1));
  // console.log(`//--| Item Randomized |--//`);
  return items[randomize];
}

export function TabButton({ children, onSelect, isSelected }: any) {
  return (
    <li>
      <button className={isSelected ? 'active' : undefined} onClick={onSelect}>
        {children}
      </button>
    </li>
  );
}
