import React from "react";
import "./App.css";
import NavBar from "./components/navBar";
import QuantityPicker from "./components/quantityPicker";
import Footer from "./components/footer";
import Todo from "./components/todo";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <React.Fragment>
      <div className="App">
        <NavBar></NavBar>
        <h1>Hello React!!!</h1>
        <QuantityPicker></QuantityPicker>
      </div>
      <Footer></Footer>
    </React.Fragment>
  );
}

export default App;

// Advance ES6 topics
// Arrow functions
// Objects destructuring
// Spread operator
// Array methods ( filter, map, sort )
