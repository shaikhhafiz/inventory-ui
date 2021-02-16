import React from 'react';

export default function ListView({ rows, cols, buttons = [] }) {
  return (
    <React.Fragment>
      <div>
        <table className="table">
          <thead>
            <tr key={0}>
              {cols.map((col, index) => (
                <th key={index} scope="col">{col.header}</th>
              ))}
              { buttons.length > 0 && <th key={cols.length} scope="col">{'Action'}</th>}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={index}>
                {cols.map((col, index) => (
                  <td key={index}>{row[col.name]}</td>
                ))}
                <td key={rows.length}>
                  {buttons.map((button, index) => (
                      <span key={index}>{button}</span>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </React.Fragment>
  )
}
