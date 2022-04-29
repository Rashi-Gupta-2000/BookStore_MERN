import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import UserService from "../../Services/UserService";

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
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">

            <div className="container-fluid">
                <Link to="/home">Home Page</Link>
                <ul className="navbar-nav mr-auto">
                    <button type="button" className="btn btn-light"><a href="/wishlist">Wishlist</a> </button>
                    {/* <li className="navbar-item">
                        <Link to="/wishlist/:id" className="nav-link"> Wishlist</Link>
                    </li> */}
                    <button type="button" className="btn btn-light" onClick={logoutHandler}>Logout</button>
                    {/* <button type="button" className="btn btn-light"><a href="/">Logout</a> </button> */}
                    {/* <li className="navbar-item">
                        <Link to={`/edit/${params}`} className="nav-link"> Logout</Link>
                    </li> */}

                </ul>
        </div>
</nav>
    )
}

export default NavbarHome

