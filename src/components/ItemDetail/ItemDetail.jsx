import { Item } from "../Item/Item";

import './ItemDetail.css';


export const ItemDetail = ({ item }) => {
    return (
        <Item {...item}>            
            <button className="btn">Agregar al carrito</button>
        </Item >
    );
};

