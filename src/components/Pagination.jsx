import React from "react";
import styles from '../styles/pagination.css'

export default function Pagination({  
  pokemonPerPage,
  allPokemon,
  paging,
}) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(allPokemon/pokemonPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className={styles.pagination}>
      {pageNumbers?.map((number) => (
        <button className={styles.btn} key={number} onClick={() => paging(number)}>
          {number}
        </button>
      ))}
    </div>
  );
}
