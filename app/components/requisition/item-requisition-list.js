import React from 'react';
import { fetchItemRequisitions } from '../../core/request-util';
import ListView from '../../core/list-view';
import {Button} from "react-bootstrap";


export default function ItemRequisitionList() {
  const [requisitions, setRequisitions] = React.useState([]);
  const [error, setError] = React.useState(null);
  const cols = [
    {name: 'refNo', header: 'Reference No'},
    {name: 'reqDate', header: 'Req Date'},
    {name: 'status', header: 'Status'}
  ]
  const buttons = [
      <Button href='#' variant="link">Edit</Button>,
    <Button href='#' variant="link">View</Button>
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
        cols={cols}
        buttons={buttons}/>
    </React.Fragment>
  )
}
