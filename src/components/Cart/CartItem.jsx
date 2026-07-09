/* Item individual en el carrito */
import { useCart } from "../../context/CartContext";
import { Item } from "../Item/Item";



export const CartItem = ({ item }) => {
    const { removeFromCart } = useCart();    
    return (
        <Item {...item}>
            <button className="btn-secondary" onClick={() => removeFromCart(item.id)}> 
                Eliminar del carrito
            </button> 
        </Item>  
    );
};


/* import './CartItem.css'; 

btn bg-delete primary      es     btn-remove
*/