/* Resumen del carrito - Muestra el total y los items y botones */
import { useCart } from "../../context/CartContext";



export const CartSummary = () => {
    
    const { totalPrice, clearCart, checkout } = useCart(); //getCartQuantity

    console.log("totalPrice en CartSummary:", totalPrice()); //total a pagar

    const total = totalPrice(); //total a pagar

    return (
        <>
            <div className="cart-summary">
                <h2 className="cart-title">Resumen del carrito</h2>
                <h3>Total a pagar: 👉     $ {totalPrice().toLocaleString("es-AR")}</h3>
                <div className="cart-summary-buttons">
                    <button className="summary-btn-secondary" onClick={clearCart}>
                        Vaciar carrito
                    </button>

                    <button className="summary-btn-primary" onClick={checkout}>
                        Finalizar compra
                    </button>
                </div>

            </div>

        </>
    );
};

/* 
btn bg-success primary      es     btn-primary
*/
/* <p>Total a Pagar: 👉 {total}</p> */



/* <div className="cart-summary">
    <h2>Resumen del carrito</h2>
    <p>Total de items: 0</p>
    <p>Total a pagar: $0</p>
    <button className="btn-primary">Finalizar compra</button>
</div> 


<p>Total a pagar: 👉  ${totalPrice().toFixed(2)}</p>*/