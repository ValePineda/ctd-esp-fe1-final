import PersonajesInfo from "../types/personajesInfo.types";
import Personaje from "../types/pesonaje.types";

/**
 * Servicio para traer un array de personajes que corresponden al numero de pagina que es pasado como parametro
 *
 * @param {number} pagina Numero de pagina que se desea consultar
 * @param {string} nombre Nombre del personaje que se desea buscar
 * @returns  Array de personajes que corresponden a la pagina o nombre ingresados como parametro
 */
export const obtenerPersonajes = async (
  nombre?: string,
  pagina?: number
): Promise<{ info: PersonajesInfo; results: Personaje[] }> => {
  let params = "?";

  params += `name=${nombre}&page=${pagina}`;

  return await fetch(
    `https://rickandmortyapi.com/api/character/${params}`
  ).then((data) => data.json());
};
