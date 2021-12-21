import React from "react";
import ReactDOM from "react-dom";
import * as Tone from "tone";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));

//sound
const synth = new Tone.Synth().toDestination();

//control
/*
let button = document.querySelector("button");
button.addEventListener("click", function () {
  synth.triggerAttackRelease("C4", "8n");
});
*/
