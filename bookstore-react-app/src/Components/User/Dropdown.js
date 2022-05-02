import React, { useEffect, useMemo, useState } from "react";
import Item from "./Item";
// import BookService from "../../Services/BookService";
// import UserService from "../../Services/UserService";
import { Link, useNavigate } from "react-router-dom"
// import Card from 'react-bootstrap/Card'
// import Button from 'react-bootstrap/Button'
import axios from "axios"
import Card from './Card'

const USER_BASE_URL = "http://localhost:4507/book";
const headers = {
    "Content-Type": "application/json",
    Authorization: "Token " + localStorage.getItem("token")

};

// import "./styles.css";

//Filter list by category in React JS
export default function Filter() {
    // Default Value
    const [books, setBooks] = useState([]);
    const navigate = useNavigate();
    const id = localStorage.getItem("id")
    const user_id = localStorage.getItem("userid")
    // console.log(user_id)
    // var defaultSports = [
    //     { name: "Table Tennis", category: "Indoor" },
    //     { name: "Football", category: "Outdoor" },
    //     { name: "Swimming", category: "Aquatics" },
    //     { name: "Chess", category: "Indoor" },
    //     { name: "BaseBall", category: "Outdoor" }
    // ];
    const [bookList, setbookList] = useState([]);

    const [selectedCategory, setSelectedCategory] = useState();
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

    // Add default value on page load
    useEffect(() => {
        setbookList(books);
        console.log("books:", bookList)
    }, []);

    // Function to get filtered list
    function getFilteredList() {
        // Avoid filter when selectedCategory is null
        if (!selectedCategory) {
            return bookList;
        }
        return bookList.filter((item) => item.category === selectedCategory);
    }

    // Avoid duplicate function calls with useMemo
    var filteredList = useMemo(getFilteredList, [selectedCategory, bookList]);

    function handleCategoryChange(event) {
        setSelectedCategory(event.target.value);
    }

    return (
        <div className="app">
            <div className="filter-container">
                <div>Filter by Category:</div>
                <div>
                    <select
                        name="category-list"
                        id="category-list"
                        onChange={handleCategoryChange}
                    >
                        <option value="">All</option>
                        <option value="Fiction">Fiction</option>
                        <option value="Thriller">Thriller</option>
                        <option value="Romance">Romance</option>
                        <option value="Horror">Horror</option>
                        <option value="Comedy">Comedy</option>
                    </select>
                </div>
            </div>
            <div className="text-light">
                {filteredList.map((element, index) => (
                    <Item {...element} key={index} />
                ))}
            </div>
            <Card />
        </div>
    );
}