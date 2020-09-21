import React from 'react';
import { Link } from "react-router-dom";
import ItemList from './item-list';

export default function Item() {
  return (
    <React.Fragment>
      <div className='card'>
        <div className='card-header'>
          <Link to='/settings/item/create'>Create</Link>
        </div>
        <div className='card-body'>
          <ItemList/>
        </div>
      </div>
    </React.Fragment>
  )
}