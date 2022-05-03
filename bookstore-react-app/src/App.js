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
import Filter from './Components/Filter/Filter'
import GetStarted from './Components/Welcome/GetStarted'
function App() {
  const { isLogged } = useSelector((state) => state);
  const localData = localStorage.getItem("token");

  return (
    <div>
      <Routes>
        <Route path="/book/gethome" element={<GetStarted />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/book/:id/content/" element={<Content />} />
        <Route path='/wishlist' element={<Wishlist />} />
        <Route path='/' element={<Welcome />} />
        <Route path="/homeAdmin" element={<HomeAdmin />} />
        <Route path="/loginadmin" element={<LoginAdmin />} />
        <Route path='/addbook' element={<AddBook />} />
        {/* <Route path='/filter' element={<Filter />} /> */}
      </Routes>
    </div>
  );
}


export default App;
