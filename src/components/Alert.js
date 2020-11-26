import React from 'react';

export default function Alert({ show, type, mensaje, onHide }) {
    var icon = null;
    switch (type) {
      case 'error':
        icon = <span className="mr-3 text-danger"><i className="fas fa-times" /></span>;
        break;
      case 'success':
        icon = <span className="mr-3 text-success"><i className="fas fa-check" /></span>;
        break;
  
      default:
        break;
    }
  
    return <div className={`alert-pie position-fixed ${show && 'active'}`}>
      <div className="text-small d-flex">
        {icon}
        <div>{mensaje}</div>
      </div>
      <span className="close-alert cursor-pointer" onClick={onHide}>
        <i className="fas fa-times fa-md" />
      </span>
    </div>
  }