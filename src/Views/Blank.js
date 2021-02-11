import React from 'react';

export default function Blank() {
  return <div>

    <div className="btn-group">
      <button type="button" className="btn btn-danger">Action</button>
      <button type="button" className="btn btn-danger dropdown-toggle dropdown-toggle-split">
        <span className="visually-hidden">Toggle Dropdown</span>
      </button>
      <ul className="dropdown-menu">
        <li><a className="dropdown-item" href="#">Action</a></li>
        <li><a className="dropdown-item" href="#">Another action</a></li>
        <li><a className="dropdown-item" href="#">Something else here</a></li>
        <li><hr className="dropdown-divider" /></li>
          <li><a className="dropdown-item" href="#">Separated link</a></li>
  </ul>
</div>

    </div>
}