import {CurrencySchema, CryptoCurrencyResponseSchema} from '../schema/crypto-schema'
import {z} from 'zod'

export type Currency = z.infer<typeof CurrencySchema>
export type Cryptocurrency = z.infer<typeof CryptoCurrencyResponseSchema>