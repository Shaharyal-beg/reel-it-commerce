import React from "react";
import "./ProductCatalog.css"

export default function ProductCatalog()
{
    return(
        <>
      <div className="input-fields-container">
      <input className="input-fields" type="text" placeholder="Search"></input>
      <button className="search-button">Search</button>
    </div>
    <button className="add-product-button">+ ADD PRODUCT</button>
    <div className="product-table">
      <tr>
        <td>S.No</td>
        <td>Title</td>
        <td>Type</td>
        <td>Price</td>
        <td>Qty</td>
        <td>Status</td>
        <td>Operation</td>
        <td> </td>
      </tr>
      <tr>
        <td>1</td>
        <td>Shoes</td>
        <td>Footwear</td>
        <td>$44</td>
        <td>1</td>
        <td>Active</td>
        <td>Edit</td>
        <td>delete</td>
      </tr>
      <tr>
        <td>1</td>
        <td>Shoes</td>
        <td>Footwear</td>
        <td>$44</td>
        <td>1</td>
        <td>Active</td>
        <td>Edit</td>
        <td>delete</td>
      </tr>
      <tr>
        <td>1</td>
        <td>Shoes</td>
        <td>Footwear</td>
        <td>$44</td>
        <td>1</td>
        <td>Active</td>
        <td>Edit</td>
        <td>delete</td>
      </tr>
      <tr>
        <td>1</td>
        <td>Shoes</td>
        <td>Footwear</td>
        <td>$44</td>
        <td>1</td>
        <td>Active</td>
        <td>Edit</td>
        <td>delete</td>
      </tr>
      <tr>
        <td>1</td>
        <td>Shoes</td>
        <td>Footwear</td>
        <td>$44</td>
        <td>1</td>
        <td>Active</td>
        <td>Edit</td>
        <td>delete</td>
      </tr>
      <tr>
        <td>1</td>
        <td>Shoes</td>
        <td>Footwear</td>
        <td>$44</td>
        <td>1</td>
        <td>Active</td>
        <td>Edit</td>
        <td>delete</td>
      </tr>
      <tr>
        <td>1</td>
        <td>Shoes</td>
        <td>Footwear</td>
        <td>$44</td>
        <td>1</td>
        <td>Active</td>
        <td>Edit</td>
        <td>delete</td>
      </tr>
      <tr>
        <td>1</td>
        <td>Shoes</td>
        <td>Footwear</td>
        <td>$44</td>
        <td>1</td>
        <td>Active</td>
        <td>Edit</td>
        <td>delete</td>
      </tr>
    </div>
        </>
    )
}