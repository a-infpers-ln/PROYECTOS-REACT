import { useState } from "react"
import type { OrderItem } from "../types"

export default function useOrder() {
    const [order, setOrder] = useState<OrderItem[]>([])
    const addItem = () => {
        console.log("Agregando...")
    }

    return {
        addItem
    }
}