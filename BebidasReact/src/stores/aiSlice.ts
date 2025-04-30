import {StateCreator} from 'zustand'
import AIService from '../services/AIService'

export type AISlice = {
    recipe: string
    generateRecipe: (prompt: string) => Promise<void>
}

export const createAISlice : StateCreator<AISlice, [], [], AISlice> = () => ({
    recipe: '',
    generateRecipe: async (prompt) => {
        const data = await AIService.generateRecipe(prompt)
    }
})