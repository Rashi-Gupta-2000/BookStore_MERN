import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import AdminService from '../../Services/AdminService';
import NavbarHomeAdmin from './NavbarHomeAdmin';
import Card from 'react-bootstrap/Card'
import './AddBook.css'
const AddUser = () => {
    const { author, title, content, summary, category, img } = useSelector((state) => state)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const submitHandler = (e) => {
        e.preventDefault();
        const bookData = {
            img: img,
            title: title,
            author: author,
            content: content,
            summary: summary,
            category: category
        }
        console.log("bookData is", bookData)
        AdminService.addBookbyAdmin(bookData).then((res) => {
            console.log("Results are=", res);
            if (res.status == 200) {
                navigate("/homeAdmin");
            }
        })
    }
    return (
        <div>
            <NavbarHomeAdmin />
            <div className="container ">
                <h1> Create New Book</h1>
                <Card style={{ width: '50rem', height: '35rem', padding: '1.5rem' }} className="card-class">
                    <form onSubmit={submitHandler}>
                        <div className="form-group">
                            <label htmlFor="author">Author</label>
                            <input
                                type="text"
                                name="author"
                                id="author"
                                className="form-control"
                                placeholder="Enter author"
                                value={author}
                                onChange={(e) => dispatch({ type: 'author', value: e.target.value })}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="img">Enter image url:</label>
                            <input
                                type="img"
                                name="img"
                                id="img"
                                className="form-control"
                                placeholder="Enter img"
                                value={img}
                                onChange={(e) => dispatch({ type: 'img', value: e.target.value })}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="title">Title</label>
                            <input
                                type="title"
                                name="title"
                                id="title"
                                className="form-control"
                                placeholder="Enter title"
                                value={title}
                                onChange={(e) => dispatch({ type: 'title', value: e.target.value })}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="category">Category</label>
                            <input
                                type="category"
                                name="category"
                                id="category"
                                className="form-control"
                                placeholder="Enter category"
                                value={category}
                                onChange={(e) => dispatch({ type: 'category', value: e.target.value })}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="summary">Summary</label>
                            <input
                                type="summary"
                                name="summary"
                                id="summary"
                                className="form-control"
                                placeholder="Enter summary"
                                value={summary}
                                onChange={(e) => dispatch({ type: 'summary', value: e.target.value })}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="content">Content</label>
                            <input
                                type="content"
                                name="content"
                                id="content"
                                className="form-control"
                                placeholder="Enter content"
                                value={content}
                                onChange={(e) => dispatch({ type: 'content', value: e.target.value })}
                                required
                            />
                        </div>





                        <div className='form-group'>
                            <input type="submit" value="Add Book" className='btn btn-info' />
                        </div>

                    </form>
                </Card>
            </div>

        </div>

    );
};
export default AddUser;