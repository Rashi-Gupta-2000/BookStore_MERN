import { useDispatch, useSelector } from "react-redux";
import UserService from "../../Services/UserService";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react"
import Navbar from "../Welcome/Navbar"

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { email, password, isLogged } = useSelector((state) => state);
    
    useEffect(() => {
        const localData = localStorage.getItem("token");
        if (localData) {
            navigate("/home");
        }
    }, [])
    
    console.log(isLogged)
    const emailChangeHandler = (event) => {
        dispatch({ type: "email", value: event.target.value });
    }
    const passwordChangeHandler = (event) => {
        dispatch({ type: "password", value: event.target.value });
    }
    const loginHandler = (event) => {
        event.preventDefault();
        UserService.loginUser({ "email": email, "password": password }).then((res) => {
            console.log(res);
            if (res.data !== "") {
                localStorage.setItem("token", res.data.token)
                localStorage.setItem("userid",res.data._id)
                dispatch({ type: "logged", value: true });
                navigate("/home")
            }
            else {
                dispatch({ type: "logged", value: false });
            }
        });
    };
    return (
        <div>
            <Navbar/>
        <div className="container mt-3">
            {isLogged === false ? (
                <div className="alert alert-danger">
                    <strong>Error:</strong> Login Credentials Failed
                </div>)
                : ("")}
            <form onSubmit={loginHandler}>
                <div className="mb-3 mt-3 form-group">
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

                <div className="mb-3 mt-3 form-group">
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

                <button type="submit" className="btn btn-dark btn-lg btn-block"> Login</button>

            </form>
        </div>
    </div>
    )
}

export default Login;