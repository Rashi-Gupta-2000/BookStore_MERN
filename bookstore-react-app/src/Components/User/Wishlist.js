import { useEffect ,useState} from "react";
import UserService from "../../Services/UserService";
import { Link ,useNavigate} from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import NavbarHome from "./NavbarHome";
import "./Wishlist.css"
const Wishlist = () => {
    // const params="";
    // const [users, setusers] = useState([]);
    const dispatch=useDispatch();
    const navigate = useNavigate();
    const getUserData = (id) => {
        UserService.getUserById(id).then((res)=>{
            console.log("hello")
            console.log(res.data);
            dispatch({type:"wishlist",value:res.data})
        });
    };
    
    useEffect(()=>{
        console.log("useeffect called")
        // localStorage.setItem("id",id)
        
        
        const id = localStorage.getItem("userid")
    
        console.log(id)

        // console.log(id)
        // localStorage.setItem("id",id)
        getUserData(id);
    },[]);

    useEffect(()=>{
        const localData = localStorage.getItem("token")
        console.log(localData)
        if(localData == null)
        {
            navigate("/")
        }
    });

    const {wishlist}=useSelector((state)=>state);
    console.log("Wishlist is here:")
    console.log(wishlist);




    // return <h1>THis is list user</h1>
    // const {users,email}=useSelector((state)=>state);
    // console.log(users,email);
    
    // const deleteUserHandler = (id)=> {
    //     console.log(id);
    //     UserService.deleteUser(id).then((res)=> {
    //         getUserData();
    //     });
    // };
    const deleteWishlistHandler = (wid)=> {
        console.log(wid);
        const id = localStorage.getItem("userid")
        UserService.deleteWishlist(id,wid).then((res)=> {
            getUserData(id);
            console.log("deletewishhandler called")
        });
    };
    return (
        <div>
            <NavbarHome/>
            <br/><br/>
        <div className="container show-book">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th className="space">Book Title</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    
                        
                        {wishlist.map((wt,i) => (
                            <tr>
                                <td>
                                <div className="user">{wt}</div>
                                </td>

                                <td>
                                <button type="button" className="btn btn-danger m-1" onClick={()=> deleteWishlistHandler(i)}>Delete</button>
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