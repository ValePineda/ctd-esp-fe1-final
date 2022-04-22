import { Reducer } from "@reduxjs/toolkit";
import Personaje from "../../types/pesonaje.types";
import { FavoritosActions } from "../actions/favoritosActions";

export interface StateFavoritos {
  personajesFavoritos: Personaje[];
}

const initialState: StateFavoritos = {
  personajesFavoritos: [],
};

const favoritosReducer: Reducer<StateFavoritos, FavoritosActions> = (
  state = initialState,
  action
): StateFavoritos => {
  switch (action.type) {
    case "TOGGLE_FAVORITOS":

      let nuevoArray: Personaje[] = state.personajesFavoritos;

      let filtro = state.personajesFavoritos.filter(
        (personaje) => personaje.id === action.personaje.id
      );

      if (filtro.length > 0) {
        action.personaje.esFavorito = false
        nuevoArray = state.personajesFavoritos.filter(
          (personaje) => personaje.id !== action.personaje.id
        );
      } else {
        action.personaje.esFavorito = true
        nuevoArray.push(action.personaje);
      }

      return {
        ...state,
        personajesFavoritos: [...nuevoArray],
      };
    case "LIMPIAR_FAVORITOS":
      return {
        ...state,
        personajesFavoritos: [],
      };

    default:
      return state;
  }
};

export default favoritosReducer;
