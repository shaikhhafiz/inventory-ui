import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Link,
  Route,
  useParams
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import './index.css'
import Item from './components/settings/item'
import ItemRequisitionCreate from './components/requisition/item-requisition-create';
import ItemRequisition from './components/requisition/item-requisition';

export default function App() {
  return (
    <Router>
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-md-2">
              <ul>
                <li>Settings
                  <ul>
                    <li><Link to='/settings/item'>Item</Link></li>
                  </ul>
                </li>
                <li><Link to='/requisition'>Requisition</Link></li>
              </ul>
            </div>
            <div className="col-md-10">
              <Route exact path='/requisition'>
                <ItemRequisition />
              </Route>
              <Route exact path='/settings/item'>
                <Item />
              </Route>
              <Route exact path='/requisition/create'>
                <ItemRequisitionCreate />
              </Route>
            </div>
          </div>
        </div>
      </React.Fragment>
    </Router>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)