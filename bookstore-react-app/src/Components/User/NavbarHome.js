import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import UserService from "../../Services/UserService";
import Filter from '../Filter/Filter'
import Search from '../Filter/Search'
import "./NavbarHome.css"

const NavbarHome = () => {
    const { email, password, isLogged } = useSelector((state) => state);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const logoutHandler = (e) => {
        e.preventDefault();
        localStorage.clear();
        navigate("/")
        // UserService.logoutUser({}).then((res) => {
        //     dispatch({type:"logged",value:false})
        //     navigate("/")
        // })
    }

    // const loginHandler = (event) => {
    //     event.preventDefault();
    //     UserService.loginUser({ "email": email, "password": password }).then((res) => {
    //         console.log(res);
    //         if (res.data !== "") {
    //             localStorage.setItem("token", res.data.token)
    //             localStorage.setItem("userid",res.data._id)
    //             dispatch({ type: "logged", value: true });
    //             navigate("/home")
    //         }
    //         else {
    //             dispatch({ type: "logged", value: false });
    //         }
    //     });

    return (
        // <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <nav className="navbar navbar-custom">
            <div className="container-fluid">
                <Link to="/home" className="link">Home Page</Link>
                <Search />
                <Filter />

                <button type="button" className="btn btn-light"><a href="/wishlist">Wishlist</a> </button>
                <button type="button" className="btn btn-light" onClick={logoutHandler}>Logout</button>

            </div>
        </nav>
    )
}

export default NavbarHome

