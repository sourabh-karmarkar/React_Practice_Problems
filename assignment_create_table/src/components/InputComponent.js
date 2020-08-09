import React from 'react';

export function InputComponent (props) {
  return (
    <div className='input_component'>
      <input placeholder={'Enter No Of ' + props.flag + 's'} className='input_field' type='text' onChange={e => {
        props.useCreateTableClicked(false)
        props.setRowCol(e.target.value, props.flag);
      }} value={props.val}></input>
    </div>
  )
}