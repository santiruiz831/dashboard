import React from "react";
import './Topbar.css'

function Topbar(props) {
    let appDashboard = [
        {
            title: 'Productos in Data Base',
            amount: 135
        },
        {
            title: 'Amount in Products',
            amount: '$546.456'
        },
        {
            title: 'Users Quantity' ,
            amount: 138
        },
    ]
  return (
    <div className="col-md-4 mb-4">
      <div className={props.className}>
        <div className="card-body">
          <div className="row no-gutters align-items-center">
            <div className="col mr-2">
              <div className={props.titleClassName}>
                {props.title}
              </div>
              <div className="h5 mb-0 font-weight-bold text-gray-800">{props.number}</div>
            </div>
            <div className="col-auto">
              <i className={props.icon}></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
