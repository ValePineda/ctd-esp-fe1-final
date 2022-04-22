import { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleFavoritos } from "../../redux/actions/favoritosActions";
import Personaje from "../../types/pesonaje.types";
import BotonFavorito from "../botones/boton-favorito.componente";
import "./tarjeta-personaje.css";

/**
 * Tarjeta para cada personaje dentro de la grilla de personajes.
 *
 * @returns un JSX element
 */
type TarjetaProps = {
  personaje: Personaje;
};

const TarjetaPersonaje: FC<TarjetaProps> = ({ personaje }) => {
  return (
    <div className="tarjeta-personaje">
      <img src={personaje.image} alt={personaje.name} />
      <div className="tarjeta-personaje-body">
        <span>{personaje.name}</span>
        <BotonFavorito
          personaje={personaje}
        />
      </div>
    </div>
  );
};

export default TarjetaPersonaje;
