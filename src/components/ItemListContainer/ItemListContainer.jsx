import { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";
import { getByCategory, getProducts } from "../../services/productsService";
import { useParams } from "react-router-dom";

export const ItemListContainer = () => {

    //se agrega para categorias paa filtrar
    const { categoryId } = useParams();    
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);

        /* getProducts() */
        getByCategory(categoryId)
            .then((data) => setProducts(data))
            .catch((err) => console.log("Error al cargar productos:", err))
            .finally(() => {
                setLoading(false);
            });
111    }, [categoryId]);
    // No olvidar el category si se usa filtro por categoria.


    if (loading) {
        return <p>Cargando productos...</p>;
    }

    return (
        <section>
            <ItemList products={products} />
        </section>
    );
};