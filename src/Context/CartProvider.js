import { createContext, useState } from "react";
import swal from "sweetalert"

export const cartContext = createContext ([]);

const CartProvider = ({children}) => {
    const [cart, setCart]  = useState([]);

    const addToCart = (product, quantity) => {
        if(isInCart(product.id)){
            swal({
                title: "Este producto ya se encuentra en el carrito",
                icon: "info",
                button: "Aceptar"
            })
        }else {
            setCart([...cart, {...product, quantity}])
        }
    };

    // EVITA QUE EL PRODUCTO SE GUARDE AGREGUE DOS VECES
    const isInCart = (id) => {
        return cart.some((product) => product.id === id)
    };

    // FUNCION PARA VACIAR CARRITO
    const clear = () => {
        setCart ([])
    };

    return (
            <cartContext.Provider value={{cart, addToCart, clear}}>
                {children}
            </cartContext.Provider>
    )
};

export default CartProvider;