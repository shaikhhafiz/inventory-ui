import React from 'react';

export default function ListView({ rows, cols, buttons = [] }) {
  return (
    <React.Fragment>
      <div>
        <table className="table">
          <thead>
            <tr>
              {cols.map((col) => (
                <th scope="col">{col.header}</th>
              ))}
              { buttons.length > 0 && <th scope="col">{'Action'}</th>}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.id}>
                {cols.map((col) => (
                  <td>{row[col.name]}</td>
                ))}
                <td>
                  {buttons.map((button) => (
                      <span>{button}</span>
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
