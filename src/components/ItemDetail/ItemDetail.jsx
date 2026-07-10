import { useCart } from "../../context/CartContext";
import { Item } from "../Item/Item";


import './ItemDetail.css';

export const ItemDetail = ({ item }) => {
const { addToCart } = useCart(); // Hook para agregar productos al carrito
    return (
        <Item className="item-2" {...item}>            
            <button className="btn-primary" onClick={() => addToCart(item)}>    Agregar al carrito</button>
        </Item >
    );
};

