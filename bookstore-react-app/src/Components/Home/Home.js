import axios from "axios"
import { Link } from "react-router-dom"
import React, { useState, useEffect } from 'react';
import Card from "./Card/card";
import BookService from "../../Services/BookService";
const USER_BASE_URL = "http://localhost:4505/book"
const Home = () => {
    const params = "";
    const [products, setProducts] = useState([]);
    // const bookserviceobj = new BookService();
    // const { books } = useSelector((state) => state);
    //const books= bookserviceobj.getBook();
    //console.log(books)

    useEffect(()=>{
        getBook();
    },[]);

    const getBook = () => {
        //console.log(headers);
        // return axios.get(USER_BASE_URL);
        return axios.get(USER_BASE_URL).then((res)=>{
            console.log(res);
            setProducts(res.data);
        })
        .catch((err)=>{
            console.log(err);
        });
    }

    
    

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
                        </div>
                    ))}
                    </div>
                </div>

                

        
        </div>

        

    )
}

export default Home;