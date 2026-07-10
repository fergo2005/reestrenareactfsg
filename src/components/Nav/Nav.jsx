
import { Link } from 'react-router-dom';
import { useCart } from "../../context/CartContext";

import './Nav.css';

export const Nav = () => {
    const { totalInCart } = useCart(); // Hook para obtener el total de productos en el carrito

    const totalItems = totalInCart(); // Obtener el total de productos en el carrito
    return (
        <nav className="nav">
            <ul className="nav-list">

                <li><Link to={"/"}>Home</Link></li>
                
                <li><Link to={"/category/Damas"}>Damas</Link></li>
                <li><Link to={"/category/Niños"}>Niños</Link></li>
                <li><Link to={"/category/Caballeros"}>Caballeros</Link></li>

                <li><Link to={"/carrito"}>
                    Carrito {totalItems > 0 && <span className='incart'>
                        {totalItems}</span>}
                    </Link></li>
            </ul>
        </nav>
    );
};

