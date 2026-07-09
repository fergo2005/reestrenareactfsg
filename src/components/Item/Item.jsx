import './Item.css';

export const Item = ({ titulo, descripcion, precio, imagenes=[], children }) => {
    // Aseguramos que siempre exista una imagen
    const imagenPrincipal = imagenes[0] || '/placeholder.jpg'; // Imagen por defecto si no hay imágenes
    return (
        <article className='card'>
            <img src={imagenPrincipal} alt={'Foto de ${titulo}'} />
            <div className='card-content'>
                <h3>{titulo}</h3>
                <p>{descripcion}</p>
                <p>Precio: ${precio}</p>
                {children}
            </div>
        </article>
    );
};

