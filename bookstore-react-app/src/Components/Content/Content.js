import BookService from "../../Services/BookService"
import "./Content.css"
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

const Content = (props) => {
    // const dispatch = useDispatch();
    const params = useParams();
    const id = localStorage.getItem("id")
    const getBookContent = (id) => {
        console.log(id)
        BookService.getContent(params.id).then((res) => {
            
            console.log(res.data)
        })
    }
    return(
        <div className="container m-2">
            {this.getBookContent(params.id)}

            <div className="title">Book Name</div>
            <div className="author">Author Name</div>
            <div className="details">Content of the book</div>
        </div>
    );
};

export default Content