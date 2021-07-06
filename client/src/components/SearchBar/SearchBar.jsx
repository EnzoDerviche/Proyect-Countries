import React, {useState} from 'react';
import style from './SearchBar.module.css'

export default function SearchBar({onSearch}) {
  const [country, setCountry] = useState("");
  return (
      <form className={style.searchBar} onSubmit={(e) =>{
        e.preventDefault();
        onSearch(country);
        setCountry("");
      }}>
      <input className={style.input}
        type="text"
        placeholder="Country..."
        value= {country}
        onChange={e => setCountry(e.target.value)}
      />  
      <input className={style.search} type="submit" value="Agregar" />
      </form>
  );
}
