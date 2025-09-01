import { useMemo, useEffect, useState } from "react";
import { db } from "../services/db";
import type { Guitar, CartItem } from "../types";

const useCart = () =>{
    const initialCart = () : CartItem[] => {
        const localStorageCart = localStorage.getItem("cart");
        return localStorageCart ? JSON.parse(localStorageCart) : [];
    }
    const [data] = useState(db);
    const [cart , setCart] = useState(initialCart);

    const MIN_ITEM = 1;
    const MAX_ITEM = 5;

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    function addToCart(item: Guitar){
        const itemExists = cart.findIndex(guitar => guitar.id === item.id);
        if(itemExists >= 0){
            if(cart[itemExists].quantity >= MAX_ITEM) return;
            const updateCart = [...cart];
            updateCart[itemExists].quantity ++;
            setCart(updateCart);
        } else{
            const newItem: CartItem = {...item ,quantity: 1}
            setCart([...cart, newItem]);
        }
    }

    function removeFromCart(id: Guitar["id"]){
        setCart(prevCart => prevCart.filter(guitar => guitar.id !== id));
    }

    function decreaseQuantity(id: Guitar["id"]){
        const updateCart = cart.map(item => {
            if(item.id===id && item.quantity > MIN_ITEM){
                return{
                    ...item,
                    quantity: item.quantity -1
                }
            }
            return item;
        })
        setCart(updateCart);
    }
    function increaseQuantity(id: Guitar["id"]){
        const updateCart = cart.map(item => {
            if(item.id === id && item.quantity < MAX_ITEM){
                return{
                    ...item,
                    quantity: item.quantity +1
                }
            }
            return item;
        })
        setCart(updateCart)
       
    }
    function clearCart(){
        setCart([]);
    }

    const isEmpty = useMemo(() => cart.length === 0, [cart]);
    const cartTotal = useMemo(() => cart.reduce((total,item) => total + (item.price * item.quantity),0),[cart]);
    
    return {
        data,
        cart,
        addToCart,
        removeFromCart,
        decreaseQuantity,
        increaseQuantity,
        clearCart,
        isEmpty,
        cartTotal
    };
}
export default useCart;