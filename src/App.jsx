import React from "react";
import Navbar from "./Components/Navbar";
import Items from "./Components/Items";
import Map from "./Components/Map";
import Promotional from "./Components/Promotional";
import Footer from "./Components/Footer";

const App = () => {
  return <div className="overflow-x-hidden">
    <Navbar/>
    <Items/>
    <Map/>
    <Promotional/>
    <Footer/>
  </div>;
};

export default App;
