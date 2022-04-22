import { Action, ActionCreator, ThunkAction } from "@reduxjs/toolkit";
import { obtenerPersonajes } from "../../services/obtenerPersonajes.services";
import { IRootState, useSelector } from "../store/store";
import Personaje from "../../types/pesonaje.types";
import PersonajesInfo from "../../types/personajesInfo.types";

interface BuscarPersonajesPendingAction extends Action {
  type: "BUSCAR_PERSONAJES_PENDING";
  nombre: string;
  pagina: number;
}

interface BuscarPersonajesSuccessAction extends Action {
  type: "BUSCAR_PERSONAJES_SUCCESS";
  personajes: Personaje[];
  info: PersonajesInfo;
}

interface BuscarPersonajesFailedAction extends Action {
  type: "BUSCAR_PERSONAJES_FAILED";
  error: string;
}

interface LimpiarFiltro extends Action {
  type: "LIMPIAR_FILTRO";
}

const buscarPersonajesPending: ActionCreator<BuscarPersonajesPendingAction> = (
  nombre: string,
  pagina: number
) => {
  return {
    type: "BUSCAR_PERSONAJES_PENDING",
    nombre: nombre,
    pagina: pagina,
  };
};

const buscarPersonajesSuccess: ActionCreator<BuscarPersonajesSuccessAction> = (
  personajes: Personaje[],
  info: PersonajesInfo
) => {
  return {
    type: "BUSCAR_PERSONAJES_SUCCESS",
    personajes: personajes,
    info: info,
  };
};

const buscarPersonajesFailed: ActionCreator<BuscarPersonajesFailedAction> = (
  error: string
) => {
  return {
    type: "BUSCAR_PERSONAJES_FAILED",
    error: error,
  };
};

export const limpiarFiltro: ActionCreator<LimpiarFiltro> = () => {
  return {
    type: "LIMPIAR_FILTRO",
  };
};

export type PersonajesActions =
  | ReturnType<typeof buscarPersonajesPending>
  | ReturnType<typeof buscarPersonajesSuccess>
  | ReturnType<typeof limpiarFiltro>
  | ReturnType<typeof buscarPersonajesFailed>;

interface BuscarPersonajesThunkAction
  extends ThunkAction<void, IRootState, unknown, PersonajesActions> {}

export const buscarPersonajesThunk = (
  nombre?: string,
  pagina?: number
): BuscarPersonajesThunkAction => {
  return async (dispatch) => {
    dispatch(buscarPersonajesPending(nombre, pagina));

    try {
      const { results, info } = await obtenerPersonajes(nombre, pagina);
      // results.map((element) => (element.esFavorito = false));
      // console.log(results, "results");

      dispatch(buscarPersonajesSuccess(results, info));
    } catch (error) {
      dispatch(buscarPersonajesFailed(error));
    }
  };
};

