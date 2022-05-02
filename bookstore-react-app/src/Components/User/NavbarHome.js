import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useState,useEffect } from "react";
import { useMemo } from "react";
import UserService from "../../Services/UserService";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import "./NavbarHome.css"
import axios from "axios"

const USER_BASE_URL = "http://localhost:4507/book";
const headers = {
    "Content-Type": "application/json",
    Authorization: "Token " + localStorage.getItem("token")

};

const NavbarHome = () => {
    const { email, password, isLogged } = useSelector((state) => state);
    const navigate = useNavigate();

    // const [query, setQuery] = useState("")
    const [books, setBooks] = useState([]);
    const [bookList, setbookList] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState();

    const id = localStorage.getItem("id")
    const user_id = localStorage.getItem("userid")

    const getBook = () => {
        // e.preventDefault();
        return axios.get(USER_BASE_URL, { headers: headers }).then((res) => {
            console.log(res);
            setBooks(res.data);
            setbookList(res.data);
        })
            .catch((err) => {
                console.log(err);
            });
    }
    useEffect(() => {
        getBook();
    }, []);

    useEffect(() => {
        setbookList(books);
        console.log("books:", bookList)
    }, []);

    function getFilteredList(event) {
        // Avoid filter when selectedCategory is null
        if (!selectedCategory) {
            return bookList;
        }
        const res = bookList.filter((item) => item.title === selectedCategory) ;
        console.log(res + "is")
        if (res == "")
        {
            console.log("Books does not exist")
            return null
        }
       return res
    }

    // Avoid duplicate function calls with useMemo
    var filteredList = useMemo(getFilteredList, [selectedCategory, bookList]);
    console.log(filteredList)

    function handleCategoryChange(event) {
        console.log("handle cat call")
        setSelectedCategory(event.target.value);
    }

    const logoutHandler = (e) => {
        e.preventDefault();
        localStorage.clear();
        navigate("/")
    }



    return (
        // <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <nav className="navbar navbar-custom">
            <div className="container-fluid">
                <Link to="/home" className="link">Home Page</Link>
                <Form className="d-flex">
                    <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    value={selectedCategory}
                    onChange={handleCategoryChange} 
                    />
                    <Button variant="outline-info" className="style" >Search</Button>
                </Form>
                <button type="button" className="btn btn-light"><a href="/wishlist">Wishlist</a> </button>
                <button type="button" className="btn btn-light" onClick={logoutHandler}>Logout</button>
        </div>
</nav>
    )
}

export default NavbarHome

