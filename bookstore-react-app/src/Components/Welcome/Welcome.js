import Navbar from "./Navbar";
import { Link } from "react-router-dom"
import "./Welcome.css"
const Welcome = () => {
    return (
        <div className="bg">
            <Navbar />

            <div className="bg">
                <div className="container_ ">
                    <h1 className="text-center mt-3 text-light">WELCOME TO THE BOOKSTORE !</h1>
                </div>
                <div className="containerbtn_">
                    <Link to="/book/gethome" className="btn btn-light"> Get Started</Link>
                </div>
            </div>


        </div>

    )
}

export default Welcome;