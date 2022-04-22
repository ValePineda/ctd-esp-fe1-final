import { Action, ActionCreator, ThunkAction } from "@reduxjs/toolkit";
import { obtenerPersonajes } from "../../services/obtenerPersonajes.services";
import { IRootState } from "../store/store";
import Personaje from "../../types/pesonaje.types";

interface ToggleFavoritos extends Action {
  type: "TOGGLE_FAVORITOS";
  personaje: Personaje;
}

interface LimpiarFavoritos extends Action {
  type: "LIMPIAR_FAVORITOS";
}

export const toggleFavoritos: ActionCreator<ToggleFavoritos> = (
  personaje: Personaje
) => {
  return {
    type: "TOGGLE_FAVORITOS",
    personaje: personaje,
  };
};

export const limpiarFavoritos: ActionCreator<LimpiarFavoritos> = () => {
  return {
    type: "LIMPIAR_FAVORITOS",
  };
};

export type FavoritosActions =
  | ReturnType<typeof toggleFavoritos>
  | ReturnType<typeof limpiarFavoritos>;
