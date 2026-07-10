import {
    collection,
    getDocs,
    addDoc,
    getDoc,
    doc,
    query,
    where,
} from "firebase/firestore";

import { db } from "../firebase/config";


//Todas las funciones que tengan que ver con productos van a estar en este archivo
// la definimos una vez y la exportamos para poder usarla en cualquier parte de la app (la hacemos global)

//Creamos una función para obtener todos los productos de la base de datos
const productsRef = collection(db, "products");

/* --------------- */
/* TRAER PRODUCTOS */
/* --------------- */

/* get de todos los productos */
export const getProducts = async () => {
    try {
        const snapshot = await getDocs(productsRef);
        const productsList = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

        return productsList;
    } catch (error) {
        console.error("Error al obtener los productos:", error);
        return [];
    }
};


/* --------------------- */
/* TRAER PRODUCTO POR ID */
/* --------------------- */

//funcion que solo pide un dato
export const getProductById = async (id) => {
    try {
        //creamos la referencia al documento
        const productRef = doc(db, "products", id);

        //traemos el documento
        const snapshot = await getDoc(productRef);

        //verificamos si existe
        if( snapshot.exists()) {
            const product = {id: snapshot.id, ...snapshot.data( )};
            console.log("Doc:", product);
            return product;            
            } else {
                return null;
            }
        } catch (error) {
        console.error("Error al obtener producto por ID:", error);
        return [];
    }
};


/* --------------------------  */
/* SI FILTRAMOS POR CATEGORIA  */
/* --------------------------  */

export const getByCategory = async (categoryId) => {
    try {
        let queryRef;

        if (categoryId) {
            queryRef = query(productsRef, where("categoria", "==", categoryId));
        } else {
            queryRef = productsRef;
        }

        //traer los documentos
        const snapshot = await getDocs(queryRef);

        //mapeo de datos para formateo
        const productsFormat = snapshot.docs.map((doc) => {
            return {id: doc.id, ...doc.data()};
        });
        return productsFormat;
    } catch (error) {
        console.error("Error al filtrar productos",error);
        return null;
    }
};


/* ----------------------------  */
/*        ALTA   DE  PRODUCTO    */
/* ----------------------------  */
export const createProduct = async (productData) => {
    try {
        const docRef = await addDoc(productsRef, productData);

        return docRef.id

    } catch (error) {
        console.error("Error al crear producto: ", error);
        throw error;
    }
};

/* productsForm aqui es productsList */
