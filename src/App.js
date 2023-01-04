import "./App.css";
import { Navbar } from "./hooks/Navbar";
import { Footer } from "./hooks/Footer";
import { Link, Route, Router, Routes } from "react-router-dom";
import { Home } from "./hooks/body/Home";
import { BrowserRouter } from "react-router-dom";
import Product from "./hooks/Product";
import { useEffect, useState } from "react";


// console.log(getProduct());
function App() {

  return (
    <>
      <div className="screen">
        <Navbar />
        <main className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<Product/>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
