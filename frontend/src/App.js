import {Routes, Route, BrowserRouter as Router} from "react-router-dom"
import AdminLogin from './Components/AdminLogin';
import Dashboard from "../src/Components/Dashboard";
import Home from "../src/userInterface/components/screens/Home";
import ProductPurchaseScreen from "../src/userInterface/components/screens/ProductPurchaseScreen";
import Cart from "../src/userInterface/components/screens/Cart"
import OtpComponent from "../src/userInterface/components/users/OtpComponent"
import MyAccountComponent from "../src/userInterface/components/users/MyAccountComponent"
import ShoppingComponent from "../src/userInterface/components/users/ShoppingComponent"
import ProductFilterScreen from "./userInterface/components/screens/ProductFilterScreen";
import Shopping from "../src/userInterface/components/screens/Shopping"
export default function App() {
  return (
    
      <Router>
        <Routes>
          <Route element={<AdminLogin/>} path="/adminlogin"/> 
          <Route element={<Dashboard/>} path="/dashboard/*"/>
          <Route element={<Home/>} path="/home"/>
          <Route element={<ProductPurchaseScreen/>} path="/propurscr"/>
          <Route element={<Cart/>} path="/cart"/>
          <Route element={<OtpComponent/>} path="/otp"/>
          <Route element={<Shopping/>} path="/useraccount"/>
          <Route element={<ProductFilterScreen/>} path="/profilscr"/>

        </Routes>
      </Router>
  );
}