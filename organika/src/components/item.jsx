import React, { Component } from "react";
import QuantityPicker from "./quantityPicker";
import "../css/item.css";

class Item extends Component {
  state = {
    quantity: this.props.produc.minimum || 1,
    minimum: this.props.produc.minimum || 1,
    max: this.props.produc.stock
  };
  render() {
    return (
      <div className="container-item">
        <img
          alt="Img"
          className="item-img"
          placeholder="Image"
          src={"/images/products/" + this.props.produc.image}
        ></img>
        <h2 className="item-title">{this.props.produc.title}</h2>
        
        <h4 className="item-price">Price: ${this.props.produc.price}</h4>
        <h3 className="item-total">Total ${this.props.produc.price * this.state.quantity}</h3>
        <QuantityPicker 
          max={this.state.max}
          minimum={this.state.minimum}
          value={this.state.quantity}
          onValueChange={ qnt => this.handleQuantityChange(qnt)}
          ></QuantityPicker>
        <div className="btn-add">
          <button className="btn btn-sm btn-primary">Add</button>
        </div>
      </div>
    );
  }

  handleQuantityChange = (qnt) => {
    this.setState({quantity: qnt});
  };
}
  

export default Item;
