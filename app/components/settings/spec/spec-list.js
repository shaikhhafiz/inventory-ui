import React from 'react';
import { fetchSpecs } from '../../../core/request-util';
import ListView from '../../../core/list-view';

export default function SpecList() {
  const [specs, setSpecs] = React.useState([]);
  const [error, setError] = React.useState(null);
  const cols = [
    {name: 'nameEn', header: 'Name En'},
    {name: 'nameLocal', header: 'Name Local'}
  ]

  React.useEffect(() => {
    fetchSpecs()
      .then((specs) => {
        setSpecs(specs)
        setError(null)
      })
      .catch(() => {
        console.warn('Error fetching spec list: ', error)
        setError(error)
      })
  }, [])

  return (
    <React.Fragment>
          <ListView
            rows={specs}
            cols={cols} />
    </React.Fragment>
  )
}