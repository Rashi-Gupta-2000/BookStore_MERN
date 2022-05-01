import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Button from 'react-bootstrap/Button'
import './NavbarHomeAdmin.css'

const NavbarHomeAdmin = () => {
    const { email, password, isLogged } = useSelector((state) => state);
    const navigate = useNavigate();
   
    const logoutHandler = (e) => {
        e.preventDefault();
        localStorage.clear();
        navigate("/")
       
    }

   
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

