import React from "react";
import "./App.css";
import NavBar from "./components/navBar";
import Footer from "./components/footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Catalog from "./components/catalog";

function App() {
  return (
    <React.Fragment>
        <NavBar></NavBar>
      <div className="App container-fluid">
        <Catalog></Catalog>
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
