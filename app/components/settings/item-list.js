import React from 'react';
import { fetchItems } from '../../core/request-util';
import ItemListView from './item-list-view';

export default function ItemList() {
  const [items, setItems] = React.useState([]);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    fetchItems()
      .then((items) => {
        setItems(items)
        setError(null)
      })
      .catch(() => {
        console.warn('Error fetching item list: ', error)
        setError(error)
      })
  }, [])

  return (
    <React.Fragment>
          <ItemListView
            items={items} />
    </React.Fragment>
  )
}