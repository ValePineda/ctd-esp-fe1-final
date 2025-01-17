import { FC } from "react";
import { useDispatch } from "react-redux";
import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente";
import { limpiarFavoritos } from "../redux/actions/favoritosActions";
import { useSelector } from "../redux/store/store";

/**
 * Esta es la pagina de favoritos. Aquí se deberan ver todos los personajes marcados como favoritos
 *
 * Uso:
 * ``` <PaginaFavoritos /> ```
 *
 * @returns la pagina de favoritos
 */
const PaginaFavoritos: FC = () => {
  const favoritos = useSelector((state) => state.favoritos.personajesFavoritos);
  const dispatch = useDispatch();

  return (
    <div className="container">
      <div className="actions">
        <h3>Personajes Favoritos</h3>
        <button className="danger" onClick={()=>dispatch(limpiarFavoritos())}>Limpiar favoritos</button>
      </div>
      <GrillaPersonajes personajes={favoritos} />
    </div>
  );
};

export default PaginaFavoritos;
