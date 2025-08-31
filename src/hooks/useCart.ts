import { useState } from "react";

const useCart = () =>{
    const [] = useState();
    const MIN_ITEM_QUANTITY = 1;
    const MAX_ITEM_QUANTITY = 5;

    function addToCart(){
        console.log("Item added to cart");
    }
    function removeFromCart(){
        console.log("Item removed from cart");
    }
    function decreaseQuantity(){
        console.log("Item quantity decreased");
    }
    function increaseQuantity(){
        console.log("Item quantity increased");
    }
    function clearCart(){
        console.log("Cart cleared");
    }
    
    return {
        addToCart,
        removeFromCart,
        decreaseQuantity,
        increaseQuantity,
        clearCart
    };
}
export default useCart;