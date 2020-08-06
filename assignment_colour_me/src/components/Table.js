import React from 'react';
import '../App.css';
import { tableObj } from "../tableDimension";

function Table (props) {
  return (
    <table className="numberTable">
      <tbody>
        {props.table.map((tableRow) => {
          return <tr>
            {tableRow.map((tableBlock) => {
              if (props.clicked && props.inputVal < tableObj.lastElement + 1 && props.inputVal > tableObj.firstElement - 1 && tableBlock === props.inputVal) {
                return <td key={tableBlock} style={{ backgroundColor: 'green' }} className="numberTableBlock">{tableBlock}</td>
              }
              else {
                return <td key={tableBlock} className="numberTableBlock">{tableBlock}</td>
              }
            })}
          </tr>
        })}
      </tbody>
    </table>
  )
}

export default Table;