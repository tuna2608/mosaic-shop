import Home from './pages/client/Home';
import Login from './pages/client/Login';
import Product from './pages/client/Product';
import ProductList from './pages/client/ProductList';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Register from './pages/client/Register';
import Cart from './pages/client/Cart';
import Error from './pages/client/Error';
import Success from './components/client/Success';
import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {AdminHome} from './pages/admin/adminHome/AdminHome';
function App() {
  // Testing
  const user = useSelector(state => state.user.currentUser);

  const isAdmin = user && user.isAdmin;

  return (
    <>
      <Router>
      <Routes>
        <Route path="/" element={ isAdmin ? <AdminHome /> : <Home />} />
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route
          path="/register"
          element={user ? <Navigate to="/login" /> : <Register />}
        />
        <Route path="/home" element={ isAdmin ? <AdminHome /> : <Home />}  />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/shop/:category?" element={<ProductList />} />

        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<Error />} />
        <Route path="/success" element={<Success />} />

        
      </Routes>
      </Router>
      <ToastContainer />
    </>
    
  );
}

export default App;
