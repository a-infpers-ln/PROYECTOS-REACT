export type Guitar = {
    id: number
    name: string
    image: string
    description: string
    price: number
}

//Add attributes
export type CartItem = Pick<Guitar, 'id' | 'name' | 'price' > &{
    quantity: number
}

//Remove  attributes 
export type CartItem2 = Omit<Guitar, 'id' | 'name' | 'price' > &{
    quantity: number
}

