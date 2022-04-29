import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import UserService from "../../Services/UserService";
import Button from 'react-bootstrap/Button'
import './NavbarHomeAdmin.css'

const NavbarHomeAdmin = () => {
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

    // const addHandler = () => {
    //     navigate("/addbook")

    // }

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
        <nav className="navbar  navbar-custom">

            <div className="container-fluid">
                <Link to="/homeAdmin" className="link">Home Page</Link>
                
                    <Button variant="btn btn-light">
                        <a href="/addbook" >AddBook</a>
                    </Button>
                    
                    <button type="button" className="btn btn-light" onClick={logoutHandler}>Logout</button>
            

                
            </div>
        </nav>
    )
}

export default NavbarHomeAdmin

