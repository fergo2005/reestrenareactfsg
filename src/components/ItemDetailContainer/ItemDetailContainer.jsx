import { useState, useEffect } from 'react';
import { data, useParams } from 'react-router-dom';
import { ItemDetail } from '../ItemDetail/ItemDetail';
import './ItemDetailContainer.css';
import { getProductById } from '../../services/productsService';

export const ItemDetailContainer = () => {
    const { id } = useParams();

    const [itemDetail, setItemDetail] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getProductById(id)
            .then((data) => setItemDetail(data))
            .catch((err) => console.log(err))
            .finally(() => setLoading(false));
    }, []);

    if (loading) return <p>Cargando...</p>;
    if (!itemDetail) return <p>Producto no encontrado</p>;

    return (
        <section className='item-detail-container'>
            <h1 className='item-detail-title'>Detalle del Producto </h1>
            <div>
                <ItemDetail item={itemDetail} />
            </div>
        </section>
    );
};
