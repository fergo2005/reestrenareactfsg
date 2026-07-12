/* import { useCart } from "../../context/CartContext";
import { Item } from "../Item/Item";

import '../Item/Item.css';
import './ItemDetail.css';

export const ItemDetail = ({ item }) => {
const { addToCart } = useCart(); // Hook para agregar productos al carrito
    return (
        <Item {...item} variant="detail">            
            <button className="btn-add-cart" onClick={() => addToCart(item)}>
                Agregar al carrito
                </button>            
        </Item >
    );
}; */


import { useState } from "react";
import { useCart } from "../../context/CartContext";
import { Item } from "../Item/Item";
import { Modal } from "../Modal/Modal";
import { useNavigate } from "react-router-dom";

import '../Item/Item.css';
import './ItemDetail.css';

export const ItemDetail = ({ item }) => {
    const { addToCart } = useCart();
    const navigate = useNavigate();

    const [openModal, setOpenModal] = useState(false);
    const [modalMessage, setModalMessage] = useState("");

    const handleAdd = () => {
        const result = addToCart(item);

        if (result.status === "exists") {
            setModalMessage("El producto ya está en el carrito");
            setOpenModal(true);

            setTimeout(() => {
                setOpenModal(false);
                navigate("/");
            }, 2000);
            return;
        }

        setModalMessage("Producto agregado al carrito 🛒");
        setOpenModal(true);

        // cierre automático + navegación al home
        setTimeout(() => {
            setOpenModal(false);
            navigate("/");
        }, 2000);




    };

    return (
        <>
            <Item {...item} variant="detail">
                <button className="btn-add-cart" onClick={handleAdd}>
                    Agregar al carrito
                </button>
            </Item>

            <Modal open={openModal} onClose={() => setOpenModal(false)}>
                <h2>{modalMessage}</h2>
            </Modal>
        </>
    );
};
