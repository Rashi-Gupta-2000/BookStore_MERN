import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import "./NavbarHome.css"
import { useState,useEffect } from "react";
import { useMemo } from "react";
import UserService from "../../Services/UserService";
import axios from "axios"

const USER_BASE_URL = "http://localhost:4507/book";
const headers = {
    "Content-Type": "application/json",
    Authorization: "Token " + localStorage.getItem("token")

};


const Search = () => {
    const { email, password, isLogged } = useSelector((state) => state);
    const navigate = useNavigate();
    const [query, setQuery] = useState("")
    const dispatch = useDispatch();

    const [books, setBooks] = useState([]);
    const [bookList, setbookList] = useState([]);
    const [selectedTitle, setselectedTitle] = useState();

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
        // Avoid filter when selectedTitle is null
        if (!selectedTitle) {
            return bookList;
        }
        const res = bookList.filter((item) => item.title === selectedTitle) ;
        console.log(res + "is")
        if (res == "")
        {
            console.log("Books does not exist")
            return null
        }
       return res
    }

    // Avoid duplicate function calls with useMemo
    var filteredList = useMemo(getFilteredList, [selectedTitle, bookList]);
    console.log(filteredList)

    function handleSearch(event) {
        setselectedTitle(event.target.value);
        console.log("handle cat call:")
        // dispatch({ type: "selectedTitle", value: event.target.value })
        console.log("in filter selectedTitle is:", selectedTitle)
    }

    return (
        <Form className="d-flex">
            <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            value={selectedTitle}
            onChange={handleSearch} 
            />
            <Button variant="outline-info" className="style" >Search</Button>
        </Form>
    )
}

export default Search

