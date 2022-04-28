import BookService from "../../Services/BookService"
import "./Content.css"
import { useDispatch,useSelector } from "react-redux";
import { useEffect } from "react";
import NavbarHome from "../User/NavbarHome";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
// import { useParams } from "react-router-dom";

const Content = () => {
    const dispatch = useDispatch();
    const id = localStorage.getItem("id")
    console.log(id)
    // const bookData ={
    //     title:"",
    //     author:"",
    //     category:"",
    //     likes_count:0,
    //     summary:"",
    //     content:"",
    // }

    // const bookData = BookService.getContent(id).then((res) => {
    //     console.log(res)
    //     console.log(res.data.title)
    // })
    // console.log(data)

    // useEffect(() => {
    //     BookService.getContent(id).then((res) =>{
    //         console.log(res)
    //         bookData.title = res.data.title;
    //         bookData.author = res.data.author;
    //         bookData.category = res.category;
    //         // dispatch({type:'title', value:res.data.title})
    //     })
    // },[])
        
    // const test = () => {
    //     BookService.getContent(id).then((res) =>{
    //         console.log(res)
    //         bookData.title = res.data.title;
    //         bookData.author = res.data.author;
    //         bookData.category = res.category;
    //         console.log(bookData.title)
    //         // dispatch({type:'title', value:res.data.title})
    // })
    // } 

    const test =() => {
        BookService.getContent(id).then((res) => {
            console.log(res.data.title);
            // const id = localStorage.getItem("id")
            dispatch({type:"books",value:res.data})
        })
    } 

    useEffect(() => {
        test();
    },[])

    const {books} = useSelector((state) => state);
    //console.log(books)
    // BookService.getContent(id).then((res) =>{
    //     console.log(res)
    //     bookData.title = res.data.title;
    //     bookData.author = res.data.author;
    //     bookData.category = res.category;
    //     console.log(bookData.title)
    //     // dispatch({type:'title', value:res.data.title})
    // })

    // console.log(bookData.title)

    return(
        <div>
            <NavbarHome/>
            <div className="container m-2">
            <Card style={{width:'25rem'}}>
                             <Card.Img variant="top" src="https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/7805/9781780545929.jpg" />
                             <Card.Body style={{height:'30rem'}}>
                                 <Card.Title>{books.title}</Card.Title>
                                 <Card.Text>
                                 {books.author}
                                 </Card.Text>
                                 <Card.Text>
                                 {books.content}
                                 </Card.Text>
                             </Card.Body>
                             </Card>
                {/* <div className="title">{books.title}</div>
                <div className="author">{books.author}</div>
                <div className="details">{books.content}</div> */}
            </div>
        </div>
    );
};

export default Content