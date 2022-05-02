import { useEffect, useState } from "react";
import UserService from "../../Services/UserService";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import NavbarHome from "./NavbarHome";
import "./Wishlist.css"
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
const Wishlist = () => {
    // const params="";
    // const [users, setusers] = useState([]);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const getUserData = (id) => {
        UserService.getUserById(id).then((res) => {
            console.log("hello")
            console.log("in getuser data :User Data to be dispatched:", res.data);
            dispatch({ type: "wishlist", value: res.data })
        });
    };

    useEffect(() => {
        console.log("useeffect called")
        // localStorage.setItem("id",id)


        const id = localStorage.getItem("userid")

        console.log(id)

        // console.log(id)
        // localStorage.setItem("id",id)
        getUserData(id);
    }, []);

    useEffect(() => {
        const localData = localStorage.getItem("token")
        console.log(localData)
        if (localData == null) {
            navigate("/")
        }
    });

    const { wishlist } = useSelector((state) => state);
    // console.log("Wishlist is here:")
    console.log("after useselector wishlist is :", wishlist);




    // return <h1>THis is list user</h1>
    // const {users,email}=useSelector((state)=>state);
    // console.log(users,email);

    // const deleteUserHandler = (id)=> {
    //     console.log(id);
    //     UserService.deleteUser(id).then((res)=> {
    //         getUserData();
    //     });
    // };
    const deleteWishlistHandler = (wid) => {
        console.log(wid);
        const id = localStorage.getItem("userid")
        UserService.deleteWishlist(id, wid).then((res) => {
            console.log("response in delete response:", res)
            console.log("delete wishhandler called")
            getUserData(id);
        });
    };
    return (
        <div>
            <NavbarHome />
            <br /><br />
            <div className="container show-book ">
                <table className="table table-striped ">
                    <thead>

                        <tr>

                            <th className="space"></th>


                            <th className="author ">Title & Author</th>



                            <th className="actions">Actions</th>

                        </tr>

                    </thead>
                    <tbody>


                        {wishlist.map((wt, i) => (

                            <tr key={wt._id}>
                                <td className="float-left">
                                    <Card className="card-style" style={{ width: '10rem' }} >
                                        <Card.Img variant="top" src={wt.img} style={{ height: '10rem', width: '10rem' }} />
                                        {/* <Card.Body>
                                            <Card.Title>{wt.title}</Card.Title>
                                            <Card.Text>
                                                {wt.author}
                                            </Card.Text> */}
                                        {/* <Card.Text>
                                                {wt.summary}
                                            </Card.Text>
                                            <Card.Text >
                                                <Button variant="warning" style={{ height: '3rem', width: '11rem' }}>
                                                    Number of likes:{wt.likes_count}</Button>
                                            </Card.Text> */}
                                        {/* </Card.Body> */}

                                    </Card>

                                </td>
                                <td className="data-table" >{wt.title} <br /> <br /> {wt.author} </td>


                                <td>
                                    <button type="button" className="btn btn-danger m-1" onClick={() => deleteWishlistHandler(i)}>Delete</button>
                                </td>
                            </tr>
                        ))}





                    </tbody>
                </table>

            </div>
        </div>
    )
};
export default Wishlist;