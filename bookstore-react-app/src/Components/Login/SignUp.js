import { useDispatch, useSelector } from "react-redux";
import UserService from "../../Services/UserService";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react"
import Navbar from "../Welcome/Navbar";

const SignUp = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { user_name, email, password,type, isLogged } = useSelector((state) => state);
    
    // useEffect(() => {
    //     const localData = localStorage.getItem("token");
    //     if (localData) {
    //         navigate("/home");
    //     }
    // }, [])
    
    // console.log(isLogged)
    
    const userNameChangeHandler = (event) => {
        dispatch({ type: "user_name", value: event.target.value });
    }

    const emailChangeHandler = (event) => {
        dispatch({ type: "email", value: event.target.value });
    }
    const passwordChangeHandler = (event) => {
        dispatch({ type: "password", value: event.target.value });
    }
    const signupHandler = (event) => {
        event.preventDefault();
        UserService.postUser({ "user_name":user_name,"email": email, "password": password ,"type":type})
         .then((res) => {
             //console.log(res);
             navigate("/login")
         });
        //     if (res.data !== "") {
        //         localStorage.setItem("token", res.data.token)
        //         dispatch({ type: "logged", value: false });
        //         navigate("/home")
             
        //     else {
        //         dispatch({ type: "logged", value: false });
        //     }
        // });
    };
    return (
        <div>
            <Navbar/>
        <div className="container mt-3">
            {/* {isLogged === false ? ( */}
                <form onSubmit={signupHandler}>
                <div className="mb-3 mt-3">
                    <label htmlFor="user_name">User name</label>
                    <input
                        type="user_name"
                        name="user_name"
                        id="user_name"
                        className="form-control"
                        placeholder="Enter user name"
                        onChange={userNameChangeHandler}
                    />
                </div>
                <div className="mb-3 mt-3">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        className="form-control"
                        placeholder="Enter Email"
                        onChange={emailChangeHandler}
                    />
                </div>

                <div className="mb-3 mt-3">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        className="form-control"
                        placeholder="Enter Password"
                        onChange={passwordChangeHandler}
                    />
                </div>

                {/* <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Select SignUp Type
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" href="#">User</a>
                    <a className="dropdown-item" href="#">Admin</a>
                </div>
                </div> */}

                <button type="submit" className="btn btn-dark btn-lg btn-block"> Sign Up</button>

            </form>
                {/* ): ("")}  */}
            
        </div>
    </div>
    )
}

export default SignUp;