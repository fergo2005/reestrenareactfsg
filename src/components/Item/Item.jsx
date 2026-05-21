import './Item.css';

export const Item = ({ titulo, descripcion, precio, imagenes, children }) => {
    return (
        <article className='card'>
            <img src={imagenes[0]} alt={'Foto de ${titulo}'} />
            <div className='card-content'>
                <h3>{titulo}</h3>
                <p>{descripcion}</p>
                <p>Precio: ${precio}</p>
                {children}
            </div>
        </article>
    );
};
