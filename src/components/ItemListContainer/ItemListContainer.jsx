import { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";

export const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    
useEffect(() => {
    fetch('/data/products.json')
        .then((res) => res.json())
        .then((data) => setProducts(data))
        .catch((err) => console.log("Error al cargar productos:", err))
        .finally(() => {
            setLoading(false);
        });
    }, [] );

    /* console.log(products); */

    if (loading) {
        return <p>Cargando productos...</p>;
    }

    return (
        <section>
            <ItemList products={products} />
        </section>
    );
};


/* <h2>Componente ItemListContainer</h2>
            <p>Este componente a futuro tendrá logica y conexion a API </p>
            
            <button onClick={getProducts}>Cargar Productos</button>
            <button onClick={clearProducts}>Limpiar Productos</button> */


//Solo ejemplo practico: no es la forma correcta de cargar productos, se hara con API en el futuro
    /* const arrayProducts = [
        { id: 0, name: "Producto 1", description: "Descripción del producto 1", price: 100 },
        { id: 1, name: "Producto 2", description: "Descripción del producto 2", price: 200 },
        { id: 2, name: "Producto 3", description: "Descripción del producto 3", price: 300 },
    ]; */

    //Simulacion provisoria de traer productos, se hara con API en el futuro
    /* const getProducts = () => {
        setProducts(arrayProducts);
    } */

    /* const clearProducts = () => {
        setProducts([]);
    }; */