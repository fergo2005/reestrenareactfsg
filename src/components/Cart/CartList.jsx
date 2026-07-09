/* Lista de items en el carrito - Hace el mapeo */
import { useCart } from "../../context/CartContext";
import { CartItem } from "./CartItem";


//mapear la lista de items del carrito
export const CartList = () => {  

    const { cart} = useCart();

    return (
        <>
            <div className="cart-list">
                {cart.map((item) => (
                    <CartItem key={item.id} item={item}/>
                ))}
            </div>
        </>
    );
};


/* import './CartList.css'; */

/* 



                <h2>Items en el carrito</h2>
                <div className="cart-list-items">
                    <CartItem />
                </div> 
                
                
cart-items-container     es       cart-list              
                
                */