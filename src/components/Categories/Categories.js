import React from "react";
import "./Categories.css";
import Category from "../Category/Category";
function Categories() {

  let categorias = ['Category 01', 'Category 02','Category 03','Category 04','Category 05','Category 06']

  return (
    <div className="card shadow">
      <div class="card-header py-3">
        <h6 class="m-0 font-weight-bold text-primary">
          Categories in Data Base
        </h6>
      </div>

      <div className="row card-body ">
      {/* <Category title="Category 01" />
      <Category title="Category 02" />
      <Category title="Category 03" />
      <Category title="Category 04" />
      <Category title="Category 05" />
      <Category title="Category 06" /> */}

      {categorias.map((elemento, idx) => <Category key={idx+ elemento} title={elemento} />)}
      </div>
    </div>
  );
}

export default Categories;
