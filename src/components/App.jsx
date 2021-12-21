import React from "react";
import List from "./List";
import "../../public/styles.css";

function App() {
  //addlist

  function addList() {
    let temp = data;
    temp.push("");
    updateData(temp);
    temp = view;
    updateView(
      <div id="container">
        {data.map((el, index) => {
          console.log(index);
          return (
            <List
              key={"" + index}
              id_s={"" + index}
              data={data}
              updateData={updateData}
              view={view}
              updateView={updateView}
            />
          );
        })}
      </div>
    );
    console.log(data);
  }
  //main
  let [data, updateData] = React.useState(["%A4$10000", "%C4$1000%D4$100"]);
  let [view, updateView] = React.useState(
    <div id="container">
      {data.map((el, index) => {
        console.log(index);
        return (
          <List
            key={"" + index}
            id_s={"" + index}
            data={data}
            updateData={updateData}
          />
        );
      })}
    </div>
  );
  //out
  return (
    <div>
      <nav>
        <p id="play">▶️</p>
        <p id="stop">⏹</p>
        <input type="text" value="1000" />
      </nav>
      {view}
      <p class="add-list" onClick={addList}>
        🌀
      </p>
    </div>
  );
}

export default App;
