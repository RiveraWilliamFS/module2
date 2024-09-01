import { useState } from 'react'
import SearchBar from './components/SearchBar'
import API from "./API"
import './App.css'

function App() {
  const handleSearch = (evt) => {
    evt.preventDefault();
    console.log(evt.target.search.value);
    console.log(evt.target.name.value);
  };

  return (
    <>
     <h1>Hello</h1>
    <SearchBar onSubmit={handleSearch}/>
    </>
  )
}

export default App
