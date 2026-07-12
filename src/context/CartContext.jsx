import { createContext, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";


/* -------------------------------------------- */
/* CREAMOS CONTEXTOS PARA EL CARRITO DE COMPRAS */
/* -------------------------------------------- */

const CartContext = createContext();

/* CUSTOM HOOK PARA EL CARRITO DE COMPRAS */
export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart debe estar dentro de un CartProvider");
    }
    return context;
};

/* ----------------------------------- */
/* PROVIDER PARA EL CARRITO DE COMPRAS */
/* ----------------------------------- */

export const CartProvider = ({ children }) => {
    const navigate = useNavigate(); // Hook de React Router para redirigir al usuario después del checkout

    const [cart, setCart] = useState([]); //el carrito es un array de productos vacío al inicio

    const isInCart = (productId) => {  // evalua si un producto ya está en el carrito, recibe el id del producto y devuelve true o false
        const inCart = cart.some((item) => item.id === productId);
        return inCart;
    }

    /* PARA LOS QUE DECIDAN NO USAR EL CONTADOR QUANTITY EN LOS PRODUCTOS */
    /* AGREGAR AL CARRITO */

    const addToCart = (product) => {    //  addItem = addToCart
        /* if (isInCart(product.id)) { // Si el producto ya está en el carrito, no se agrega y se muestra un mensaje de alerta
            alert("El producto ya está en el carrito");
            navigate("/"); // Redirige al usuario a la página de inicio
            return;
        } */

        if (isInCart(product.id)) {
            return { status: "exists" };
        }


        setCart((prevCart) => [...prevCart, product]);
        
        return { status: "added" };
        
        /* console.log("cart en provider:", cart); */
        /* alert("Producto agregado al carrito 🛒"); */
        /* navigate("/"); */ // Redirige al usuario a la página de inicio después del checkout


    };

    /* ELIMINAR DEL CARRITO */
    const removeFromCart = (productId) => {                         //  removeItem = removeFromCart
        const updatedCart = cart.filter((item) => item.id !== productId);
        setCart(updatedCart);
        alert("Producto eliminado del carrito 🗑️");
    };

    /* VACIAR EL CARRITO */
    const clearCart = () => {
        setCart([]);
    };

    /* console.log("cart en provider:", cart); */

    /* TOTAL EN EL CARRITO  para este caso sin quantity */
    const totalInCart = () => {        // getTotalItems = totalInCart
        return cart.length;
    };

    /* TOTAL A PAGAR */
    const totalPrice = () => {       //getCarTotal = totalPrice
        return cart.reduce((total, item) => total + item.precio, 0);
        /* return cart.reduce((total, item) => total + item.price * item.quantity, 0); */
    };

    /* CHECKOUT */
    const checkout = () => {       // Lógica para el proceso de checkout
        alert("Gracias por su compra! 🛒");
        clearCart();
        navigate("/"); // Redirige al usuario a la página de inicio después del checkout
    }


    const values = {
        cart,
        addToCart,
        removeFromCart,
        totalInCart,
        totalPrice,
        clearCart,
        checkout,
    };

    return (     // const values = { cart, addToCart, removeFromCart }; //el value es un objeto que contiene el estado del carrito y las funciones para agregar y eliminar productos
        //el value es un objeto que contiene el estado del carrito y las funciones para agregar y eliminar productos
        <CartContext.Provider value={values}>
            {children}
        </CartContext.Provider>
    );
};



/* addItem es addToCart
removeItem es removeFromCart
getTotalItems = totalInCart
getCartTotal = totalPrice
 */