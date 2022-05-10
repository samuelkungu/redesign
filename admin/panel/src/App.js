import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SideBar from "./components/sidebar/SideBar";
import TopBar from "./components/topbar/TopBar";
import Home from "./pages/home/Home";
import UserList from "./pages/userlist/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";


function App() {
  return (
    <BrowserRouter>
      <TopBar/>
      <div className="container">
      <SideBar/>
        <Routes>
          <Route path='' element={<Home/>} />
          <Route path="/users" element={<UserList/>} /> 
          <Route path="/user/:userId" element={<User/>} /> 
          <Route path="/newUser" element={<NewUser/>} /> 
          <Route path="/products" element={<ProductList/>} /> 
        </Routes>
      </div>
    </BrowserRouter>
      
  );
}

export default App;
