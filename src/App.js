import React from "react";
import Layout from "./components/Layout/Layout";
import { Routes, Route } from "react-router-dom";
import Public from "./components/Public/Public";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Public />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
