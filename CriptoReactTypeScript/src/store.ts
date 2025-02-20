
import { create } from 'zustand'
import axios from 'axios'
import {CryptoCurrenciesResponseSchema} from './schema/crypto-schema'
import { Cryptocurrency } from './types'

type CrytoStore = {
    cryptocurrencies: Cryptocurrency[]
    fetchCryptos: () => Promise<void>
}

async function getCryptos() {
    const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD'
    const {data: {data}} = await axios(url)
    const result = CryptoCurrenciesResponseSchema.safeParse(data)

    if(result.success) {
        return result.data
    }
}

export const useCryptoStore = create<CrytoStore>((set) => ({
    cryptocurrencies: [],
    fetchCryptos: async () => {
        const cryptocurrencies = await getCryptos()
        set(() => ({
            cryptocurrencies
        }))
    }
}))