import React from 'react';

export function ButtonComponent (props) {
  return (
    <div className='button_component'>
      <button onClick={() => props.useCreateTableClicked(true)} className='button_field'>Create Table</button>
    </div>
  )
}