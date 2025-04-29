import {StateCreator} from 'zustand'

export type AISlice = {
    recipe: string
}

export const createAISlice : StateCreator<AISlice, [], [], AISlice> = () => ({
    recipe: ''
})