import React from 'react';

export default function ListView({ rows, cols }) {
  return (
    <React.Fragment>
      <div>
        <table className="table">
          <thead>
            <tr>
              {cols.map((col) => (
                <th scope="col">{col.header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.id}>
                {cols.map((col) => (
                  <td>{row[col.name]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </React.Fragment>
  )
}