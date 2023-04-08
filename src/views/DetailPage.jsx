import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getId, restorePoke } from "../redux/actions/index";
import styles from "../styles/Detail.module.css";

export default function Detail() {
  const dispatch = useDispatch();
  const pokeDeits = useSelector((state) => state.details);
  const { id } = useParams();
  // Tengo que crear una accion para que no me cargue por error otra imagen previamente
  useEffect(() => {
    //para acceder al id de ese pokemoncito. tambien se podia un useParams.
    dispatch(getId(id));
    dispatch(restorePoke());
  }, [dispatch, id]);

  console.log("pokeDeits", pokeDeits);
  return (
    <div className={styles.detalleBackground}>
      <nav>
        <div className={styles.btnContainer}>
          <button className={styles.botones}>
            <Link className={styles.detalleBtn} to="/create-pokemon">
              Crear pokemones
            </Link>
          </button>

          <button className={styles.botones}>
            <Link className={styles.detalleBtn} to="/home">
              Regresar
            </Link>
          </button>
        </div>
      </nav>

      <div className={styles.imgCard}>
        {/* object keys te devuelve tremendo array que sirve porque numbers */}

        {Object.keys(pokeDeits).length > 0 ? (
          <div>
            <div>
              <h4 className={styles.detailName}>{pokeDeits.name}</h4>
            </div>
            <div>
              <img
                className={styles.imagen}
                src={pokeDeits.image}
                alt={pokeDeits.name}
              />
            </div>
            <div>
              <div>
                <span className={styles.detailName}>Tipos:</span>
                <div className={styles.tipos}>
                  {pokeDeits.types[0].name}{" "}
                  {pokeDeits.types[1] && pokeDeits.types[1].name}
                </div>
              </div>
              <div className={styles.stats}>
                <span>Id: {pokeDeits.id}</span>
                <span>Life: {pokeDeits.life}</span>
                <span>Ataque: {pokeDeits.attack}</span>
                <span>Defensa: {pokeDeits.defense}</span>
                <span>Velocidad: {pokeDeits.speed}</span>
                <span>Altura: {pokeDeits.height}</span>
                <span>Peso: {pokeDeits.weight}</span>
              </div>
            </div>
          </div>
        ) : (
          <p>YA CASI</p>
        )}
      </div>
    </div>
  );
}
