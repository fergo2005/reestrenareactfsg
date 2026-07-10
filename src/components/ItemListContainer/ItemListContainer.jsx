import { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";
import { getByCategory, getProducts } from "../../services/productsService";
import { useParams } from "react-router-dom";

export const ItemListContainer = () => {


    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    //se agrega para categorias
    const { categoryId } = useParams();

    useEffect(() => {

        setLoading(true);

        /* getProducts() */
        getByCategory(categoryId)
            .then((data) => setProducts(data))
            .catch((err) => console.log("Error al cargar productos:", err))
            .finally(() => {
                setLoading(false);
            });
    }, [categoryId]);
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
