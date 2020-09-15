import React, { Component } from "react";
class QuantityPicker extends Component {
  // test = () => {
  //   var dog = {
  //     name: "Fido",
  //     age: 5,
  //     color: "white",
  //   };

  //   // var name = dog.name;
  //   // var age = dog.age;
  //   // var color = dog.color;

  //   // object destructuring
  //   var { name, age, color } = dog;
  //   console.log(dog);

  //   // spread operator ( ... )
  //   var colors = ["red", "black", "blue"];

  //   // var aCopy = colors;
  //   // aCopy.push("green");

  //   // console.log(aCopy);
  //   console.log(colors);

  //   // var aCopy = [...colors, "purple", "pink"];
  //   // console.log(aCopy);

  //   var mapRes = colors.map((item) => {
  //     return item.toUpperCase();
  //   });
  //   console.log(mapRes);

  //   // filter
  // var nums = [3,1,78,23,87,2];
  // var big = nums.filter((n) =>  n > 10);

  // // var colors = ["red", "black", "blue"];
  // // let colorLaberls = colors.map((x) => <button>{x}</button>);
  // };

  state = {
    quantity: 1,
    name: "Ivan",
  };

  render() {
    // this.test();

    return (
      <div>
        <button onClick={this.increase} className="btn btn-primary">
          +
        </button>
        <label>{this.state.quantity}</label>
        <button 
          onClick={this.decrease} 
          disabled = {this.state.quantity === 0}
          className="btn btn-primary"
        >
          -
        </button>
      </div>
    );
  }

  increase = () => {
    this.setState({ quantity: this.state.quantity + 1 });
  };

  decrease = () => {
    let newVal = this.state.quantity - 1;
    if (newVal >= 0) {
      this.setState({ quantity: newVal });
    }
  };
}

export default QuantityPicker;
