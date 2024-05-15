import Home from './pages/client/Home';
import Login from './pages/common/Login';
import Product from './pages/client/Product';
import ProductList from './pages/client/ProductList';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Register from './pages/common/Register';
import Cart from './pages/client/Cart';
import Error from './pages/client/Error';
import Success from './components/client/Success';
import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {AdminHome} from './pages/admin/adminhome/AdminHome';
import UserList from './pages/admin/userlist/UserList';
import DetailUser from './pages/admin/detailuser/DetailUser';
import NewUser from './pages/admin/newuser/NewUser';
import AdminProductList from './pages/admin/adminproductlist/AdminProductList';
import AdminProductDetail from './pages/admin/adminproductdetail/AdminProductDetail';
import NewProduct from './pages/admin/newproduct/NewProduct';
function App() {
  // Testing
  const user = useSelector(state => state.user.currentUser);

  const isAdmin = user && user.isAdmin;

  return (
    <>
      <Router>
      <Routes>
        <Route exact path="/" element={ isAdmin ? <AdminHome /> : <Home />} />
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route
          path="/register"
          element={user ? <Navigate to="/login" /> : <Register />}
        />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/shop/:category?" element={<ProductList />} />
        <Route path="/cart" element={user ? <Cart /> : <Login />} />
          
          {/* Admin Routes */}
          
        <Route path="/home" element={isAdmin ? <AdminHome /> : <Home />} />
          <Route path="/userList" element={isAdmin ? <UserList /> : <Login />} />          
        <Route path="/user/:userId" element={isAdmin ? <DetailUser /> : <Login />} />
        <Route path="/newUser" element={isAdmin ? <NewUser /> : <Login />} />
        <Route path="/adminProductList" element={isAdmin ? <AdminProductList /> : <Login />} />
        <Route path="/adminProduct/:productId" element={isAdmin ? <AdminProductDetail /> : <Login />} />
        <Route path="/newProduct" element={isAdmin ? <NewProduct /> : <Login />} />
          
          {/* End Admin Routes */}
          
        <Route path="*" element={<Error />} />
        <Route path="/success" element={<Success />} />

        
      </Routes>
      </Router>
      <ToastContainer />
    </>
    
  );
}

export default App;
