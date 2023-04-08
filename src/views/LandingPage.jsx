import React from "react";
import { Link } from "react-router-dom";
import "../styles/landing.css";

const LandingPage = () => {
  return (
    <div className="container">
      <div className="overlay"></div>
      <div className="contenedor">
        <h1>Explora el mundo de Pokemon</h1>
        <p>
          Únete a entrenadores de todo el mundo para ver diversos pokemones y
          sus increibles habilidades
        </p>
        <Link to="/home" className="btnPrimary">
          EXPLORAR
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
