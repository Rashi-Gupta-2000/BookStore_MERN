import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./Components/Login/Login"
import { useSelector } from "react-redux";
import AddUser from "./Components/User/AddUser"
import ListUser from "./Components/User/ListUser"
import EditUser from "./Components/User/EditUser"
import { Routes, Route } from "react-router-dom"
import Header from "./Components/Header/Header"
import Home from "./Components/Home/Home"
import Wishlist from './Components/Home/Wishlist/wishlist';
function App() {
  const { isLogged } = useSelector((state) => state);
  const localData = localStorage.getItem("token");
  return (
    <div className="container">
      {/* {localData ? <Header /> : ""} */}
      {/* <h2>This is Crud App</h2> */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/list" element={<ListUser />} />
        <Route path="/wishlist/:id" element={<Wishlist />} />
        <Route path="/create" element={<AddUser />} />
        <Route path="/edit/:id" element={<EditUser />} />
      </Routes>
    </div>
  );
}

export default App;
