import React from 'react';

export default function ItemRequisitionListView({ requisitions }) {
  return (
    <React.Fragment>
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Ref No</th>
              <th scope="col">Req Date</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            {requisitions.map((requisition) => (
              <tr key={requisition.id}>
                <td>{requisition.refNo}</td>
                <td>{requisition.reqDate}</td>
                <td>{requisition.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </React.Fragment>
  )
}