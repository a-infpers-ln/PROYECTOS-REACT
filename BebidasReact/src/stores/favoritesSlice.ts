import { StateCreator } from "zustand";
import { Recipe } from "../types";

export type FavoritesSliceType = {
    favorites: Recipe[]
}

export const createFavoritesSlice : StateCreator<FavoritesSliceType> = () => ({
    favorites: []
})