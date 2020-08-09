import React from 'react';
import { InputComponent } from './InputComponent';

export function InputHolder (props) {
  return (
    <div className='input_holder'>
      <InputComponent useCreateTableClicked={props.useCreateTableClicked} val={props.rows} setRowCol={props.handleChange} flag="row" />
      <InputComponent useCreateTableClicked={props.useCreateTableClicked} val={props.columns} setRowCol={props.handleChange} flag="column" />
    </div>
  )
}