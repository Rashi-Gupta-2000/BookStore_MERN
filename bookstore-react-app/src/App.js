import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./Components/Login/Login"
import { useSelector } from "react-redux";
// import AddUser from "./Components/User/AddUser"
// import ListUser from "./Components/User/ListUser"
// import EditUser from "./Components/User/EditUser"
import { Routes, Route } from "react-router-dom"
import Header from "./Components/Header/Header"
import Content from './Components/Content/Content';
import SignUp from './Components/Login/SignUp';
import Home from './Components/User/Home';

function App() {
  const { isLogged } = useSelector((state) => state);
  const localData = localStorage.getItem("token");
  return (
    <div className="container">
      {/* {localData ? <Header /> : ""}
      <h2>This is Crud App</h2> */}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/book/:id/content/" element={<Content />} />
        
        {/* <Route path="/" element={<Login />} />
        <Route path="/list" element={<ListUser />} />
        <Route path="/create" element={<AddUser />} />
        <Route path="/edit/:id" element={<EditUser />} /> */}
      </Routes>
    </div>
  );
}

export default App;
