import React from 'react';
import { Link } from "react-router-dom";
import { fetchItemRequisitions } from '../../core/request-util';
import ItemRequisitionList from './item-requisition-list';


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
          <Link to='/requisition/create'>Create</Link>
        </div>
        <div className='card-body'>
          <ItemRequisitionList
            requisitions={requisitions} />
        </div>
      </div>
    </React.Fragment>
  )
}