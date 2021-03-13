import React from 'react';

function Squirrel(props) {
  return (
    <div className="Squirrel">
      <h3>SQUIRREL CARD!</h3>
      <p>ID: {props.id}</p>
      <p>AGE: {props.age}</p>
      <p>Running? {props.running ? "🏃‍♂️" : "🧎"}</p>
    </div>
  );
}

export default Squirrel;
