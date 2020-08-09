import React from 'react';
import { TableComponent } from './TableComponent';

export function TableHolder (props) {
  return (
    <div className='table_holder'>
      {props.rows !== 0 && props.columns !== 0 && props.createTableClicked && < TableComponent rows={props.rows} columns={props.columns} />}
    </div>
  )
}