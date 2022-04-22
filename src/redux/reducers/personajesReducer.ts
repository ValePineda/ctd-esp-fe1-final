import { Reducer } from "@reduxjs/toolkit";
import { PersonajesActions } from "../actions/personajesActions";
import Personaje from "../../types/pesonaje.types";
import PersonajesInfo from "../../types/personajesInfo.types";

export interface StatePersonajes {
  estado: "IDLE" | "LOADING" | "COMPLETED" | "FAILED";
  personajes: Personaje[];
  mensajeError: string | null;
  info: PersonajesInfo;
}

const initialState: StatePersonajes = {
  estado: "IDLE",
  personajes: [],
  mensajeError: null,
  info: {
    next: "",
    prev: "",
  },
};

const personajesReducer: Reducer<StatePersonajes, PersonajesActions> = (
  state = initialState,
  action
): StatePersonajes => {
  switch (action.type) {
    case "BUSCAR_PERSONAJES_PENDING":
      return {
        ...state,
        estado: "LOADING",
        personajes: [],
        mensajeError: null,
      };
    case "BUSCAR_PERSONAJES_SUCCESS":
      return {
        ...state,
        estado: "COMPLETED",
        personajes: action.personajes,
        info: action.info,
      };
    case "BUSCAR_PERSONAJES_FAILED":
      return {
        ...state,
        estado: "FAILED",
        mensajeError: action.error,
      };
    case "LIMPIAR_FILTRO":
      return {
        ...state,
        personajes: [],
      };
    default:
      return state;
  }
};

export default personajesReducer;
