// Import npm packages
import { Routes, Route } from 'react-router-dom';

// Import pages 
import Home from './pages/Home';
import Signup from './pages/auth/Signup';
import Login from './pages/auth/Login';
import Dashboard from './pages/auth/Dashboard';
import ProductsPage from './pages/product/ProductsPage';
import NotFound from './pages/NotFound';

// Import components
import Layout from './components/layout/Layout';
import PrivateRoutes from './components/layout/PrivateRoutes';

function App() {
  return (
    <Routes>
      {/* MAIN LAYOUT WRAPPER & ROUTED CHILDREN */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        {/* AUTH */}
        <Route path="signup" element={<Signup />} />
        <Route path="login" element={<Login />} />

        {/* PRIVATE AUTH ROUTES */}
        <Route element={<PrivateRoutes />}>
          <Route path="dashboard" element={<Dashboard />} />
        </Route>

        {/* PRODUCTS */}
        <Route path='store/products' element={<ProductsPage />} />

        {/* ERROR PAGES */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;