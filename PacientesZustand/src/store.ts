import { create } from 'zustand'
import { Patient } from './types'

type PatientState = {
    patients: Patient[]
}

export const usePatientStore = create<PatientState>(() => ({
    patients: [] 
}))