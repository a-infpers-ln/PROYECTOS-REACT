
import { create } from 'zustand'
import axios from 'axios'

async function getCryptos() {
    const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD'
    const {data: {data}} = await axios(url)
}

export const useCryptoStore = create(() => ({
    fetchCryptos: () => {
        getCryptos();

    }
}))