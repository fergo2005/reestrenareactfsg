import { Link } from "react-router-dom";
/* import { Count } from "../Count/Count"; */
import { Item } from "../Item/Item";
import './ItemList.css';

export const ItemList = ({ products }) => {
    if (!products.length) {
        return <p>No hay productos disponibles</p>;
        console.log("No hay productos disponibles");
    }
    return (
        <div className='products-container'>
            {products.map((product) => (
                <Link to={`/product/${product.id}`} key={product.id} >
                    <Item {...product} />
                </Link>
            ))}
        </div>
    );
};

