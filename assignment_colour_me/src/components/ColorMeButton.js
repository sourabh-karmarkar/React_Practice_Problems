import React from 'react';
import '../App.css';

function ColorMeButton (props) {
  return (
    <div className="button_div">
      <button onClick={props.clickedButton}>Color Me</button>
    </div>
  )
}

export default ColorMeButton;