import {StateCreator} from 'zustand'

export type AISlice = {
    recipe: string
    generateRecipe: (prompt: string) => Promise<void>
}

export const createAISlice : StateCreator<AISlice, [], [], AISlice> = () => ({
    recipe: '',
    generateRecipe: async (prompt) => {
        
    }
})