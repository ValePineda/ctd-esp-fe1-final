import { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { buscarPersonajesThunk } from "../../redux/actions/personajesActions";
import { useSelector } from "../../redux/store/store";
import Filtro from "../../types/filtro.type";
import "./paginacion.css";

/**
 * Componente que contiene los botones para paginar
 *
 * Deberás agregar las propiedades necesarias para que funcione correctamente
 *
 * @returns un JSX element
 */

const Paginacion: FC<Filtro> = ({ paginaActual, setPagina, nombre }) => {
  const dispatch = useDispatch();

  const { personajesFavoritos } = useSelector((state) => state.favoritos);

  const { info } = useSelector((state) => state.personajes);

  useEffect(() => {
    if (personajesFavoritos.length == 0 ) {
      dispatch(buscarPersonajesThunk(nombre, paginaActual));
    }
  }, [paginaActual, nombre]);

  const siguientePagina = () => {
    if (info?.next) {
      setPagina((prevPagina) => prevPagina + 1);
    }
  };

  const anteriorPagina = () => {
    if (info?.prev) {
      setPagina((prevPagina) => prevPagina - 1);
    }
  };

  return (
    <div className="paginacion">
      <button
        disabled={paginaActual === 1}
        className={"primary"}
        onClick={anteriorPagina}
      >
        Anterior
      </button>
      <button
        disabled={info?.next === null}
        className={"primary"}
        onClick={siguientePagina}
      >
        Siguiente
      </button>
    </div>
  );
};

export default Paginacion;
