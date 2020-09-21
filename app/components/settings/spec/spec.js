import React from 'react';
import { Link } from "react-router-dom";
import SpecList from './spec-list';

export default function Spec() {
  return (
    <React.Fragment>
      <div className='card'>
        <div className='card-header'>
          <Link to='/settings/spec/create'>Create</Link>
        </div>
        <div className='card-body'>
          <SpecList/>
        </div>
      </div>
    </React.Fragment>
  )
}