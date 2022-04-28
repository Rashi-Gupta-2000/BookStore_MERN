import axios from "axios"
import { Link, useNavigate } from "react-router-dom"
import React, { useState, useEffect } from 'react';
//import Card from "./Card/card";
import BookService from "../../Services/BookService";
const USER_BASE_URL = "http://localhost:4500/book";
const headers = {
    "Content-Type": "application/json",
    Authorization: "Token " + localStorage.getItem("token")

};

const Home = () => {
    const params = "";
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();
    
    // const bookserviceobj = new BookService();
    // const { books } = useSelector((state) => state);
    //const books= bookserviceobj.getBook();
    //console.log(books)

   // const id = localStorage.getItem("id"); // current user id


    useEffect(()=>{
        getBook();
    },[]);

    // useEffect(()=>{
    //     BookService.getBookById(id).then((res) => {
    //         console.log(id)
    //     })
    // },[]);

    const getBook = () => {
        // e.preventDefault();
        return axios.get(USER_BASE_URL , { headers: headers }).then((res)=>{
            console.log(res);
            setProducts(res.data);
        })
        .catch((err)=>{
            console.log(err);
        });
    }

    const contentHandler =(id) =>{
        //event.preventDefault();
        localStorage.setItem("id",id)
        BookService.getContent(id).then((res) =>{
            if(res.status == 200){
                navigate("/book/"+id+"/content")
            }
            else {
                console.log("Couldn't find book")
            }
        })

    } 
    const id = localStorage.getItem("id")
    
    
    

    return (
        <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">

            <div className="container-fluid">
                <Link to="/home">Home Page</Link>
                <ul className="navbar-nav mr-auto">
                    <li className="navbar-item">
                        <Link to="/list" className="nav-link"> Wishlist</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to={`/edit/${params}`} className="nav-link"> LoOgOut</Link>
                    </li>

                </ul>
            </div>
        </nav>

            
                <div>
                    <h1>Products</h1>
                </div>

                <div>
                    <h1>Featured Products</h1>
                    <div className='item-container'>
                        {products.map((product) => (
                        <div className='card'>
                            <h3>{product.title}</h3>
                            <h3>{product.author}</h3>
                            <p>{product.summary}</p>
                            <button onClick={() => contentHandler(product._id)}>Read Me</button>
                        </div>
                    ))}
                    </div>
                </div>

                

        
        </div>

        

    )
}

export default Home