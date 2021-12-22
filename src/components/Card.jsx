import React from "react";

function Card(props) {
  function onChangeNote(event) {}
  function onChangeTime(event) {}

  return (
    <div className="card">
      Card
      <input onChange={onChangeNote}></input>
      <input onChange={onChangeTime}></input>
    </div>
  );
}

export default Card;
