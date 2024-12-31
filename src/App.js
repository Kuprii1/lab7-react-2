import React from "react";
import ProductGallery from "./components/ProductGallery";
import "./App.css";

const App = () => {
  return (
    <div>
      <h1 style={{ margin: "20px" }}>Product Gallery</h1>
      <ProductGallery />
    </div>
  );
};

export default App;
