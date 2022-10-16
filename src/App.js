import React from 'react';
import "./App.css";
import Header from "./components/layout/header/Header";
import Footer from "./components/layout/footer/Footer"
import Routes from "./components/Route"




const App = () => {

  return (
    <React.StrictMode>
   
      <Header />
      <Routes />
      <Footer />
      </React.StrictMode>
  )
}

export default App
