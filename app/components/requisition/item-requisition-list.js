import React from 'react';
import { fetchItemRequisitions } from '../../core/request-util';
import ListView from '../../core/list-view';


export default function ItemRequisitionList() {
  const [requisitions, setRequisitions] = React.useState([]);
  const [error, setError] = React.useState(null);
  const cols = [
    {name: 'refNo', header: 'Reference No'},
    {name: 'reqDate', header: 'Req Date'},
    {name: 'status', header: 'Status'}
  ]

  React.useEffect(() => {
    fetchItemRequisitions()
      .then((requisitions) => {
        requisitions.forEach(req => req.reqDate = new Intl.DateTimeFormat('en-US').format(new Date(req.reqDate)));
        setRequisitions(requisitions)
        setError(null)
      })
      .catch(() => {
        console.warn('Error fetching requisition list: ', error)
        setError(error)
      })
  }, [])

  return (
    <React.Fragment>
      <ListView
        rows={requisitions}
        cols={cols} />
    </React.Fragment>
  )
}
