import { type } from "os";
import { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleFavoritos } from "../../redux/actions/favoritosActions";
import { useSelector } from "../../redux/store/store";
import Personaje from "../../types/pesonaje.types";
import "./boton-favorito.css";
/**
 * Boton que indica si un elemento es favorito o no, y da la posibilidad de marcarlo/desmarcarlo
 *
 * Deberás tipar las propiedades si usas este componente
 *
 * @returns un JSX element
 */

type BotonFavoritoProps = {
  onClick?: () => void;
  personaje: Personaje;
};

const BotonFavorito: FC<BotonFavoritoProps> = ({ personaje }) => {
  // console.log(esFavorito, "fav");
  const dispatch = useDispatch();

  const [esFavorito, setEsFavorito] = useState<boolean>(personaje.esFavorito);

  const toggleFavorito = () => {
    console.log(personaje);

    setEsFavorito(!personaje.esFavorito ? true : false);
    personaje.esFavorito = esFavorito;
    dispatch(toggleFavoritos(personaje));
  };
 
  console.log(personaje.esFavorito);
  

  const src =
    personaje.esFavorito == true
      ? "/imagenes/star-filled.png"
      : "/imagenes/star.png";


  console.log(src);

  return (
    <div className="boton-favorito" onClick={toggleFavorito}>
      <img src={src} alt={"favorito"} />
    </div>
  );
};

export default BotonFavorito;
