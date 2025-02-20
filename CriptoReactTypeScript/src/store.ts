
import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { Cryptocurrency } from './types'
import { getCryptos } from './services/CryptoService'

type CrytoStore = {
    cryptocurrencies: Cryptocurrency[]
    fetchCryptos: () => Promise<void>
}

export const useCryptoStore = create<CrytoStore>()(devtools((set) => ({
    cryptocurrencies: [],
    fetchCryptos: async () => {
        const cryptocurrencies = await getCryptos()
        set(() => ({
            cryptocurrencies
        }))
    }
})))