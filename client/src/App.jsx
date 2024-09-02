import { useState } from 'react'
import SearchBar from './components/SearchBar'
import API from "./API.js"
import './App.css'

function App() {
  const handleSearch = async (evt) => {
    evt.preventDefault();
    const data = await API.fetchPokemon();
    console.log(data);
  };

  return (
    <>
     <h1>Hello</h1>
    <SearchBar onSubmit={handleSearch}/>
    </>
  )
}

export default App




// console.log(evt.target.search.value);
// console.log(evt.target.name.value);