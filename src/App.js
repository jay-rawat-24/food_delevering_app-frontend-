import {BrowserRouter as Router,Route,Routes} from "react-router-dom"

import Home from "./components/home/Home";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Contact from "./components/contact/Contact";
import Cart from "./components/cart/Cart";
import Shipping from "./components/cart/Shipping";
import ConfirmOrder from "./components/cart/ConfirmOrder";
import PaymentSuccess from "./components/cart/PaymentSuccess.js"
import Login from "./components/login/Login.js"
import Profile from "./components/profile/Profile.js"
import MyOrders from "./components/myorders/MyOrders.js"
import OrderDetails from "./components/myorders/OrderDetails";
import Dashboard from "./components/admin/Dashboard";
import Users from "./components/admin/Users";
import Orders from "./components/admin/Orders";

import "./styles/app.scss"
import "./styles/cart.scss"

import About from "./components/about/About";
import NotFound from "./components/layout/NotFound";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "./redux/actions/user";
import toast, { Toaster } from "react-hot-toast";
import { ProtectedRoute } from "protected-route-react";


function App() {

  const dispatch = useDispatch();
  const { error, message, isAuthenticated, user } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({
        type: "clearError",
      });
    }
    if (message) {
      toast.success(message);
      dispatch({
        type: "clearMessage",
      });
    }
  }, [dispatch, error, message]);

  
  return (
    <Router>
      <Header isAuthenticated={isAuthenticated}/>
    <Routes>
      <Route path="/" element={<Home/>}  />
      <Route path="/contact" element={<Contact/>}  />
      <Route path="/cart" element={<Cart/>}  />
      <Route path="/PaymentSuccess" element={<PaymentSuccess/>}  />

      <Route path="/login"
       element={<ProtectedRoute isAuthenticated={!isAuthenticated} redirect="/me">
        <Login/>
      </ProtectedRoute>}  />

      <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
            <Route path="/me" element={<Profile  /> } />
            <Route path="/shipping" element={<Shipping/>}  />
      <Route path="/ConfirmOrder" element={<ConfirmOrder/>}  />
      <Route path="/myorders" element={<MyOrders/>}  />
      <Route path="/order/:id" element={<OrderDetails/>}  />
      </Route>

        
        <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} adminRoute={true} isAdmin={user && user.role==="admin"} redirectAdmin="/me" />}>
        <Route path="/admin/dashboard" element={<Dashboard/>}  />
      <Route path="/admin/users" element={<Users/>}  />
      <Route path="/admin/orders" element={<Orders/>}  />
        </Route>
      


      <Route path="/about" element={<About/>}  />

      <Route path="*" element={<NotFound/>}  />
    
    </Routes>
    <Footer/>
    <Toaster/>
    </Router>
  );
}

export default App;
