import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SideBar from "./components/sidebar/SideBar";
import TopBar from "./components/topbar/TopBar";
import Home from "./pages/home/Home";
import UserList from "./pages/userlist/UserList";


function App() {
  return (
    <BrowserRouter>
      <TopBar/>
      <div className="container">
      <SideBar/>
        <Routes>
          <Route path='' element={<Home/>} />
          <Route path="/users" element={<UserList/>} /> 
        </Routes>
      </div>
    </BrowserRouter>
      
  );
}

export default App;
