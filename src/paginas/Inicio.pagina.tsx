import Filtros from "../componentes/personajes/filtros.componente";
import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente";
import Paginacion from "../componentes/paginacion/paginacion.componente";
import { FC, useState } from "react";
import { useSelector } from "../redux/store/store";
import { useDispatch } from "react-redux";
import { buscarPersonajesThunk } from "../redux/actions/personajesActions";
/**
 * Esta es la pagina principal. Aquí se debera ver el panel de filtros junto con la grilla de personajes.
 *
 * Uso:
 * ``` <PaginaInicio /> ```
 *
 * @returns la pagina de inicio
 */
const PaginaInicio: FC = () => {
  const [paginaActual, setPagina] = useState<number>(1);
  const [nombre, setNombre] = useState<string>("");

  const { personajes, estado } = useSelector((state) => state.personajes);

  const dispatch = useDispatch();

  /**
   * Funcion que permite limpiar los parametros de busqueda (pagina y nombre)
   */
  const limpiar = () => {
    setNombre("")
    setPagina(1)
 
    dispatch(buscarPersonajesThunk("", 1));

  };

  return (
    <div className="container">
      <div className="actions">
        <h3>Catálogo de Personajes</h3>
        <button className="danger" onClick={limpiar}>
          Limpiar filtro
        </button>
      </div>
      <Filtros
        paginaActual={paginaActual}
        setPagina={setPagina}
        nombre={nombre}
        setNombre={setNombre}
      />
      <Paginacion
        paginaActual={paginaActual}
        setPagina={setPagina}
        nombre={nombre}
        setNombre={setNombre}
      />
      <GrillaPersonajes
        paginaActual={paginaActual}
        personajes={personajes}
        estado={estado}
      />
      <Paginacion
        paginaActual={paginaActual}
        setPagina={setPagina}
        nombre={nombre}
        setNombre={setNombre}
      />
    </div>
  );
};

export default PaginaInicio;
