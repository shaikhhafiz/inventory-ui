import React from 'react';
import { fetchItems } from '../../core/request-util';
import ListView from '../../core/list-view';

export default function ItemList() {
  const [items, setItems] = React.useState([]);
  const [error, setError] = React.useState(null);
  const cols = [
    {name: 'nameEn', header: 'Name En'},
    {name: 'nameLocal', header: 'Name Local'}
  ]

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
          <ListView
            rows={items}
            cols={cols} />
    </React.Fragment>
  )
}