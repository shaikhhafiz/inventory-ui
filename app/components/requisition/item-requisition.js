import React from 'react';
import ItemRequisitionList from './item-requisition-list';
import {Button} from "react-bootstrap";

export default function ItemRequisition() {
  return (
    <React.Fragment>
      <div className='card'>
        <div className='card-header'>
          <Button href='/requisition/create' variant="link">Create</Button>
        </div>
        <div className='card-body'>
          <ItemRequisitionList/>
        </div>
      </div>
    </React.Fragment>
  )
}
