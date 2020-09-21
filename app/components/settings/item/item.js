import React from 'react';
import { Link } from "react-router-dom";
import { fetchItems } from '../../../core/request-util';
import ItemList from './item-list';

export default function Item() {
  const [items, setItems] = React.useState([]);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    fetchItems()
      .then((items) => {
        setItems(items)
        setError(null)
      })
      .catch(() => {
        console.warn('Error fetching items list: ', error)
        setError(error)
      })
  }, [])

  return (
    <React.Fragment>
      <div className='card'>
        <div className='card-header'>
          <Link to='/settings/item/create'>Create</Link>
        </div>
        <div className='card-body'>
          <ItemList
            items={items} />
        </div>
      </div>
    </React.Fragment>
  )
}