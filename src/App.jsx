import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import { CartView } from './components/Cart/CartView';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { ProductFormContainer } from './components/adminComponents/ProductFormContainer';
/* import { CartProvider } from './context/CartContext' */
import { ProductSuccess } from './components/adminComponents/ProductSuccess';
import { PublicLayout } from './layouts/PublicLayout';
import { AdminLayout } from './layouts/AdminLayout';
import { Dashboard } from './components/adminComponents/Dashboard/Dashboard';
import { ProtectedRoute } from './components/ProtectedRoute/ProtectedRoute';

/* import { FormContainer } from './components/Form/FormContainer' */
import { Login } from './components/Login/Login';

function App() {
  return (
    <>
      <Routes>
        {/* ======== RUTAS PUBLICAS ========= */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/product/:id" element={<ItemDetailContainer />} />
          <Route path="/carrito" element={<CartView />} />
        </Route>        
        <Route path='/admin/login' element={<Login />}  />

        {/* ======== ADMIN ========= */}
        <Route
          path='/admin'
          element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Navigate to={"dashboard"} />} />
          <Route path='dashboard' element={<Dashboard />} />
          <Route path="products/new" element={<ProductFormContainer />} />
          <Route path="products/success/:id" element={<ProductSuccess />} />
        </Route>
      </Routes>

    </>
  );
};

export default App;


/* <FormContainer /> */
/* Con ruta para filtrar por categoría */

