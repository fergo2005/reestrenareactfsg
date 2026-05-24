
import { Link } from 'react-router-dom';
import './Nav.css';

export const Nav = () => {
    return (
        <nav className="nav">
            <ul className="nav-list">
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/carrito"}>Carrito</Link></li>

            </ul>
        </nav>
    );
};









//<li><a href="#home">Home</a></li>
//<li><a href="#carre">Carrito</a></li>

// Esto se usará solamente cuando se tenga el archivo Nav.module.css, el cual es un módulo de CSS que permite usar estilos de manera local en el componente Nav. Al importar el módulo, se puede acceder a las clases definidas en él a través del objeto styles. En este caso, se está utilizando la clase navList definida en Nav.module.css para aplicar estilos a la lista de navegación.
//import styles from './Nav.module.css'; 
//<ul className={styles.navList}></ul>
// En este caso queda comentado porque no se tiene el archivo Nav.module.css, pero si se tuviera, se podría usar la clase navList definida en ese archivo para aplicar estilos a la lista de navegación. Al usar className={styles.navList}, se está accediendo a la clase navList del módulo de CSS y aplicándola al elemento ul. Esto permite que los estilos definidos en Nav.module.css se apliquen solo a este componente Nav, evitando conflictos con otros estilos en la aplicación.
