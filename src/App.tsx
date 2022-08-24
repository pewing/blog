import React from 'react';
import { Routes, Route } from "react-router-dom";

import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Layout from "./components/Layout";
import Work from "./components/Work";

import './App.scss';

const App = () => {
  return (
    <div className="App">
        <Layout>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/work" element={<Work />} />
              <Route path="/contact" element={<Contact />} />
          </Routes>
        </Layout>
    </div>
  );
}

export default App;
