import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "./styles/layout.css"
import Navbar from './components/Navbar'
import Discover from './components/Discover'
import SearchFilter from './components/SearchFilter'
import Filter from './components/Filter'
import Footer from './components/Footer'
import Card from './components/ProductCard'

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Discover />
      <SearchFilter />
      <div className="filter_and_Card">
      <Filter />
      <Card />
      </div>
     
      <Footer />
    </div>
  );
}

export default App;

