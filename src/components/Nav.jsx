import React from "react";
import * as Tone from "tone";

function Nav(props) {
  let [speed, setSpeed] = React.useState("1000");
  function play() {
    props.data.map((el, index) => {
      let temp = el.split("%");
      temp = temp.slice(1);
      for (let i = 0; i < temp.length; i++) {
        let note = temp[i].slice(0, 2);
        let time = temp[i].slice(3) + "n";
        setTimeout(
          () =>
            new Tone.Synth().toDestination().triggerAttackRelease(note, time),
          i * +speed
        );
      }
    });
    console.log("play");
  }
  function speedChange(event) {
    setSpeed(event.target.value);
  }
  return (
    <nav>
      <p id="play" onClick={play}>
        ▶️
      </p>
      <input type="text" onChange={speedChange} placeholder="1000" />
    </nav>
  );
}

export default Nav;
