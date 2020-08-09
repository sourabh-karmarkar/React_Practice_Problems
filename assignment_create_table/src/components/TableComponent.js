import React from 'react';

export function TableComponent (props) {
  return (
    <div className="table_component">
      <table className="table_field">
        <tbody>
          {[...Array(props.rows)].map(row => {
            return <tr>
              {[...Array(props.columns)].map(column => {
                return <td></td>
              })}
            </tr>
          })}
        </tbody>
      </table>
    </div>
  )
}