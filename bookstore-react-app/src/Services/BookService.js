import axios from "axios"
const USER_BASE_URL = "http://localhost:4507/book"
const headers = {
    "Content-Type": "application/json",
    Authorization: "Token " + localStorage.getItem("token")

};

class BookService {
    
    //get content of the book
    getContent(id) {
        return axios.get(USER_BASE_URL + "/" + id + "/content", { headers: headers })
    }
    getlikes(id) {
        return axios.get(USER_BASE_URL + "/likes/" + id, { headers: headers })
    }
}

export default new BookService();