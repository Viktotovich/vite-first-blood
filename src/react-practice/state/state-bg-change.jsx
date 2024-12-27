import { useState } from "react";

const COLORS = ["pink", "green", "blue", "yellow", "purple"];

function Tracker() {
  const [backgroundColor, setBackgroundColor] = useState(COLORS[0]);
  const [timesChanged, setTimesChanged] = useState(0);

  const onButtonClick = (color) => () => {
    setBackgroundColor(color);
    setTimesChanged((a) => a + 1);
  };

  return (
    <div
      className="App"
      style={{
        backgroundColor,
      }}
    >
      <h2>Times Changed {timesChanged}</h2>
      {COLORS.map((color) => (
        <button
          type="button"
          key={color}
          onClick={onButtonClick(color)}
          className={backgroundColor === color ? "selected" : ""}
        >
          {color}
        </button>
      ))}
    </div>
  );
}

/* 
Head back to the colour changing background example from earlier in the lesson, and add a new state variable to keep track of the number of times the background color has been changed. Display the number of times the background color has been changed on the page. You will need to fork the codesandbox to do this, which requires a codesandbox account. Click “Open Editor” in the top right of the codesandbox embed, then “Fork” in the top right of the editor.
*/
export default Tracker;
