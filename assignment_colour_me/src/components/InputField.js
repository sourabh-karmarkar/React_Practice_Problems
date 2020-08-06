import React from 'react';
import '../App.css';

function InputField (props) {
  return (
    <div className="input_div">
      <input className="numberInput" type="text" value={props.inputVal ? props.inputVal : ''} onChange={props.changeColorInput}></input>
    </div>
  )
}

export default InputField;