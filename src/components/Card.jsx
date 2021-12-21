import React from "react";

function Card(props) {
  function onChangeNote(event) {}
  function onChangeTime(event) {}
  console.log(props.note, props.time);

  return (
    <div className="card">
      Card
      <input onChange={onChangeNote}></input>
      <input onChange={onChangeTime}></input>
    </div>
  );
}

export default Card;
