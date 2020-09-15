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
          src={this.state.img}
        ></img>
        <h3 className="item-price">${this.state.price}</h3>
        <QuantityPicker></QuantityPicker>
      </div>
    );
  }
}

export default Item;
