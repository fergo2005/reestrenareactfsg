import { Form } from "react-router-dom";
import "./ProductFormUI.css";
export const ProductFormUI = ({
    product,
    errors,
    loading,
    onChange,
    onFileChange,
    onSubmit,
}) => {
    return (
        <section>
            <form className="product-form" onSubmit={onSubmit}>
                <h2>Agregar nuevo producto</h2>

                <div>
                    <label>Código:</label>
                    <input
                        type= "number"
                        name="codigo"
                        value={product.codigo}
                        onChange={onChange}
                        required
                    />
                    {errors.codigo && <p className="error">{errors.codigo}</p>}
                </div>

                <div>
                    <label>Titulo:</label>
                    <input
                        type= "text"
                        name="titulo"
                        value={product.titulo}
                        onChange={onChange}
                        required
                    />
                    {errors.titulo && <p className="error">{errors.titulo}</p>}                    
                </div>

                <div>
                    <label>Descripción:</label>
                    <input
                        type= "text"
                        name="descripcion"
                        value={product.descripcion}
                        onChange={onChange}
                        required
                    />
                    {errors.descripcion && <p className="error">{errors.descripcion}</p>}
                </div>

                <div>
                    <label>Categoria:</label>
                    <input
                        type= "text"
                        name="categoria"
                        value={product.categoria}
                        onChange={onChange}
                        required
                    />
                    {errors.categoria && <p className="error">{errors.categoria}</p>}
                </div>

                <div>
                    <label>Precio:</label>
                    <input
                        type= "number"
                        name="precio"
                        value={product.precio}
                        onChange={onChange}
                        min="0"
                        required
                    />
                    {errors.precio && <p className="error">{errors.precio}</p>}
                </div>

                <div>
                    <label>Imagen:</label>
                    <input
                        type= "file"
                        accept="image/*"
                        onChange={onFileChange}                        
                        required
                    />
                    {errors.file && <p className="error">{errors.file}</p>}
                </div>

                <button className="btn" type="submit" disabled={loading}>
                    {loading ? "Guardando..." : "Guardar"}                    
                </button>

                {errors.general && <p className="error">{errors.general}</p>}
            </form>
        </section>
    );
};