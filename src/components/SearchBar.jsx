import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getName} from "../redux/actions/index";
import styles from '../styles/search.css';

export default function SearchBar() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  function handleInputChange(e) {
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (name) {
      dispatch(getName(name));
      
      setName("");
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className={styles.searchInput}
          type="text"
          placeholder="Busca Pokemons"
          value={name}
          onChange={handleInputChange}
        />
        <button
          className={styles.lupita}
          type="submit"
        >
          🔍
        </button>
      </form>
    </div>
  );
}

