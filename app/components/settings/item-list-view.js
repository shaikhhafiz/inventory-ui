import React from 'react';

export default function ItemListView({ items }) {
  return (
    <React.Fragment>
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Name En</th>
              <th scope="col">Name Local</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id}>
                <td>{item.nameEn}</td>
                <td>{item.nameLocal}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </React.Fragment>
  )
}