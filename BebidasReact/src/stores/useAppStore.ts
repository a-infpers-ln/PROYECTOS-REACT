import {create} from 'zustand'
import { createRecipesSlice, RecipesSliceType } from './recipeSlice'

export const useAppStore = create<RecipesSliceType>((...a) => ({
    ...createRecipesSlice(...a)
}))