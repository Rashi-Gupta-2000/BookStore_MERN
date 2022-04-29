import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./Components/Login/Login"
import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom"
import Content from './Components/Content/Content';
import SignUp from './Components/Login/SignUp';
import Home from './Components/User/Home';
import Wishlist from './Components/User/Wishlist';
import Welcome from './Components/Welcome/Welcome';
import LoginAdmin from './Components/Admin/LoginAdmin';
import HomeAdmin from './Components/Admin/HomeAdmin';
import AddBook from './Components/Admin/AddBook'
function App() {
  const { isLogged } = useSelector((state) => state);
  const localData = localStorage.getItem("token");
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/book/:id/content/" element={<Content />} />
        <Route path='/wishlist' element={<Wishlist />} />
        <Route path='/' element={<Welcome />} />
        <Route path="/homeAdmin" element={<HomeAdmin />} />
        <Route path="/loginadmin" element={<LoginAdmin />} />
        <Route path='/addbook' element={<AddBook />} />
        {/* <Route path="/" element={<Login />} />
        <Route path="/list" element={<ListUser />} />
        <Route path="/create" element={<AddUser />} />
        <Route path="/edit/:id" element={<EditUser />} /> */}
      </Routes>
    </div>
  );
}

export default App;
