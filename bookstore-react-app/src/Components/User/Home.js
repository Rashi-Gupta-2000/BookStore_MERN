import axios from "axios"
import { Link, useNavigate } from "react-router-dom"
import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import "./Home.css"
import NavbarHome from "./NavbarHome";
import NavbarMDB from "./NavbarMDB"
//import Card from "./Card/card";
import BookService from "../../Services/BookService";
const USER_BASE_URL = "http://localhost:4500/book";
const headers = {
    "Content-Type": "application/json",
    Authorization: "Token " + localStorage.getItem("token")

};

const Home = () => {
    const params = "";
    const [books, setBooks] = useState([]);
    const navigate = useNavigate();

    // const bookserviceobj = new BookService();
    // const { books } = useSelector((state) => state);
    //const books= bookserviceobj.getBook();
    //console.log(books)

    // const id = localStorage.getItem("id"); // current user id


    useEffect(() => {
        getBook();
    }, []);

    useEffect(() => {
        const localData = localStorage.getItem("token")
        console.log(localData)
        if (localData == null) {
            navigate("/")
        }
    });

    const getBook = () => {
        // e.preventDefault();
        return axios.get(USER_BASE_URL, { headers: headers }).then((res) => {
            console.log(res);
            setBooks(res.data);
        })
            .catch((err) => {
                console.log(err);
            });
    }

    // const wishlistHandler = (id) => {
    //     localStorage.setItem("id",id)

    // }

    const contentHandler = (id) => {
        //event.preventDefault();
        localStorage.setItem("id", id)
        BookService.getContent(id).then((res) => {
            if (res.status == 200) {
                navigate("/book/" + id + "/content")
            }
            else {
                console.log("Couldn't find book")
            }
        })

    }
    const likeHandler = (id) => {
        BookService.getlikes(id).then((res) => {
            if (res.status == 200) {
                getBook()
            }
            else {
                console.log("Couldn't find book")
            }
        })

    }
    const id = localStorage.getItem("id")




    return (
        <div className="full">
            <NavbarHome />
            {/* <NavbarMDB/> */}
            <div>
                <h1>Featured Books</h1>
                <div className='item-container card-grid'>
                    {books.map((book) => (
                        <Card style={{ width: '20rem' }} >
                            <Card.Img variant="top" src="https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/7805/9781780545929.jpg" />
                            <Card.Body>
                                <Card.Title>{book.title}</Card.Title>
                                <Card.Text>
                                    {book.author}
                                </Card.Text>
                                <Card.Text>
                                    {book.summary}
                                </Card.Text>
                                <Button variant="primary" onClick={() => contentHandler(book._id)}>
                                    Read Me
                                </Button>
                                <Button variant="warning" onClick={() => likeHandler(book._id)}>

                                    Like Me: {book.likes_count}

                                </Button>


                            </Card.Body>
                        </Card>
                        // <div className='card'>
                        //     <h3>{book.title}</h3>
                        //     <h3>{book.author}</h3>
                        //     <p>{book.summary}</p>
                        //     <button onClick={() => contentHandler(book._id)}>Read Me</button>
                        //     {/* <button onClick={() => wishlistHandler(book._id)}>Add to ReadList</button> */}
                        // </div>
                    ))}

                </div>
            </div>
        </div>
    )
}

export default Home