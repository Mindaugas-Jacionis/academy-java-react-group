import React from 'react';
import './index.css';

function Item(data) {
  return (
    <div>
      <h5>{`Degree: ${data.degree}`}</h5>
      <p>{data.university}</p>
      <p>{data.year}</p>
    </div>
  );
}

function Education(props) {
  return (
    <section>
      <h3>Education</h3>
      {props.items.map(Item)}
    </section>
  );
}

export default Education;
