import {create} from 'zustand'
import { createRecipesSlice } from './recipeSlice'

export const useAppStore = create((...a) => ({
    ...createRecipesSlice(...a)
}))