import React from 'react';
import { fetchItemRequisitions } from '../../core/request-util';
import ItemRequisitionList from './item-requisition-list';
import {Button} from "react-bootstrap";


export default function ItemRequisition() {
  const [requisitions, setRequisitions] = React.useState([]);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    fetchItemRequisitions()
      .then((requisitions) => {
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
      <div className='card'>
        <div className='card-header'>
          <Button href='/requisition/create' variant="link">Create</Button>
        </div>
        <div className='card-body'>
          <ItemRequisitionList
            requisitions={requisitions} />
        </div>
      </div>
    </React.Fragment>
  )
}
