import { createContext, useState } from "react";
import "./ProductFormContainer.css";
import { useNavigate } from "react-router-dom";
import { ProductFormUI } from "./ProductFormUI";
import { validateProduct } from "../../utils/validateProduct";
import { uploadImage } from "../../services/uploadImage";
import { createProduct } from "../../services/productsService";

export const ProductFormContainer = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});
    const [file, setFile] = useState(null);
    const [product, setProduct] = useState({
        titulo: "",
        descripcion: "",
        categoria: "",
        precio: "",
        codigo: "",
    });

    const hadleChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0] || null;
        setFile(file);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        //modificamos los estados del loading mientras se procesa.
        setErrors({});
        setLoading(true);

        //Validar
        const newErrors = validateProduct({ ...product, file });
        if (Object.keys(newErrors).length > 0) {
            setError(newErrors);
            setLoading(false);
            return
        }


        try {

            //Subir la imagen
            const imageUrl = await uploadImage(file);

            //Armar el producto completo
            const productData = {
                ...product, precio: Number(product.precio),
                image: imageUrl,
            };

            //Alta
            const id = await createProduct(productData);

            //Vaciar
            setProduct({ titulo: "", descripcion: "", precio: "", categoria: "", codigo: "" });
            setFile(null);
            navigate(`/success/${id}`, { replace: true });

        } catch (error) {
            setErrors({ general: error.message });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="product-form-container">
            <ProductFormUI
                product={product}
                errors={errors}
                loading={loading}
                onChange={hadleChange}
                onFileChange={handleFileChange}
                onSubmit={handleSubmit}
            />
        </div>
    );
};