
import { create } from 'zustand'
import axios from 'axios'
import {CryptoCurrenciesResponseSchema} from './schema/crypto-schema'

async function getCryptos() {
    const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD'
    const {data: {data}} = await axios(url)
    const result = CryptoCurrenciesResponseSchema.safeParse(data)
}

export const useCryptoStore = create(() => ({
    fetchCryptos: () => {
        getCryptos();

    }
}))