import BookService from "../../Services/BookService"
import "./Content.css"
import { useDispatch,useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavbarHome from "../User/NavbarHome";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
// import { useParams } from "react-router-dom";

const Content = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
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

    useEffect(()=>{
        const localData = localStorage.getItem("token")
        console.log(localData)
        if(localData == null)
        {
            navigate("/")
        }
    });

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
            <br/><br/>
            <div className="container content">
            <Card style={{width:'70rem'}} className="content-card">
                             <Card.Body>
                                 <Card.Title className="title">{books.title}</Card.Title>
                                 <Card.Text className="author">
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