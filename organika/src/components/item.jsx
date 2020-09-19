import React, { Component } from "react";
import QuantityPicker from "./quantityPicker";
import "../css/item.css";

class Item extends Component {
  state = {
    img:
      "https://www.masgamers.com/wp-content/uploads/2019/03/1.-ROG-Zephyrus-S.jpg",
    price: 100,
  };
  render() {
    return (
      <div className="container-item">
        <img
          className="item-img"
          placeholder="Image"
          src={"/images/products/" + this.props.produc.image}
        ></img>
        <h2 className="item-title">{this.props.produc.title}</h2>
        
        <h4 className="item-price">Price: ${this.props.produc.price}</h4>
        <h3 className="item-total">Total</h3>
        <QuantityPicker></QuantityPicker>
        <div className="btn-add">
          <button className="btn btn-sm btn-primary">Add</button>
        </div>
      </div>
    );
  }
}

export default Item;
