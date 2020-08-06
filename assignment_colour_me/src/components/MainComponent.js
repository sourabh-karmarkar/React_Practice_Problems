import React from 'react';
import Table from './Table';
import InputField from './InputField';
import ColorMeButton from './ColorMeButton';
import { tableObj } from "../tableDimension";

export class MainComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    }
  }

  changeColorInput = (e) => {
    let inputVal = e.target.value;
    if (!inputVal) {
      this.setState({
        colorFieldVal: inputVal,
        clicked: false
      })
    }
    if (!Number(inputVal) || inputVal < tableObj.firstElement || inputVal > tableObj.lastElement) {
      return;
    }
    this.setState({
      colorFieldVal: inputVal,
      clicked: false
    })
  }

  clickedButton = () => {
    this.setState({
      colorFieldVal: this.state.colorFieldVal,
      clicked: true
    })
  }

  render () {
    return (
      <div className="grid-container">
        <div className="field_div">
          <InputField inputVal={this.state.colorFieldVal} changeColorInput={this.changeColorInput} />
          <ColorMeButton clickedButton={this.clickedButton} />
        </div>
        <div className="table_div">
          <Table inputVal={parseInt(this.state.colorFieldVal)} clicked={this.state.clicked} table={tableObj.tableArray} />
        </div>
      </div>
    );
  }
}