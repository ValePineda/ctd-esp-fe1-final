import "./grilla-personajes.css";
import TarjetaPersonaje from "./tarjeta-personaje.componente";
import { FC, useEffect, useState } from "react";
import Personaje from "../../types/pesonaje.types";
import { useDispatch } from "react-redux";
import { buscarPersonajesThunk } from "../../redux/actions/personajesActions";
import { useSelector } from "../../redux/store/store";

/**
 * Grilla de personajes para la pagina de inicio
 *
 * @returns un JSX element
 */
type GrillaPersonajesProps = {
  paginaActual?: number;
  personajes: Personaje[];
  estado?: string;
};

const GrillaPersonajes: FC<GrillaPersonajesProps> = ({
  paginaActual,
  personajes,
  estado,
}) => {
  const dispatch = useDispatch();

  const { personajesFavoritos } = useSelector((state) => state.favoritos);

  useEffect(() => {
    if (personajes.length == 0 || personajesFavoritos.length == 0) {
      dispatch(buscarPersonajesThunk("", paginaActual));
    }
  }, []);

  if (estado === "LOADING") return <div>Cargando personajes...</div>;
  if (estado === "FAILED") return <div>No se pudo cargar los personajes.</div>;
  if (!personajes || personajes.length === 0)
    return <div>No se encontraron personajes.</div>;

  return (
    <div className="grilla-personajes">
      {personajes.map((personaje: Personaje) => {
        return <TarjetaPersonaje personaje={personaje} key={personaje.id} />;
      })}
    </div>
  );
};

export default GrillaPersonajes;
