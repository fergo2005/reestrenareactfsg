/* Componente principal del carrito - Donde decido que se muestra */
import { useCart } from "../../context/CartContext";
import { CartList } from "./CartList";
import { CartSummary } from "./CartSummary";
import { Link } from "react-router-dom";
import './Cart.css';




export const CartView = () => {

    /* que necesito traer */
    const { cart } = useCart();


    return (
        <section className="cart-container">
            <div>
                <h1 className="cart-title">Carrito de compras 🛒</h1>
            </div>

            <div className="cart-list-container">
                {cart.length ? (
                    <>
                        <div className="">
                            <CartList />
                        </div>
                        
                        <CartSummary />
                    </>
                ) : (
                    <>
                        <p className="cart-empty">Tu carrito está vacío </p>
                        <Link to="/" className="cart-empty-link">
                            Ir a la tienda
                        </Link>
                    </>
                )
                }
            </div>


        </section>
    );
};


/* btn primary bg-primary       es       cart-empty-link */