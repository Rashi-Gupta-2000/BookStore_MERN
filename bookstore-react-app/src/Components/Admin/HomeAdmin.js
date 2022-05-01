import axios from "axios"
import { Link, useNavigate } from "react-router-dom"
import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import "../User/Home.css"
import NavbarHomeAdmin from "../Admin/NavbarHomeAdmin";
import BookService from "../../Services/BookService";
import AdminService from "../../Services/AdminService"
const USER_BASE_URL = "http://localhost:4507/book";
const headers = {
    "Content-Type": "application/json",
    Authorization: "Token " + localStorage.getItem("token")

};

const Home = () => {
    const params = "";
    const [books, setBooks] = useState([]);
    const navigate = useNavigate();


    useEffect(() => {
        getBook();
    }, []);

    useEffect(() => {
        const localData = localStorage.getItem("adminid")
        console.log("localData=", localData)
        if (localData == null) {
            alert("You are not Admin")
            navigate("/home")
        }
    }, []);

    const getBook = () => {

        return axios.get(USER_BASE_URL, { headers: headers }).then((res) => {
            console.log(res);
            setBooks(res.data);
        })
            .catch((err) => {
                console.log(err);
            });
    }



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
    const deleteHandler = (id) => {
        localStorage.setItem("id", id)
        AdminService.deleteBookbyAdmin(id).then((res) => {
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
            <NavbarHomeAdmin />
            
            <div>
                <h1>Featured Books</h1>
                <div className='item-container card-grid'>
                    {books.map((book) => (
                        <Card style={{ width: '18rem' }} key={book._id}>
                            <Card.Img variant="top" src={book.img} style={{ height: '18rem', width: '18rem' }} />
                            <Card.Body>
                                <Card.Title>{book.title}</Card.Title>
                                <Card.Text>
                                    {book.author}
                                </Card.Text>
                                <Card.Text>
                                    {book.summary}
                                </Card.Text>
                            </Card.Body>
                            <Button variant="danger" onClick={() => deleteHandler(book._id)} style={{ height: '2.5rem',width: '5rem' }}>
                                Delete
                            </Button>
                        </Card>
                    ))}

                </div>
            </div>
        </div>
    )
}

export default Home