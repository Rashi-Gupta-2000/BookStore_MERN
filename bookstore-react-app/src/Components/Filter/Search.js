import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useState } from "react";
import UserService from "../../Services/UserService";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
// import "./NavbarHome.css"

const Search = () => {
    // const { email, password, isLogged } = useSelector((state) => state);
    const navigate = useNavigate();
    const [query, setQuery] = useState("")
    const dispatch = useDispatch();

    const { search } = useSelector((state) => state);
    // function handleChange(event) {

    //     dispatch({ type: "searchtitle", value: event.target.value })
    //     console.log("in search:", search)
    // }
    return (
        // <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <nav className="navbar navbar-custom">
            <div className="container-fluid">
                <Form className="d-flex">
                    <FormControl
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search by Book Name"
                        value={query}
                        // onClick={handleChange}
                        onChange={(event) => {
                            setQuery(event.target.value)
                            dispatch({ type: "searchtitle", value: event.target.value })
                            console.log("in search:", search)
                        }}
                    />
                    <Button variant="outline-info" className="style" >Search</Button>
                </Form>

            </div>
        </nav>
    )
}

export default Search