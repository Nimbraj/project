// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Component/header';
import First from './Home/First';
import Login from './Component/Login';
import RegisterForm from './Component/rester'; // if it's misspelled, correct the file name
import About from './Home/About';
import ProductPage from './Home/Product';

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<First />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegisterForm />} />
       
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<ProductPage />} />
        

      </Routes>
    </>
  );
}
