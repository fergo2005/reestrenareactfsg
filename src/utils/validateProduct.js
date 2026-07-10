export const validateProduct = (product) => {
    const errors = {};

    if (!product.titulo.trim()) {
        errors.titulo = "El nombre es obligatorio";
    }

    if(!product.descripcion.trim()) {
        errors.descripcion = "la descripción es obligatoria";
    }

    if(!product.precio || product.precio <= 0) {
        errors.precio = "El precio debe ser mayor que 0";
    }

    if (!product.categoria.trim()) {
        errors.categoria = "La categoria es obligatoria";
    }

    if (!product.codigo.trim()) {
        errors.codigo = "debe contener un codigo único";
    }

    if(!product.file) {
        errors.file = "Debes seleccionar una imagen";
    }

    return errors;
}