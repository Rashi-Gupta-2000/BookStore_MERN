import axios from "axios"
import { Link, useNavigate } from "react-router-dom"
import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
// import "./Home.css"
// import NavbarHome from "./NavbarHome";
import Navbar from "./Navbar";

import BookService from "../../Services/BookService";
import UserService from "../../Services/UserService";
const USER_BASE_URL = "http://localhost:4507/book";
// const headers = {
//     "Content-Type": "application/json",
//     Authorization: "Token " + localStorage.getItem("token")

// };

const GetStarted = () => {
    const params = "";
    const [books, setBooks] = useState([]);
    const navigate = useNavigate();
    // const id = localStorage.getItem("id")
    // const user_id = localStorage.getItem("userid")
    // console.log(user_id)
    // const bookserviceobj = new BookService();
    // const { books } = useSelector((state) => state);
    //const books= bookserviceobj.getBook();
    //console.log(books)

    // const id = localStorage.getItem("id"); // current user id


    useEffect(() => {
        getBook();
    }, []);

    // useEffect(() => {
    //     // const localData = localStorage.getItem("token")
    //     console.log(localData)
    //     if (localData == null) {
    //         navigate("/")
    //     }
    // });

    const getBook = () => {
        // e.preventDefault();
        return axios.get(USER_BASE_URL + "/gethome").then((res) => {
            console.log(res);
            setBooks(res.data);
        })
            .catch((err) => {
                console.log(err);
            });
    }




    return (
        <div>
            <Navbar />
            {/* <NavbarMDB/> */}
            <div>
                <h1>Featured Books</h1>
                <div className='item-container card-grid'>
                    {books.map((book) => (
                        <Card style={{ width: '18rem' }} key={book._id} >
                            <Card.Img variant="top" src={book.img} style={{ height: '18rem', width: '18rem' }} />
                            <Card.Body>
                                <Card.Title>{book.title}</Card.Title>
                                <Card.Text>
                                    {book.author}
                                </Card.Text>
                            </Card.Body>
                            <Button variant="warning"><a href="/signup">Read Me</a></Button>
                            {/* <Button variant="primary" style={{ height: '2.5rem', width: '6rem' }} onClick={() => contentHandler(book._id)}>Read Me</Button>
                            <Button variant="success" style={{ height: '2.3rem', width: '9rem' }} onClick={() => wishlistHandler(book._id)}>Add to ReadList</Button>
                            <Button variant="warning" style={{ height: '2.3rem', width: '7rem' }} onClick={() => likeHandler(book._id)}>

                                Like Me: {book.likes_count}

                            </Button> */}

                        </Card>
                    ))}

                </div>
            </div>
        </div>
    )
}

export default GetStarted