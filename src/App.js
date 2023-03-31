import React, {useState, useEffect} from 'react';
import Cards from './components/Cards/Cards.jsx';
import Nav from "./components/Nav/Nav.jsx"
import axios from 'axios';


function App(){
   const [characters,setCharacters] = useState([
      {
         id: 1,
         name: 'Rick Sanchez',
         status: 'Alive',
         species: 'Human',
         gender: 'Male',
         origin: {
            name: 'Earth (C-137)',
            url: 'https://rickandmortyapi.com/api/location/1',
         },
         image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
      }
   ])

   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }

   function onClose(id){
     setCharacters((oldChars)=>{
      return oldChars.filter((ch)=> ch.id !== id)
     });
   }

   return (
      <div className='App'>
      <Nav onSearch={onSearch}/>
      <Cards onClose={onClose} characters={characters}/>
      </div>
   )
}

export default App;


import React from 'react'



   