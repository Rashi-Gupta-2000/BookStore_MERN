import { useDispatch, useSelector } from "react-redux";
import UserService from "../../Services/UserService";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react"
import { useState } from "react";
import Navbar from "../Welcome/Navbar";
import Dropdown from 'react-bootstrap/Dropdown'
import "./SignUp.css"

const SignUp = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { user_name, email, password,type, isLogged } = useSelector((state) => state);
    const [typeSignup,setType] = useState("User");
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

    const typeChangeHandler = (event) => {
        setType(event.target.value);
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
                    Dropdown button
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <a className="dropdown-item" href="#">Something else here</a>
                </div>
                </div> */}

                {/* <Dropdown>
                <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                    Select Signup Type
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#" placeholder="User">User</Dropdown.Item>
                    <Dropdown.Item href="#" value="Admin">Admin</Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown> */}

                <div className="todo-control">
                    <label htmlFor="type">Select Signup Type: </label>
                    <select onChange={typeChangeHandler} value={typeSignup}>
                        <option value="User">User</option>
                        <option value="Admin">Admin</option>
                    </select>
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block"> Sign Up</button>

            </form>
                {/* ): ("")}  */}
            
        </div>
    </div>
    )
}

export default SignUp;