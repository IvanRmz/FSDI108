import React, { Component } from "react";
class QuantityPicker extends Component {
  render() {
    return (
      <div>
        <button className="btn btn-primary">+</button>
        <label>1</label>
        <button className="btn btn-primary">-</button>
      </div>
    );
  }
}

export default QuantityPicker;
