import React, { useState } from 'react';
import { InputHolder } from './InputHolder';
import { ButtonComponent } from './ButtonComponent';
import { TableHolder } from './TableHolder';

export function MainComponent () {

  const [rows, setRows] = useState('');
  const [columns, setColumns] = useState('');
  const [createTableClicked, useCreateTableClicked] = useState(false);

  function handleChange (inputVal, flag) {
    if (!inputVal) {
      flag === "row" ? setRows(inputVal) : setColumns(inputVal);
    }
    if (!Number(inputVal) || inputVal < 1 || inputVal > 10) {
      return;
    }
    flag === "row" ? setRows(parseInt(inputVal)) : setColumns(parseInt(inputVal));
  }

  return (
    <div className='main_component'>
      <InputHolder useCreateTableClicked={useCreateTableClicked} rows={rows} columns={columns} handleChange={handleChange} />
      <ButtonComponent useCreateTableClicked={useCreateTableClicked} />
      <TableHolder createTableClicked={createTableClicked} rows={rows} columns={columns} />
    </div>
  )
}