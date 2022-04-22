import "./filtros.css";
import { ChangeEvent, FC, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { buscarPersonajesThunk } from "../../redux/actions/personajesActions";
import Filtro from "../../types/filtro.type";
import { useSelector } from "../../redux/store/store";

const Filtros: FC<Filtro> = ({
  paginaActual,
  setPagina,
  nombre,
  setNombre,
}) => {
  const dispatch = useDispatch();
  const { personajesFavoritos } = useSelector((state) => state.favoritos);

  useEffect(() => {
    if (personajesFavoritos.length == 0) {
      dispatch(buscarPersonajesThunk(nombre, paginaActual));
    }
  }, [paginaActual, nombre]);

  const onChange = async (e: ChangeEvent<HTMLInputElement>) => {
    setNombre(e.target.value);
    setPagina(1);
  };

  return (
    <div className="filtros">
      <label htmlFor="nombre">Filtrar por nombre:</label>
      <input
        type="text"
        placeholder="Rick, Morty, Beth, Alien, ...etc"
        name="nombre"
        onChange={onChange}
        value={nombre}
      />
    </div>
  );
};

export default Filtros;
