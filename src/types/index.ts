export type Guitar = {
    id: number
    name:string
    image: string
    description: string
    price:number
}

// Heredamos el type guitar
export  type CartItem = Guitar & {
    quantity: number
}