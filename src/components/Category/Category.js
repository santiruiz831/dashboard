import React from "react";
import "./Category.css";

function Category(props) {
  return (
    

        <div className="col-lg-6 mb-4">
          <div className="card bg-info text-white ">
            <div className="card-body">{props.title}</div>
          </div>
        </div>
        
  );
}

export default Category;
