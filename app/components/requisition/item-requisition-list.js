import React from 'react';
import { fetchItemRequisitions } from '../../core/request-util';
import ItemRequisitionListView from './item-requisition-list-view';


export default function ItemRequisitionList() {
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
          <ItemRequisitionListView
            requisitions={requisitions} />
    </React.Fragment>
  )
}