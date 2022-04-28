import axios from "axios"
const USER_BASE_URL = "http://localhost:4500/book"
const headers = {
    "Content-Type": "application/json",
    Authorization: "Token " + localStorage.getItem("token")

};

class BookService {

    // getBookById(id){
    //     return axios.get(USER_BASE_URL + "/" + id ,{headers:headers})
    // }

    //get content of the book
    getContent(id){
        return axios.get(USER_BASE_URL + "/" + id + "/content",{ headers: headers })
    }
}

export default new BookService();