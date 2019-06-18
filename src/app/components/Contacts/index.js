import React from 'react';
import './index.css';

function Item(data) {
  const Icon = data.icon;

  return (
    <a href={data.link}>
      <Icon />
      <span>{data.text}</span>
    </a>
  );
}

function Contacts(props) {
  return <section>{props.items.map(Item)}</section>;
}

export default Contacts;
