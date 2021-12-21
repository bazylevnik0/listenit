import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import sound_do from "./sounds/do.wav";
import sound_re from "./sounds/re.wav";

ReactDOM.render(<App />, document.getElementById("root"));

let audio_do = new Audio(sound_do);
let audio_re = new Audio(sound_re);

var button = document.querySelector("button");
button.addEventListener("click", function () {
  audio_do.play();
  audio_re.play();

  setTimeout(function () {
    audio_do.loop = true;
    audio_do.play();
  }, 1000);
});
