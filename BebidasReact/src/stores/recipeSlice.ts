import { StateCreator } from "zustand"
import { getCategories } from "../services/RecipeService"
import type { Categories } from "../types";

export type RecipesSliceType = {
    categories: Categories
    fetchCategories: () => Promise<void>
}

export const createRecipesSlice : StateCreator<RecipesSliceType> = (set) => ({
    categories: {
        drinks: []
    },
    fetchCategories: async () => {
        const categories = await getCategories()
        set({
            categories
        })
    }
})